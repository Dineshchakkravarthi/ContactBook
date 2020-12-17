const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_SCHEMA || 'postgres',
                                process.env.DB_USER || 'postgres',
                                process.env.DB_PASSWORD || 'postgres',
                                {
                                    host: process.env.DB_HOST || 'localhost',
                                    port: process.env.DB_PORT || 5432,
                                    dialect: 'postgres',
                                    dialectOptions: {
                                        ssl: process.env.DB_SSL == "true"
                                    }
                                });
const Person = sequelize.define('Person', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true
    },
});

const Car = sequelize.define('Car',{
    modelName : {
        type: Sequelize.STRING,
        allowNull : false
    },
    color:{
        type : Sequelize.STRING,
        allowNull : true
    }
});

const Employee = sequelize.define('Employee',{
    empName :{
        type: Sequelize.STRING,
        allowNull : false
    },
    empID:{
        type : Sequelize.STRING,
        allowNull:false
    }
});

module.exports = {
    sequelize: sequelize,
    Person: Person,
    Car : Car,
    Employee : Employee
};
const {Sequelize} = require("sequelize");

const sequelize = new Sequelize({
    "host": "aws-0-us-east-1.pooler.supabase.com",
    "username": "postgres.iwpbfbaxsbzozjvpocjg",
    "password": "WebDeveloperHoon@123",
    "port": 6543,
    "dialect": "postgres",
    "database": "postgres",
    "logging": false
});

module.exports = sequelize;
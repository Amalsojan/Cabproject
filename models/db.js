const {Sequelize,DataTypes} = require('sequelize');



const sequelize = new Sequelize("cabproject","root","Sreelakshmi123@@",

{

    host: "localhost",

    dialect:"mysql"

});



module.exports.sequelize = sequelize;
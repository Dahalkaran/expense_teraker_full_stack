const Sequelize=require('sequelize');

const sequelize=new Sequelize('booking','root','Dahal@123',{dialect: 'mysql', host: 'localhost'});
 module.exports=sequelize;
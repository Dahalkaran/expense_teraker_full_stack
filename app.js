const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const sequelize=require('./util/database');
const admin=require('./routes/admin');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'views')));


app.use('/api/expenses', admin);


sequelize.sync()
.then(result=>{
    app.listen(3000);
})
.catch(err=>{
    console.error('Error syncing database:',err);
});


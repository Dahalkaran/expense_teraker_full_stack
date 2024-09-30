//const {where}=require('sequelize');

const Details= require('../model/details');

exports.postDetails=(req,res,next)=>{
 //console.log(req.body);
 console.log("cfvsdGVSvse")
 const {description,amount,category}=req.body;
 Details.create({description,amount,category})
 .then(expense=>{
    res.json(expense);
 })
 .catch(err=>{
    res.status(500).json({ error: 'Internal Server Error' });
 })
}
exports.getDetails=(req,res,next)=>{
Details.findAll()
.then(expenses=>{
    res.json(expenses);
}).catch(error=>{
    res.status(500).json({ error: 'Internal Server Error' });
})
}
exports.deleteDetails=(req,res,next)=>{
    const { id } = req.params;
    Details.destroy({ where: { id } })
        .then(() => {
            res.status(204).send();
        })
        .catch(error => {
            res.status(500).json({ error: 'Internal Server Error' });
        });
}

exports.updateExpense=(req,res,next)=>{
    const { id } = req.params;
    const { description, amount, category } = req.body;

    Details.update({ description, amount, category }, { where: { id } })
        .then(() => {
            res.status(200).json({ id, description, amount, category });
        })
        .catch(error => {
            res.status(500).json({ error: 'Internal Server Error' });
        });
}
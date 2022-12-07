const { Result } = require('express-validator');
const db = require('../models/driver');


module.exports.driverDetails = (req,res,next) => 
{
    db.findAll().then(result => {
        res.render('driverDetails',{
            driverDetails : result
        })
    })
}

module.exports.addDriver = (req,res,next)=>
{
    res.render('addDriver');
}

module.exports.addDriverPost = (req,res,next) => 
{
    db.create({
        driverName : req.body.driverName,
        driverLiceneceNo : req.body.driverLiceneceNo,
        driverEmail : req.body.driverEmail,
        driverAddress : req.body.driverAddress,
        driverDob : req.body.driverDob,
        driverGender : req.body.driverGender
    }).then(res.redirect('/driverDetails'))
}

module.exports.editDriver = (req, res, next) => {
    driver_Id = req.params.driver_Id;
    db.findByPk(driver_Id).then(
        result => {
            res.render('editDriver',{
                driverDetails : result
            })
        }
    )
}

module.exports.editDriverPost =async (req, res, next) => {
    await db.update({
        driverName : req.body.driverName,
        driverLiceneceNo : req.body.driverLiceneceNo,
        driverEmail : req.body.driverEmail,
        driverAddress : req.body.driverAddress,
        driverDob : req.body.driverDob,
        driverGender : req.body.driverGender
    },
    {
       where : {
        driver_Id : req.params.driver_Id
       } 
    }).then(
        res.redirect('/driverDetails')
    )
}

module.exports.deleteDriver = (req, res, next) => 
{
    db.destroy({
        where : {driver_Id : req.params.driver_Id}
    }).then(
        res.redirect('/driverDetails')
    )
}




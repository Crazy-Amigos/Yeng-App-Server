/**
 * Created by Abu on 19-12-2017.
 */
var mongoose = require('mongoose');
exports.viewRole=function (req,res) {
    res.render('role/rolemanagment',{layout: false});
}
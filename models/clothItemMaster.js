const mongoose = require('mongoose');
const Schema= mongoose.Schema;
var clothItemMasterSchema = new Schema({
    companyName: {
        type:String
    },
    itemCode: {
        type:String,
    },
    gender: {
        type:String,
    },
    itemCategory: {
        type:String
    },
    itemType: {
        type:String
    },
    size: {
        type:String
    },
    material: {
        type:String
    },
    fittingType:{
        type:String
    },
    neckLine: {
        type:String
    },
    sleeveType: {
        type:String
    },
    length: {
        type:String
    },
    bottomType:{
        type:String
    },
    color: {
        type:String
    },
    pattern: {
        type:String
    },
    printingType:{
        type:String
    },
    quantity: {
        type:String
    },
    frontProfile:{
        type:String
    },
    rearProfile: {
        type:String
    },
    sideProfile:{
        type:String
    }
});

module.exports = mongoose.model('clothItemMaster', clothItemMasterSchema,'clothItemMaster');
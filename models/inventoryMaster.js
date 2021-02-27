const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var inventoryMaster = new Schema({
  designNumber: {
    type: String,
  },
  sku: {
    type: String,
  },
  quantity: {
    type: String,
  },
});

module.exports = mongoose.model(
    'inventoryMaster',
    inventoryMaster,
    'inventoryMaster'
  );
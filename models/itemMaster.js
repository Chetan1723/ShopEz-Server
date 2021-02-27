const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var clothItemMasterSchema = new Schema({
  brand: {
    type: String,
  },
  designNumber: {
    type: String,
  },
  sku: {
    type: String,
  },
  gender: {
    type: String,
  },
  itemCategory: {
    type: String,
  },
  itemType: {
    type: String,
  },
  size: {
    type: String,
  },
  material: {
    type: String,
  },
  fittingType: {
    type: String,
  },
  neckLine: {
    type: String,
  },
  sleeveType: {
    type: String,
  },
  length: {
    type: String,
  },
  bottomType: {
    type: String,
  },
  color: {
    type: String,
  },
  pattern: {
    type: String,
  },
  printingType: {
    type: String,
  },
  price: {
    type: String,
  },
  discount: {
    type: String,
  },
  showPrice: {
    type: String,
  },
  imageDetails: [
    {
      imageName: {
        type: String,
      },
    },
  ],
  isVisible: {
    type: Boolean,
    default: true,
  },
  merchantId: {
    type: mongoose.SchemaTypes.ObjectId,
  },
});

module.exports = mongoose.model(
  'itemMaster',
  clothItemMasterSchema,
  'itemMaster'
);

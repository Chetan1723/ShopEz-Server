const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var merchantMaster = new Schema({
  merchantId: {
    type: String,
  },
  merchantName: {
    type: String,
  },
  productType: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  phoneNumber: [
    {
      phone: {
        type: String,
      },
    },
  ],
  logoPath: {
    type: String,
  },
  socialMediaLinks: [
    {
      socialMediaType: {
        type: Stringg,
      },
      link: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model(
  'merchantMaster',
  merchantMaster,
  'merchantMaster'
);

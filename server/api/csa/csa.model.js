'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CsaSchema = new Schema({
  user: {type: Schema.ObjectId, ref: 'User'},
  name: String,
  desc: String,
  season: String,
  price: Number,
  frequency: String,
  purchasers: [{name:String, id:String}],
  pulocation: String,
  shares: Number,
  payment: String,
  active: Boolean
});

module.exports = mongoose.model('Csa', CsaSchema);

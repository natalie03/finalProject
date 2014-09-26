'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CsaSchema = new Schema({
  user: {type: Schema.ObjectId, ref: 'User'},
  name: String,
  season: String,
  price: Number,
  slots: Number,
  active: Boolean
});

module.exports = mongoose.model('Csa', CsaSchema);

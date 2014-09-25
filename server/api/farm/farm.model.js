'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FarmSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Farm', FarmSchema);
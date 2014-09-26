'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserprofSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Userprof', UserprofSchema);
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProfileSchema = new Schema({
  user: {type: Schema.ObjectId, ref: 'User'},
  name: String,
  accType: String,
  info: String,
  address: String,
  website: String,
  csas:[{type: Schema.ObjectId, ref: 'Csa'}],
  active: Boolean
});

module.exports = mongoose.model('Profile', ProfileSchema);

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProfileSchema = new Schema({
  user: {type: Schema.ObjectId, ref: 'User'},
  email:String,
  name: String,
  phoneNum: String,
  accType: String,
  category: String,
  info: String,
  phone: String,
  address: String,
  website: String,
  csas:[],
  active: Boolean
});

module.exports = mongoose.model('Profile', ProfileSchema);

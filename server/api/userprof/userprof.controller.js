'use strict';

var _ = require('lodash');
var Userprof = require('./userprof.model');

// Get list of userprofs
exports.index = function(req, res) {
  Userprof.find(function (err, userprofs) {
    if(err) { return handleError(res, err); }
    return res.json(200, userprofs);
  });
};

// Get a single userprof
exports.show = function(req, res) {
  Userprof.findById(req.params.id, function (err, userprof) {
    if(err) { return handleError(res, err); }
    if(!userprof) { return res.send(404); }
    return res.json(userprof);
  });
};

// Creates a new userprof in the DB.
exports.create = function(req, res) {
  Userprof.create(req.body, function(err, userprof) {
    if(err) { return handleError(res, err); }
    return res.json(201, userprof);
  });
};

// Updates an existing userprof in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Userprof.findById(req.params.id, function (err, userprof) {
    if (err) { return handleError(res, err); }
    if(!userprof) { return res.send(404); }
    var updated = _.merge(userprof, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, userprof);
    });
  });
};

// Deletes a userprof from the DB.
exports.destroy = function(req, res) {
  Userprof.findById(req.params.id, function (err, userprof) {
    if(err) { return handleError(res, err); }
    if(!userprof) { return res.send(404); }
    userprof.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
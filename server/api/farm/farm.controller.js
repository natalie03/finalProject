'use strict';

var _ = require('lodash');
var Farm = require('./farm.model');

// Get list of farms
exports.index = function(req, res) {
  Farm.find(function (err, farms) {
    if(err) { return handleError(res, err); }
    return res.json(200, farms);
  });
};

// Get a single farm
exports.show = function(req, res) {
  Farm.findById(req.params.id, function (err, farm) {
    if(err) { return handleError(res, err); }
    if(!farm) { return res.send(404); }
    return res.json(farm);
  });
};

// Creates a new farm in the DB.
exports.create = function(req, res) {
  Farm.create(req.body, function(err, farm) {
    if(err) { return handleError(res, err); }
    return res.json(201, farm);
  });
};

// Updates an existing farm in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Farm.findById(req.params.id, function (err, farm) {
    if (err) { return handleError(res, err); }
    if(!farm) { return res.send(404); }
    var updated = _.merge(farm, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, farm);
    });
  });
};

// Deletes a farm from the DB.
exports.destroy = function(req, res) {
  Farm.findById(req.params.id, function (err, farm) {
    if(err) { return handleError(res, err); }
    if(!farm) { return res.send(404); }
    farm.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
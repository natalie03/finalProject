'use strict';

var _ = require('lodash');
var Farmprof = require('./farmprof.model');

// Get list of farmprofs
exports.index = function(req, res) {
  Farmprof.find(function (err, farmprofs) {
    if(err) { return handleError(res, err); }
    return res.json(200, farmprofs);
  });
};

// Get a single farmprof
exports.show = function(req, res) {
  Farmprof.findById(req.params.id, function (err, farmprof) {
    if(err) { return handleError(res, err); }
    if(!farmprof) { return res.send(404); }
    return res.json(farmprof);
  });
};

// Creates a new farmprof in the DB.
exports.create = function(req, res) {
  Farmprof.create(req.body, function(err, farmprof) {
    if(err) { return handleError(res, err); }
    return res.json(201, farmprof);
  });
};

// Updates an existing farmprof in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Farmprof.findById(req.params.id, function (err, farmprof) {
    if (err) { return handleError(res, err); }
    if(!farmprof) { return res.send(404); }
    var updated = _.merge(farmprof, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, farmprof);
    });
  });
};

// Deletes a farmprof from the DB.
exports.destroy = function(req, res) {
  Farmprof.findById(req.params.id, function (err, farmprof) {
    if(err) { return handleError(res, err); }
    if(!farmprof) { return res.send(404); }
    farmprof.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
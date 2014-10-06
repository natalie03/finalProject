'use strict';

var _ = require('lodash');
var Csa = require('./csa.model');

// Get list of csas
exports.index = function(req, res) {
  Csa.find(function (err, csas) {
    if(err) { return handleError(res, err); }
    return res.json(200, csas);
  });
};

// Get a single csa
exports.show = function(req, res) {
  Csa.findById(req.params.id, function (err, csa) {
    if(err) { return handleError(res, err); }
    if(!csa) { return res.send(404); }
    return res.json(csa);
  });
};

// Creates a new csa in the DB.
exports.create = function(req, res) {
  Csa.create(req.body, function(err, csa) {
    if(err) { return handleError(res, err); }
    return res.json(201, csa);
  });
};

// Updates an existing csa in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Csa.findById(req.params.id, function (err, csa) {
    if (err) { return handleError(res, err); }
    if(!csa) { return res.send(404); }
    var updated = _.merge(csa, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, csa);
    });
  });
};
exports.updatePurchasers = function(req, res) {
  if(req.body._id) { delete req.body._id; }

  Csa.findByIdAndUpdate(req.params.id,
    {$push:{"purchasers":{name:req.body.name, id:req.body.id, email:req.body.email, phoneNum:req.body.phoneNum, paid:req.body.paid, location:req.body.location}}},
    {safe:true, upsert:true},
    function (err, csa) {
    if (err) { return handleError(res, err); }
    if(!csa) { return res.send(404); }
    console.log(csa);
  });
};

// Deletes a csa from the DB.
exports.destroy = function(req, res) {
  Csa.findById(req.params.id, function (err, csa) {
    if(err) { return handleError(res, err); }
    if(!csa) { return res.send(404); }
    csa.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}

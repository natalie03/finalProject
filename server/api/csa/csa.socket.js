/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Csa = require('./csa.model');

exports.register = function(socket) {
  Csa.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Csa.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('csa:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('csa:remove', doc);
}
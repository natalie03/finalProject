/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Farm = require('./farm.model');

exports.register = function(socket) {
  Farm.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Farm.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('farm:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('farm:remove', doc);
}
/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Farmprof = require('./farmprof.model');

exports.register = function(socket) {
  Farmprof.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Farmprof.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('farmprof:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('farmprof:remove', doc);
}
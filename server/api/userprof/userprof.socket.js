/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Userprof = require('./userprof.model');

exports.register = function(socket) {
  Userprof.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Userprof.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('userprof:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('userprof:remove', doc);
}
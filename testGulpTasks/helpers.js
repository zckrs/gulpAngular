'use strict';

var spawn = require('cross-spawn');
var del = require('del');

exports.cleanAndRun = function (paths, task, callback) {
  return del(paths).then(function () {

    var gulp = spawn('node', ['node_modules/.bin/gulp', task]);

    gulp.stderr.on('data', function(data) {
      console.log('STDERR: ' + data);
    });

    gulp.on('close', function(code) {
      if (code !== 0) {
        throw new Error('Err in gulp task, try to run $ gulp ' + task);
      }
      callback();
    });
  });
};

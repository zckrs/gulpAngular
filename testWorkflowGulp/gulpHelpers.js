'use strict';

var spawn = require('cross-spawn');
var del = require('del');
var conf = require('../gulp/conf');

exports.cleanAndRun = function (paths, task, callback) {
  return del([conf.paths.dist, conf.paths.tmp]).then(function (paths) {
    console.log('Deleted files/folders:\n', paths.join('\n'));

    var gulp = spawn('node', ['node_modules/.bin/gulp', 'partials']);

    console.log('##command \'gulp\' started');

    gulp.stderr.on('data', function(data) {
      console.log('STDERR: ' + data);
    });

    gulp.on('close', function(code) {
      if (code !== 0) {
        throw new Error('Err in gulp task, try to run $ gulp ' + task);
      }
      console.log('##command \'gulp\' finished\n');
      callback();
    });
  });
};

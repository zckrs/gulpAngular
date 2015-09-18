'use strict';

var path = require('path');

var gulp = require('gulp');
var browserSync = require('browser-sync');

var conf = require('./conf');

gulp.task('browser-sync', browserSyncServe);
gulp.task('browser-sync:dist', browserSyncDist);

function browserSyncServe(done) {
  browserSync.init({
    server: {
      baseDir: [path.join(conf.paths.tmp, '/serve'), conf.paths.src],
      routes: {
        "/bower_components": "bower_components"
      }
    }
  });

  gulp.watch(path.join(conf.paths.src, '/app/**/*.html'), browserSync.reload);

  done();
}

function browserSyncDist(done) {
  browserSync.init({
    server: {
      baseDir: [conf.paths.dist],
    }
  });

  done();
}

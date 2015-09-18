'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

function browserSyncInit(done) {
  browserSync.init({
    open: false,
    server: {
      baseDir: ['.tmp/serve', 'src'],
      routes: {
        "/bower_components": "bower_components"
      }
    },
  });

  gulp.watch(path.join(conf.paths.src, '/app/**/*.html'), browserSync.reload);

  done();
}

gulp.task('browser-sync', browserSyncInit);

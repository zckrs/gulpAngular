'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
  return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jscs({
      fix: true,
      configPath: '.jscsrc'
    }))
    .pipe(browserSync.reload({ stream: true }))
    .pipe($.size())
    .pipe(gulp.dest(path.join(conf.paths.src, '/app/')));
});

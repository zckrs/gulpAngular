'use strict';

var path = require('path');

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var browserSync = require('browser-sync');

var conf = require('./conf');

gulp.task('scripts', scripts);

function scripts() {
  return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
    .pipe(eslint())
    .pipe(eslint.format());
};

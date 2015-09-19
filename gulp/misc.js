'use strict';

var path = require('path');

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var mainBowerFiles = require('main-bower-files');

var conf = require('./conf');

gulp.task('clean', clean);
gulp.task('fonts', fonts);
gulp.task('other', other);

function clean() {
  return del([path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')]);
}

function fonts() {
  return gulp.src(mainBowerFiles())
    .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
    .pipe($.flatten())
    .pipe(gulp.dest(path.join(conf.paths.dist, '/fonts/')));
}

function other() {
  var fileFilter = $.filter(function (file) {
    return file.stat.isFile();
  });

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join('!' + conf.paths.src, '/**/*.{html,css,js,scss}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
}

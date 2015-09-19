'use strict';

var joinPath = require('path').join;

var gulp = require('gulp');
var HubRegistry = require('gulp-hub');

var conf = require('./gulp/conf');

// Load some files into the registry
var hub = new HubRegistry(['gulp/misc.js' ,'gulp/build.js', 'gulp/styles.js', 'gulp/scripts.js', 'gulp/inject.js', 'gulp/browserSync.js', 'gulp/karma.js', 'gulp/protractor.js']);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('default', gulp.series('clean', gulp.parallel('styles', 'scripts'), 'inject', gulp.parallel('fonts', 'other'), 'html'));
gulp.task('serve', gulp.series(gulp.parallel('styles', 'scripts'), 'inject', watch, 'browser-sync'));
gulp.task('serve:dist', gulp.series('default', 'browser-sync:dist'));

function watch(done) {
  gulp.watch([joinPath(conf.paths.src, '/*.html'), 'bower.json'], gulp.parallel('inject'));

  gulp.watch([
    joinPath(conf.paths.src, '/app/**/*.css'),
    joinPath(conf.paths.src, '/app/**/*.scss')
  ], gulp.series('styles'));

  gulp.watch(joinPath(conf.paths.src, '/app/**/*.js'), gulp.series('scripts', 'inject'));

  done();
}

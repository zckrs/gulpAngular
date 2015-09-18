'use strict';

var path = require('path');

var gulp = require('gulp');
var HubRegistry = require('gulp-hub');

var conf = require('./gulp/conf');

/* load some files into the registry */
var hub = new HubRegistry(['gulp/build.js', 'gulp/styles.js', 'gulp/scripts.js', 'gulp/inject.js', 'gulp/browserSync.js']);

/* tell gulp to use the tasks just loaded */
gulp.registry(hub);

function watch(done) {
  gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], gulp.parallel('inject'));

  gulp.watch([
    path.join(conf.paths.src, '/app/**/*.css'),
    path.join(conf.paths.src, '/app/**/*.scss')
  ], gulp.series('styles'));

  gulp.watch(path.join(conf.paths.src, '/app/**/*.js'), gulp.series('scripts', 'inject'));

  done();
};

gulp.task('serve', gulp.series(watch, 'browser-sync'));

gulp.task('default', gulp.series('clean', gulp.parallel('partials', 'styles', 'scripts'), 'inject', gulp.parallel('fonts', 'other'), 'html'));

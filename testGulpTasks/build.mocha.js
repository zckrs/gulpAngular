'use strict';

var assert = require('yeoman-assert');
var join = require('path').join;

var conf = require('../gulp_tasks/gulpconf');
var gulpHelpers = require('./helpers');

describe('Gulp task: build', function() {

  before(function(done) {
    gulpHelpers.cleanAndRun([conf.paths.dist, conf.paths.tmp], 'build', done);
  });

  describe('should compute templateCacheHtml.js in tmp folder', function() {
    it('who exist', function() {
      assert.file(join(conf.paths.tmp, 'templateCacheHtml.js'));
    });
    it('who contains some characters', function() {
      assert.fileContent(join(conf.paths.tmp, 'templateCacheHtml.js'), 'fake partial');
    });
  });

  describe('should have index.html in dist folder', function() {
    it('who exist', function() {
      assert.file(join(conf.paths.dist, 'index.html'));
    });
    it('who contains stylesheet link to styles/app-*.css', function() {
      assert.fileContent(join(conf.paths.dist, 'index.html'), 'styles/app-');
    });
    it('who contains stylesheet link to scripts/app-*.js', function() {
      assert.fileContent(join(conf.paths.dist, 'index.html'), 'scripts/app-');
    });
    it('who contains stylesheet link to styles/vendor-*.css', function() {
      assert.fileContent(join(conf.paths.dist, 'index.html'), 'styles/vendor-');
    });
    it('who contains stylesheet link to scripts/vendor-*.js', function() {
      assert.fileContent(join(conf.paths.dist, 'index.html'), 'scripts/vendor-');
    });
  });

  describe('should have styles directory in dist', function() {
    it('who exist', function() {
      assert.file(join(conf.paths.dist, 'styles'));
    });
  });

  describe('should have scripts directory in dist', function() {
    it('who exist', function() {
      assert.file(join(conf.paths.dist, 'scripts'));
    });
  });

  describe('should have maps directory in dist', function() {
    it('who exist', function() {
      assert.file(join(conf.paths.dist, 'maps'));
    });
  });

  describe('should have fonts directory in dist', function() {
    it('who exist', function() {
      assert.file(join(conf.paths.dist, 'fonts'));
    });
  });

});

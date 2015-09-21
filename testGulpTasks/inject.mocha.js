'use strict';

var assert = require('yeoman-assert');
var join = require('path').join;

var conf = require('../gulp_tasks/gulpconf');
var gulpHelpers = require('./helpers');

describe('Gulp task: inject', function() {

  before(function(done) {
    gulpHelpers.cleanAndRun([conf.paths.dist, conf.paths.tmp], 'inject', done);
  });

  describe('should have index.html computed', function() {
    it('who exist', function() {
      assert.file(join(conf.paths.tmp, 'index.html'));
    });
    it('who contains stylesheet link to index.css computed by styles task', function() {
      assert.fileContent(join(conf.paths.tmp, 'index.html'), 'index.css');
    });
    it('who contains script link to javascript files', function() {
      assert.fileContent(join(conf.paths.tmp, 'index.html'), 'app/index.module.js');
      assert.fileContent(join(conf.paths.tmp, 'index.html'), 'app/dummy.js');
    });
    it('who contains script link to bower_components files', function() {
      assert.fileContent(join(conf.paths.tmp, 'index.html'), 'bower_components');
    });
  });

});

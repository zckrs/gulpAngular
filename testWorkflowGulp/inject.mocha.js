'use strict';

var assert = require('yeoman-assert');
var chai = require('chai');
chai.should();
var join = require('path').join;

var conf = require('../gulp/conf');
var gulpHelpers = require('./gulpHelpers');

describe('Workflow Gulp', function() {
  var expectDir = 'testWorkflow/expect/';

  before(function(done) {
    gulpHelpers.cleanAndRun([conf.paths.dist, conf.paths.tmp], 'inject', done);
  });

  describe('should have index.html computed', function() {
    it('who exist', function() {
      assert.file(join(conf.paths.tmp, 'serve/index.html'));
    });
    it('who contains stylesheet link to app/index.css', function() {
      assert.fileContent(join(conf.paths.tmp, 'serve/index.html'), 'app/index.css');
    });
    it('who contains script link to app/index.module.js', function() {
      assert.fileContent(join(conf.paths.tmp, 'serve/index.html'), 'app/index.css');
    });
    it('who contains script link to bower_components', function() {
      assert.fileContent(join(conf.paths.tmp, 'serve/index.html'), 'bower_components');
    });
  });

});

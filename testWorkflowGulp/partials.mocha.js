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
    gulpHelpers.cleanAndRun([conf.paths.dist, conf.paths.tmp], 'partials', done);
  });

  describe('should have templateCacheHtml.js file', function() {
    it('who exist', function() {
      assert.file(join(conf.paths.tmp, 'partials/templateCacheHtml.js'));
    });
    it('who contains $templateCache', function() {
      assert.fileContent(join(conf.paths.tmp, 'partials/templateCacheHtml.js'), '$templateCache');
    });
  });

});

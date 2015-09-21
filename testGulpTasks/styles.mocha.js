'use strict';

var assert = require('yeoman-assert');
var pathJoin = require('path').join;

var conf = require('../gulp_tasks/gulpconf');
var helpers = require('./helpers');

describe('Gulp task: styles', function() {

  before(function(done) {
    helpers.cleanAndRun([conf.paths.dist, conf.paths.tmp], 'styles', done);
  });

  describe('should have CSS file compiled', function() {
    it('who exist', function() {
      assert.file(pathJoin(conf.paths.tmp, 'index.css'));
    });
    it('who contain CSS class', function() {
      assert.fileContent(pathJoin(conf.paths.tmp, 'index.css'), '.awesome-test img.unicor');
    });
    it('with CSS injected by gulp-inject', function() {
      assert.fileContent(pathJoin(conf.paths.tmp, 'index.css'), '.class-injected:after');
    });
    it('who contain sourcemaps', function() {
      assert.fileContent(pathJoin(conf.paths.tmp, 'index.css'), '/*# sourceMappingURL');
    });
    it('who apply autoprefixer', function() {
      assert.fileContent(pathJoin(conf.paths.tmp, 'index.css'), '-webkit-animation');
    });
    // missed test on wiredep injection
  });

});

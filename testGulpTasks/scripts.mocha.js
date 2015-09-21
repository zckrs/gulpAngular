'use strict';

var assert = require('yeoman-assert');

var conf = require('../gulp_tasks/gulpconf');
var helpers = require('./helpers');

describe('Gulp task: scripts', function() {

  before(function(done) {
    helpers.cleanAndRun([conf.paths.dist, conf.paths.tmp], 'scripts', done);
  });

  describe('should', function() {
    it('works', function() {
      assert(true);
    });
  });

});

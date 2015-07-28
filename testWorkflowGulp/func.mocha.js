'use strict';

var fs = require('fs');
var assert = require('assert');

var spawn = require('cross-spawn');
var del = require('del');
var chai = require('chai');
var conf = require('../gulp/conf');
var join = require('path').join;
chai.should();

describe('Workflow Gulp', function() {
  var codeSpawn;
  var expectDir = 'testWorkflow/expect/';

  before(function(done) {

    del([conf.paths.dist, conf.paths.tmp], function (err, paths) {
      console.log('Deleted files/folders:\n', paths.join('\n'));

      if (err) {
        throw err;
      }

      var gulp = spawn('node', ['node_modules/.bin/gulp']);

      console.log('##command \'gulp\' started');

      gulp.stdout.on('data', function(data) {
        console.log('STDOUT: ' + data);
      });

      gulp.stderr.on('data', function(data) {
        console.log('STDERR: ' + data);
      });

      gulp.on('close', function(code) {
        codeSpawn = code;
        console.log('##command \'gulp\' finished\n');
        done();
      });
    });
  });

  it('should return success code 0', function(done) {
    assert.strictEqual(codeSpawn, 0, 'child_process returns a error value: ' + codeSpawn);
    done();
  });

  describe('should have dist/ folder', function() {
    it('who exist', function(done) {
      try {
        var result = fs.openSync(join('testWorkflowGulp/build/dist'), 'r');
      } catch (e) {
        result = false
      } finally {
        result.should.be.ok;
        done();
      }

      // fs.exists(join('testWorkflowGulp/expect/distsdsd'), function(exists) {
      //   /* Stinks that ok is an expression instead of a function call */
      //   /* jshint expr: true */
      //   exists.should.be.ok;
      //   /* jshint expr: false */
      //   done();
      // });
    });
  });

});

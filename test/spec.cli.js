'use strict';

var exec = require('child_process').exec;
var assert = require('assert');
var cli = require('./cli');

describe('CLI: \'s18n\'', function() {

  it('should return usage when no command is provided', function(done) {
    exec(cli(), function(err, out, stderr) {
      assert(out.includes('Usage: s18n [options] [command]'));
      done();
    });
  });

  it('should return the current version', function(done) {
    exec(cli('--version'), function(err, out, stderr) {
      assert(out.includes(require('../package.json').version));
      done();
    });
  });

});

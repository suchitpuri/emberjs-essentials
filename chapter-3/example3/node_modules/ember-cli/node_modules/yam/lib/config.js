'use strict';

var ioUtils = require('./utils/io-utils');
var path    = require('path');

var fileExists = ioUtils.exists;
var readFile   = ioUtils.readFile;

function Config(localPath) {
  if (!localPath) { return {}; }

  localPath = path.normalize(localPath);

  if (fileExists(localPath)) {
    return readFile(localPath);
  }
}

module.exports = Config;

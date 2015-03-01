'use strict';

var fs = require('fs-extra');

var exists = function exists(path) {
  return fs.existsSync(path);
};

var stripComments = function stripComments(string) {
  string = string || "";

  string = string.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\//g, "");
  string = string.replace(/\/\/\s\S.+/g, ""); // Everything after '//'

  return string;
};

var readFile = function readFile(path) {
  var contents = fs.readFileSync(path, { encoding: 'utf8' });
  contents = stripComments(contents);

  if(!contents.length) {
    return {};
  }

  try {
    return JSON.parse(contents);
  } catch(e) {
    throw "Error when parsing file in " + path + ". Make sure that you have a valid JSON."
  }
};

module.exports.readFile = readFile;
module.exports.exists   = exists;

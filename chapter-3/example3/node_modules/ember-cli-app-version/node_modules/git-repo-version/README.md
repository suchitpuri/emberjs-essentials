# git-repo-version

Generates a version string based on the version specified in your package.json and the sha revision of
the current commit/branch.

## Install

Tipically you will only need to install this as a devDependency as follows"

`npm install --save-dev git-repo-version`

## Usage

This plugin automatically exports a function that when called calculates return the version string with a sha of the given length (defaults to 8)

```js
var getVersion = require('git-repo-version');
getVersion();   // "1.5.0-beta.1+pre.a1b2c3d4"
getVersion(10); // "1.5.0-beta.1+pre.a1b2c3d4e5"
```

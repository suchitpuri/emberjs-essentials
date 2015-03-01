var fs = require('fs')
var path = require('path')
var test = require('tap').test
var Builder = require('broccoli').Builder
var pickFiles = require('..')

var fixturePath = path.join(__dirname, 'fixtures')

test('when no files option is specified', function(t) {
  t.test('with a nested destination directory', function(t) {
    var tree = pickFiles(fixturePath, {
      srcDir: '/',
      destDir: '/foo'
    })

    var builder = new Builder(tree)
    builder.build()
    .then(function(result) {
      t.ok(fs.existsSync(path.join(result.directory, 'foo', 'dir1', 'blah.txt')))

      t.end()
    })
  })

  t.test('with a root destination directory', function(t) {
    var tree = pickFiles(fixturePath, {
      srcDir: '/',
      destDir: '/'
    })

    var builder = new Builder(tree)
    builder.build()
    .then(function(result) {
      t.ok(fs.existsSync(path.join(result.directory, 'dir1', 'blah.txt')))

      t.end()
    })
  })

  t.end()
})

test('with files glob specified', function(t) {
  t.test('with a root destination directory', function(t) {
    var tree = pickFiles(fixturePath, {
      files: ['**/blah.txt'],
      srcDir: '/',
      destDir: '/'
    })

    var builder = new Builder(tree)
    builder.build()
    .then(function(result) {
      t.ok(fs.existsSync(path.join(result.directory, 'dir1', 'blah.txt')))
      t.ok(fs.existsSync(path.join(result.directory, 'dir2', 'blah.txt')))

      t.notOk(fs.existsSync(path.join(result.directory, 'dir1', 'tmp.txt')))
      t.notOk(fs.existsSync(path.join(result.directory, 'dir2', 'tmp.txt')))

      t.end()
    })
  })

  t.end()
})

/**
 * Modules
 */

var fs = require('fs')
var glob = require('glob')
var path = require('path')

/**
 * Expose symlibs
 */

module.exports = symlibs

/**
 * symlibs
 */

function symlibs (pattern) {
  glob
    .sync(pattern)
    .filter(function (file) {
      return fs.statSync(file).isDirectory()
    })
    .forEach(function (dir) {
      var target = path.relative('node_modules', dir)
      var link = path.join('node_modules', path.basename(dir))

      try {
        fs.unlinkSync(link)
      } catch (e) {}

      fs.symlinkSync(target, link, 'dir')
    })
}

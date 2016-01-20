#!/usr/bin/env node

/**
 * Imports
 */

var symlibs = require('..')

/**
 * Symlibs CLI
 */

var args = process.argv.slice(2)

if (args.length < 1) {
  console.log('Usage: symblibs src/*')
  process.exit(0)
}

symlibs(args[0])

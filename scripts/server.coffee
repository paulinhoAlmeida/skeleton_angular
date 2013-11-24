#!/usr/bin/env coffee
express = require 'express'
app = module.exports = express()

coffee = require 'coffee-script'		# for on the fly compilation
fs = require 'fs'
root_dir = __dirname + '/..'
public_dir = root_dir + '/app'

stylus = require 'stylus'

app.configure ->
	app.locals.pretty = true
	app.use express.favicon()
	app.use express.logger('dev', @logOptions) if !module.parent	# don't log in test mode
	app.use express.compress()
	app.use express.methodOverride()
	app.use express.bodyParser()
	app.use express.static public_dir
	app.use '/test', express.static root_dir + '/test'
	app.use app.router

app.configure 'development', ->
	app.use express.errorHandler  dumpExceptions: true, showStack: true

app.configure 'production', ->
	app.use express.errorHandler()

if !module.parent
	app.listen port = 8001
	console.log 'Listening on port ' + port

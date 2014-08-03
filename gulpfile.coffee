# Load all required libraries.
gulp            = require 'gulp'
coffee          = require 'gulp-coffee'
concat          = require 'gulp-concat'
sass            = require 'gulp-sass'
prefix          = require 'gulp-autoprefixer'
cssmin          = require 'gulp-cssmin'
jade            = require 'gulp-jade'
minifyHTML      = require 'gulp-minify-html'
svgmin          = require 'gulp-svgmin'
coffeeify       = require 'coffeeify'
browserify      = require 'gulp-browserify'
# livereload      = require 'gulp-livereload'
rename          = require 'gulp-rename'
gutil           = require 'gulp-util'
plumber         = require 'gulp-plumber'
mainBowerFiles  = require 'main-bower-files'
$               = require('gulp-load-plugins')();

# Modules required for the livereload - express, connect, tiny-lr, etc
embedlr = require('gulp-embedlr')
refresh = require('gulp-livereload')
lrserver = require('tiny-lr')()
express = require('express')
livereload = require('connect-livereload')
livereloadport = 35729
serverport = 5000

# Set up an express server (not starting it yet)
server = express()
# Add live reload
server.use(livereload({port: livereloadport}))
# Use our 'dist' folder as rootfolder
server.use(express.static('dist/'))

# Watch and compile coffeescripts
gulp.task 'coffee', ->
  gulp.src('src/app/app.coffee', { read: false })
    .pipe(plumber())
    .pipe browserify({ transform: ['coffeeify'], debug: true, extensions: [ '.coffee' ] })
    .on 'error', gutil.log
    .pipe concat 'app-bundle.js'
    .pipe gulp.dest 'dist/scripts/app'
    .pipe refresh lrserver

# Bower dependencies
gulp.task 'bower', ->
  gulp.src(mainBowerFiles(), { base: 'vendor/bower_components' })
    .pipe gulp.dest 'dist/scripts/bower_components'

# Sass task....
gulp.task 'sass', ->
  gulp.src [ 'src/styles/**/*.scss' ]
    .pipe(plumber())
    .pipe sass { includePaths: [ 'scss' ] }
    .on 'error', gutil.log
    # .pipe $.autoprefixer 'last 1 version' # doesn't seem work
    .pipe gulp.dest 'dist/styles'
    # .pipe $.size()

# Builds the html (for the app)???
gulp.task 'html', ->
  gulp.src 'src/index.html'
    .pipe minifyHTML()
    .pipe gulp.dest 'dist/'
    .pipe refresh(lrserver)

# Minify your SVG.
gulp.task 'svg', ->
  gulp.src 'src/assets/images/**/*.svg'
    .pipe svgmin()
    .pipe gulp.dest 'dist/assets/images'

# Copy the fonts using streams.
gulp.task 'fonts', ->
  gulp.src 'src/assets/fonts/**/*'
    .pipe gulp.dest 'dist/assets/fonts'

# connect task - new konnekt
gulp.task 'konnekt', ->
  # Start webserver
  server.listen(serverport)
  # Start live reload
  lrserver.listen(livereloadport)

# Watch for changes inside application assets and run various tasks
# @todo (dragos) add multiple watchers for html, img, svg, etc, etc
gulp.task 'watch', ->
  gulp.watch 'src/app/**/*.coffee', [ 'coffee' ] # states, controllers, app specific, mostly
  gulp.watch 'src/common/**/*.coffee', [ 'coffee' ] # standalone components, independt(kinda) of app
  gulp.watch 'src/styles/index.scss', [ 'sass' ]
  gulp.watch 'src/index.html', [ 'html' ]

# Develop task
# gulp.task 'develop', [ 'connect', 'reload', 'watch', 'sass', 'bower', 'coffee' ]
# gulp.task 'ttks', [ 'connect', 'bower' ]
gulp.task 'ttks', [ 'konnekt', 'watch', 'bower', 'html', 'sass', 'fonts' ]

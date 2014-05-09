# Load all required libraries.
gulp       = require 'gulp'
coffee     = require 'gulp-coffee'
concat     = require 'gulp-concat'
sass       = require 'gulp-sass'
prefix     = require 'gulp-autoprefixer'
cssmin     = require 'gulp-cssmin'
jade       = require 'gulp-jade'
minifyHTML = require 'gulp-minify-html'
svgmin     = require 'gulp-svgmin'
coffeeify  = require 'coffeeify'
browserify = require 'gulp-browserify'
livereload = require 'gulp-livereload'
rename     = require 'gulp-rename'
$          = require('gulp-load-plugins')();

# Watch and compile coffeescripts
gulp.task 'coffee', ->
  gulp.src('app/scripts/app.coffee', { read: false })
    .pipe browserify({ transform: ['coffeeify'], debug: true, extensions: [ '.coffee' ] })
    .pipe concat 'bundle.js'
    .pipe gulp.dest '.tmp/scripts'

# Sass task....
gulp.task 'sass', ->
  gulp.src [ 'app/styles/**/*.scss' ]
    .pipe sass { includePaths: [ 'scss' ] }
    # .pipe $.autoprefixer 'last 1 version' # doesn't seem work
    .pipe gulp.dest '.tmp/styles'
    .pipe $.size()

# Create you HTML from Jade, Adds an additional step of
#  minification for filters (like markdown) that are not
#  minified by Jade.
gulp.task 'html', ->
  # gulp.src 'app/index.jade'
    # .pipe jade()
  gulp.src 'app/index.html'
    .pipe minifyHTML()
    .pipe gulp.dest '.tmp/templates'

# Minify your SVG.
gulp.task 'svg', ->
  gulp.src 'app/img/*.svg'
    .pipe svgmin()
    .pipe gulp.dest 'www/img'

# Copy the fonts using streams.
gulp.task 'copy:fonts', ->
  gulp.src 'app/fonts/*'
    .pipe gulp.dest '.tmp/fonts'

# Connect
gulp.task 'connect', ->
  $.connect.server
    root: ['app', '.tmp'],
    port: 9001,
    livereload: true

# Watch for changes inside application assets and run various tasks
# @todo (dragos) add multiple watchers for html, img, svg, etc, etc
gulp.task 'watch', ->
  gulp.watch 'app/scripts/**/*.coffee', [ 'coffee' ]
  gulp.watch 'app/styles/index.scss', [ 'sass' ]

# Watches the application's files and reload the browser
gulp.task 'reload', ->
    gulp.watch [
      'app/index.html',
      'app/styles/**/*.scss',
      'app/scripts/**/*.coffee',
      'app/images/**/*'
    ], (event) ->
      gulp.src(event.path)
        .pipe $.connect.reload()

# Develop task
gulp.task 'develop', [ 'connect', 'reload', 'watch', 'sass', 'coffee' ]

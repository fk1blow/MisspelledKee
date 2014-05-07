# Load all required libraries.
gulp       = require 'gulp'
coffee     = require 'gulp-coffee'
concat     = require 'gulp-concat'
sass       = require 'gulp-ruby-sass'
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

# Wathc and Compile coffeescripts
gulp.task 'coffee', ->
  # gulp.src('app/scripts/**/*.coffee', { read: false })
  gulp.src('app/scripts/test.coffee', { read: false })
    # .pipe(coffee({ bare: true, sourceMap: true }))
    .pipe browserify({ transform: ['coffeeify'], debug: true, extensions: ['.coffee'] })
    .pipe concat 'bundle.js'
    .pipe gulp.dest './tmp/scripts'

# Create your CSS from Sass, Autoprexif it to target 99%
#  of web browsers, minifies it.
gulp.task 'css', ->
  gulp.src 'app/css/index.sass'
    .pipe sass()
    .pipe prefix "> 1%"
    .pipe cssmin keepSpecialComments: 0
    .pipe gulp.dest 'tmp/styles'

# Create you HTML from Jade, Adds an additional step of
#  minification for filters (like markdown) that are not
#  minified by Jade.
gulp.task 'html', ->
  # gulp.src 'app/index.jade'
    # .pipe jade()
  gulp.src 'app/index.html'
    .pipe minifyHTML()
    .pipe gulp.dest 'tmp/templates'

# Minify your SVG.
gulp.task 'svg', ->
  gulp.src 'app/img/*.svg'
    .pipe svgmin()
    .pipe gulp.dest 'www/img'

# Copy the fonts using streams.
gulp.task 'copy:fonts', ->
  gulp.src 'app/fonts/*'
    .pipe gulp.dest 'tmp/fonts'

# Connect
gulp.task 'connect', ->
  $.connect.server
    root: ['app', 'tmp'],
    port: 9000,
    livereload: true

# Watches the application's files and reloads the browser
gulp.task 'reload', ->
    gulp.watch 'app/scripts/*.coffee', ['coffee']

    # Watch for changes in `app` folder
    gulp.watch [
        'app/**/*.html',
        'app/styles/**/*.scss',
        'app/scripts/**/*.coffee',
        'app/images/**/*'
    ], (event) ->
        return gulp.src event.path
            .pipe $.connect.reload()

# Default task call every tasks created so far.
# gulp.task 'default', ['css', 'html', 'svg', 'copy:fonts']

gulp.task 'develop', ['connect', 'reload', 'coffee', 'html', ]

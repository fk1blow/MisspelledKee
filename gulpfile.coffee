# Load all required libraries.
gulp            = require 'gulp'
coffee          = require 'gulp-coffee'
concat          = require 'gulp-concat'
sass            = require 'gulp-sass'
# prefix          = require 'gulp-autoprefixer'
# cssmin          = require 'gulp-cssmin'
minifyHTML      = require 'gulp-minify-html'
svgmin          = require 'gulp-svgmin'
coffeeify       = require 'coffeeify'
browserify      = require 'gulp-browserify'
# rename          = require 'gulp-rename'
gutil           = require 'gulp-util'
plumber         = require 'gulp-plumber'
mainBowerFiles  = require 'main-bower-files'
templateCache   = require 'gulp-angular-templatecache'
useref          = require('gulp-useref')
# gulpif          = require('gulp-if')
usemin          = require('gulp-usemin')
# rev             = require('gulp-rev')
uglify            = require('gulp-uglify')
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
# Use the 'vendor' to let bower components and stuff
server.use(express.static('vendor/'))
# html5 mode
server.all '/*', (req, res, next) ->
    res.sendFile('./src/index.html', { root: __dirname })

# Replaces references to non-optimized scripts or stylesheets into a
# set of HTML files (or any templates/views).
gulp.task 'usemin', ->
  gulp.src('./src/index.html')
    .pipe usemin
      bower: [uglify()]
    .on 'error', gutil.log
    .pipe gulp.dest('./build')

# lint, compile, transform coffeescripts
gulp.task 'coffee', ->
  gulp.src('./src/app/app.coffee', { read: false })
    .pipe(plumber())
    .pipe browserify({ transform: ['coffeeify'], debug: true, extensions: [ '.coffee' ] })
    .on 'error', gutil.log
    .pipe concat 'modules-bundle.js'
    .pipe gulp.dest './dist/scripts'
    .pipe refresh lrserver

# load every template to $templateCache
gulp.task 'templates', ['index'], ->
  gulp.src './src/**/*.html'
    .pipe templateCache('templates-bundle.js', standalone: true)
    .pipe gulp.dest './dist/scripts'

# Sass task....
gulp.task 'sass', ->
  gulp.src [ './src/styles/**/*.scss' ]
    .pipe(plumber())
    .pipe sass { includePaths: [ 'scss' ] }
    .on 'error', gutil.log
    .pipe gulp.dest './dist/styles'

# takes the index and spits it out
gulp.task 'index', ->
  gulp.src './src/index.html'
    # .pipe minifyHTML()
    .pipe gulp.dest './dist'
    .pipe refresh(lrserver)

# should chose this task when adding a new bower_component
# bower dependencies
gulp.task 'bower', ->
  gulp.src(mainBowerFiles(), { base: 'vendor/bower_components' })
    .pipe gulp.dest 'dist/scripts/bower_components'

# minify your SVG
gulp.task 'svg', ->
  gulp.src 'src/assets/images/**/*.svg'
    .pipe svgmin()
    .pipe gulp.dest 'dist/assets/images'

# copy the fonts using streams
gulp.task 'fonts', ->
  gulp.src 'src/assets/fonts/**/*'
    .pipe gulp.dest 'dist/assets/fonts'

# connect task - new konnekt
gulp.task 'server', ->
  gutil.log "starting livereload on: #{serverport}"
  # Start webserver
  server.listen(serverport)
  # Start live reload
  lrserver.listen(livereloadport)

# watch for changes inside application assets and run various tasks
gulp.task 'watchers', ->
  gulp.watch 'src/app/**/*.coffee', [ 'coffee' ] # states, controllers, app specific, mostly
  gulp.watch 'src/common/**/*.coffee', [ 'coffee' ] # standalone components, independt(kinda) of app
  gulp.watch 'src/styles/**/*.scss', [ 'sass' ]
  gulp.watch ['src/index.html',
    'src/app/**/*.html', 'src/common/**/*.html'], [ 'templates' ]

# copy every file from the dist, to the build,
gulp.task 'copy-scripts', ['templates', 'coffee'], ->
  gulp.src './dist/scripts/**/*.js'
    .pipe gulp.dest './build/scripts'


# develop task
gulp.task 'develop', [
  'server'
  'watchers'
  'templates'
  'coffee'
  'sass'
]

# build the app
gulp.task 'build', [
  'usemin'
  'templates'
  'coffee'
  'sass'
  'svg'
  'fonts'
  'copy-scripts'
]

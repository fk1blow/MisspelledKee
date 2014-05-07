'use strict';
// Generated on 2014-04-13 using generator-gulp-webapp 0.0.6

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var coffee = require('gulp-coffee');
var gutil = require('gutil');
var reload = require('gulp-reload');
var watch = require('gulp-watch');
var gulpif = require('gulp-if');
var open = require('open');
var wiredep = require('wiredep').stream;

// Load plugins
var $ = require('gulp-load-plugins')();

// Paths
var paths = {
    scripts: {
        src:  'scripts/**/*.coffee',
        dest: 'public/scrips'
    }
};


// Styles
gulp.task('styles', function () {
    return gulp.src('app/styles/main.scss')
        .pipe($.rubySass({
          style: 'expanded',
          loadPath: ['app/bower_components']
        }))
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('app/styles'))
        .pipe($.size());
});

// Scripts
gulp.task('xx1_scripts', function () {
    // return gulp.src('app/scripts/**/*.js')
    // return gulp.src('./scripts/index.coffee', { read: false })
    //     .pipe(browserify({ transform: ['coffeeify'], extensions: ['.coffee'] }))
    //     // .pipe($.jshint('.jshintrc'))
    //     // .pipe($.jshint.reporter('default'))
    //     .pipe($.size());
    return  gulp.src(['scripts/index.coffee'])
        .pipe(browserify({
          transform: ["coffeeify"],
          insertGlobals : true,
          debug : true
        }))
        // .pipe($.size());
        // .pipe(gulp.dest('dist'))
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('xx2_scripts', function() {
  console.log('scripts');
  return gulp.src('./scripts/index.coffee', {read: false})
    .pipe(browserify({
      insertGlobals : false,
      transform: ['coffeeify'],
      extensions: ['.js'],
      debug: !gulp.env.production
  }))
  .pipe(gulpif(gulp.env.production, uglify({
    mangle: {
      except: ['require', 'export', '$super']
    }
  })))
  .pipe(gulp.dest('./dist/js'));
});

gulp.task('scripts', function() {
  console.log('running scripts task...')
    // return gulp.src(paths.scripts.src)
    //     .pipe(coffee())
    //     .pipe(gulp.dest(paths.scripts.dest));
     return  gulp.src(['./scripts/index.coffee'])
        .pipe(browserify({
          transform: ["coffeeify"],
          insertGlobals : true,
          debug : true
        }))
        // .pipe($.size());
        // .pipe(gulp.dest('dist'))
        // .pipe(concat('all.min.js'))
        .pipe(gulp.dest('app/public/js'));
});

// Coffee
gulp.task('coffee', function() {
  console.log('coffee');
  gulp.src('src/coffee/app.coffee', { read: false })
    .pipe(browserify({
      transform: ['coffeeify'],
      extensions: ['.coffee']
    }))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('./build/js'))
});

// HTML
gulp.task('html', ['styles', 'scripts'], function () {
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');

    return gulp.src('app/*.html')
        .pipe($.useref.assets())
        .pipe(jsFilter)
        .pipe($.uglify())
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe($.useref.restore())
        .pipe($.useref())
        .pipe(gulp.dest('dist'))
        .pipe($.size());
});

// Images
gulp.task('images', function () {
    return gulp.src('app/images/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
        .pipe($.size());
});

gulp.task('fonts', function () {
    return $.bowerFiles()
        .pipe($.filter([
            '**/*.eot',
            '**/*.svg',
            '**/*.ttf',
            '**/*.woff'
        ]))
        .pipe($.flatten())
        .pipe(gulp.dest('dist/fonts'))
        .pipe($.size());
});

// Clean
gulp.task('clean', function () {
    return gulp.src(['dist/styles', 'dist/scripts', 'dist/images', 'dist/fonts'], { read: false }).pipe($.clean());
});

// Build
gulp.task('build', ['html', 'images', 'fonts']);

// Default task
gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

// Connect
gulp.task('connect', function () {
  $.connect.server({
    root: ['app'],
    port: 9000,
    livereload: true
  });
});

// Open
gulp.task('serve', ['connect', 'scripts', 'styles'], function() {
  open("http://localhost:9000");
});

// Inject Bower components
gulp.task('wiredep', function () {
    gulp.src('app/styles/*.scss')
        .pipe(wiredep({
            directory: 'app/bower_components',
            ignorePath: 'app/bower_components/'
        }))
        .pipe(gulp.dest('app/styles'));

    gulp.src('app/*.html')
        .pipe(wiredep({
            directory: 'app/bower_components',
            ignorePath: 'app/'
        }))
        .pipe(gulp.dest('app'));
});

// Watch
gulp.task('watch', ['connect', 'serve'], function () {
    // Watch for changes in `app` folder
    gulp.watch([
        'app/*.html',
        'app/styles/**/*.scss',
        'app/scripts/**/*.coffee',
        'app/images/**/*'
    ], function (event) {
      // console.log('project should reload..');
        return gulp.src(event.path)
            .pipe($.connect.reload());
    });

    // gulp.watch(paths.scripts.src, ['scripts']);

    // Watch .scss files
    gulp.watch('app/styles/**/*.scss', ['styles']);

    // Watch .js files
    gulp.watch('app/scripts/**/*.coffee', ['scripts']);

    // Watch image files
    gulp.watch('app/images/**/*', ['images']);

    // Watch bower files
    gulp.watch('bower.json', ['wiredep']);
});

gulp.task()

var themePath = '.';

// Grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    babel = require('gulp-babel'),
    browserSync = require('browser-sync').create(),
    runSequence = require('run-sequence'),
    stripDebug = require('gulp-strip-debug');

var data = require('gulp-data');
var stylus = require('gulp-stylus');

// Compile Sass, Autoprefix and minify
gulp.task('styles', function() {
    return gulp.src('css/main.styl')
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(sourcemaps.write())
        .pipe(concat('app.css'))
        .pipe(gulp.dest('public/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(gulp.dest('public/css'))
});

    
// JSHint, concat, and minify JavaScript 
gulp.task('js-vendor', function() {
  return gulp.src([	
	  
           // Grab your custom scripts
          'js/vendor/*.js'
  		  
  ])
    .pipe(plumber())
    //.pipe(sourcemaps.init({largeFile: true}))
    .pipe(concat('vendor.js'))
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest('public/js/vendor'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/js/vendor'))
});

// JSHint, concat, and minify JavaScript
gulp.task('js', function() {
  return gulp.src([	
	  
           // Grab your custom scripts
          'js/*.js'
  		  
  ])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
});

// Browser-Sync watch files and inject changes
gulp.task('browsersync', function() {
    // Watch files
    var files = [
    	'css/*.styl',
    	'js/*.js',
    	'public/images/**/*.{png,jpg,gif,svg,webp}'
    ];

    browserSync.init(files, {
	    // Replace with URL of your local site
	    proxy: "http://localhost:8888"
    });
    
    // Watch .styl files
    gulp.watch('css/*.styl', ['styles']);

    // Watch site-js files
    gulp.watch('js/*.js', ['js']);

    /* compile jade
    gulp.watch(themePath+'/assets/pages/*.jade',['compile-jade']);
    */

});

// Watch files for changes (without Browser-Sync)
gulp.task('watch', function() {

  // Watch .styl files
  gulp.watch('css/*.styl', ['styles']);

  // Watch site-js files
  gulp.watch('js/*.js', ['js']);

}); 

// Run styles, site-js and foundation-js
gulp.task('default', function(done){
    runSequence('styles','js','js-vendor',function(){
        console.log('Done compiling base...');
        gulp.start('browsersync');
    });
});

gulp.task('build', function(){
    gulp.start('styles','js-vendor','js');
})

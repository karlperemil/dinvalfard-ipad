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
    return gulp.src(themePath + '/css/main.styl')
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(concat('app.css'))
        .pipe(gulp.dest(themePath + '/public/stylesheets/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(gulp.dest(themePath + '/public/stylesheets/'))
});

gulp.task('styles-standalone', function() {
    return gulp.src(themePath + '/assets/css/standalone/*.styl')
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(themePath + '/compiled/css/standalone'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(gulp.dest(themePath + '/compiled/css/standalone'))
});

gulp.task('styles-vendor', function() {
    return gulp.src(themePath + '/assets/css/vendor/*.css')
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(sourcemaps.init({largeFile: true})) // Start Sourcemaps
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest(themePath + '/compiled/css/vendor'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(sourcemaps.write()) // Creates sourcemaps for minified styles
        .pipe(gulp.dest(themePath + '/compiled/css/vendor'))
});
    
// JSHint, concat, and minify JavaScript 
gulp.task('js-vendor', function() {
  return gulp.src([	
	  
           // Grab your custom scripts
          themePath + '/assets/js/vendor/*.js'
  		  
  ])
    .pipe(plumber())
    //.pipe(sourcemaps.init({largeFile: true}))
    .pipe(concat('vendor.js'))
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest(themePath + '/compiled/js/vendor'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(themePath +'/compiled/js/vendor'))
});

// JSHint, concat, and minify JavaScript
gulp.task('js', function() {
  return gulp.src([	
	  
           // Grab your custom scripts
          themePath +'/js/*.js'
  		  
  ])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(themePath +'/compiled/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest(themePath +'/compiled/js'))
});

// JSHint, concat, and minify JavaScript
gulp.task('js-standalone', function() {
  return gulp.src([	
	  
           // Grab your custom scripts
          themePath +'/assets/js/standalone/*.js' 
  		  
  ])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write()) // Creates sourcemap for minified JS
    .pipe(gulp.dest(themePath +'/compiled/js/standalone'))
    .pipe(rename({suffix: '.min'}))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest(themePath +'/compiled/js/standalone'))
});   

gulp.task('compile-jade', function() {
  gulp.src(themePath+ '/assets/pages/*.jade')
    .pipe(jade({
        locals: {
          title: 'some local variable'
        },
        pretty: true
     }))
     .pipe(gulp.dest(themePath+'/compiled/pages'));
});

// Browser-Sync watch files and inject changes
gulp.task('browsersync', function() {
    // Watch files
    var files = [
    	themePath + '/assets/css/*.styl',
        themePath + '/assets/css/standalone/*.styl', 
    	themePath +'/assets/js/*.js',
        themePath + '/assets/js/standalone*.js',
    	themePath + '/**/*.php',
    	themePath + '/assets/images/**/*.{png,jpg,gif,svg,webp}',
    ];

    browserSync.init(files, {
	    // Replace with URL of your local site
	    proxy: "http://localhost:8888",
    });
    
    // Watch .scss files
    gulp.watch(themePath +'/assets/css/*.styl', ['styles']);
    gulp.watch(themePath +'/assets/css/standalone/*.styl', ['styles-standalone']);

    // Watch site-js files
    gulp.watch(themePath+'/assets/js/*.js', ['js']);
    gulp.watch(themePath+'/assets/js/standalone/*.js', ['js-standalone']);

    //compile jade
    gulp.watch(themePath+'/assets/pages/*.jade',['compile-jade']);

});

// Watch files for changes (without Browser-Sync)
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch(themePath+'/css/*.styl', ['styles']);
  gulp.watch(themePath+'/css/standalone*.styl', ['styles-standalone']);

  // Watch site-js files
  gulp.watch(themePath+'/js/*.js', ['js']);
  gulp.watch(themePath+'/js/standalone*.js', ['js-standalone']);
  
  // Watch foundation-js files
  gulp.watch(themePath+'/vendor/foundation-sites/js/*.js', ['foundation-js']);

  //compile jade
gulp.watch(themePath+'/assets/pages/*.jade',['compile-jade']);

}); 

// Run styles, site-js and foundation-js
gulp.task('default', function(done){
    runSequence('styles','styles-standalone','js','js-standalone','compile-jade',function(){
        console.log('Done compiling base...');
        gulp.start('browsersync');
    });
});

gulp.task('build', function(){
    gulp.start('styles','styles-standalone','styles-vendor','js-vendor','js','js-standalone','foundation-js');
})

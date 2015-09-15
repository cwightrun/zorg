// Include Gulp, duh
var gulp = require('gulp'); 

var imagemin      = require('gulp-imagemin'),
    minifyCSS     = require('gulp-minify-css'),
    newer         = require('gulp-newer'),
    notify        = require('gulp-notify'),
    plumber       = require('gulp-plumber'),
    prefix        = require('gulp-autoprefixer'),
    prefix        = require('gulp-autoprefixer'),
    rename        = require('gulp-rename'),
    sass          = require('gulp-sass'),
    sourcemaps    = require('gulp-sourcemaps'),
    svgmin        = require('gulp-svgmin'),
    svgstore      = require('gulp-svgstore'),
    watch         = require('gulp-watch'),
    util          = require('gulp-util');

// onError func for when Plumber wigs-out
var onError = function(err) {
  notify.onError({
    title:    "Gulp",
    subtitle: "Failure!",
    message:  "Error: <%= error.message %>",
    sound:    "Beep"
  })(err);
  this.emit('end');
};

// Copy SASS/CSS libraries to initialize build system.
// Only needs to be run once, or after an update to any Bower components.
gulp.task('copy:sass', function() {
  return gulp.src([
      'bower_components/susy/**/*',
      'bower_components/include-media/dist/*'
    ], {
      base: 'bower_components',
      dot: true
    })
    .pipe(gulp.dest('sass/vendor'));
});

// Minify images
gulp.task('imagemin', function() {
  var imgSrc = 'images/src/**/*',
      imgDst = 'images/';
  gulp.src(imgSrc)
    .pipe(newer(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

// SVG Icon nonsense
gulp.task('icons', function () {
  var iconSrc = 'images/icons/*.svg',
      iconDest = 'images/';

  return gulp.src(iconSrc)
    .pipe(svgmin())
    .pipe(rename({prefix: 'icon-'}))
    .pipe(svgstore({inlineSvg: true}))
    .pipe(newer(iconDest))
    .pipe(gulp.dest(iconDest));
});

// Gulp Sass Task 
gulp.task('sass', function() {
  gulp.src('sass/**/*.scss')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init()) // Initializes sourcemaps
    .pipe(prefix('last 2 versions', '> 1%', 'ie 8'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./')) // Writes sourcemaps into the CSS file
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('images/icons/*.svg', ['icons']);
  gulp.watch('images/src/**/*', ['imagemin']);
})

gulp.task('default', ['sass', 'imagemin', 'icons', 'watch']);

// Include Gulp
var gulp = require('gulp'); 
 
var imagemin = require('gulp-imagemin'),
    minifyCSS = require('gulp-minify-css'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    // sassdoc = require('sassdoc'), // Not Yet
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch');

// Minify images
gulp.task('imagemin', function() {
  var imgSrc = 'images/src/**/*',
      imgDst = 'images/';
  gulp.src(imgSrc)
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
})

// Gulp Sass Task 
gulp.task('sass', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sourcemaps.init()) // Initializes sourcemaps
    // .pipe(sassdoc()) // Not yet
    .pipe(prefix('last 2 versions', '> 1%', 'ie 8'))
    .pipe(sourcemaps.write()) // Writes sourcemaps into the CSS file
    .pipe(minifyCSS({
      // keepBreaks: true,
      // keepSpecialComments: 0
    }))
    .pipe(gulp.dest('css'));
})

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['sass'])
})

gulp.task('default', ['sass', 'watch']);
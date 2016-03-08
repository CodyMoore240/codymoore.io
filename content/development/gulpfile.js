var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    tinypng = require('gulp-tinypng'),
    livereload = require('gulp-livereload');

var filepath = '';

function catchError (error) {

  // If you want details of the error in the console
  console.log(error.toString());

  this.emit('end');
}

// Styles
gulp.task('styles', function() {
  return gulp.src('scss/styles.scss')
    .pipe(sass({ style: 'expanded', }))
    .on('error', catchError)
    .pipe(autoprefixer('last 2 version'))
    .pipe(minifycss())
    .pipe(gulp.dest('../../static/assets/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts
// gulp.task('scripts', function() {
//   return gulp.src('development/unMinifiedjs/*.js')
//     .pipe(rename({ suffix: '.min' }))
//     .pipe(uglify())
//     .pipe(gulp.dest('assets/js'))
//     .pipe(notify({ message: 'Scripts task complete' }));
// });

// Watch
gulp.task('watch', function() {
  //Create LiveReload server
  // livereload.listen();

  // Watch html and js files and change only the one that changes
  // gulp.watch(['../_site/assets/css/styles.css','../_site/index.html']).on('change', function(file) {
  //   livereload.changed(file.path);
  // });

  // Watch .scss files and change only the one that changes
  gulp.watch('scss/*.scss').on('change', function(file) {
      // filepath = (file.path);
      gulp.start('styles');
    });
});

//compress images task. Would like to be able to pass the image name into the gulp call
// gulp.task('compress', function () {
//     gulp.src('development/uncompressedImages/*.*')
//         .pipe(tinypng('5dNWZx-XW-K9FYS5qKeH_dQrZwnlJajn'))
//         .pipe(gulp.dest('assets/images/'));
// });

// Default task
gulp.task('default', function() {
    gulp.start('styles');
});

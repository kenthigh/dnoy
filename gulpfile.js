var gulp = require('gulp')
var gutil = require('gulp-util')
var uglify = require('gulp-uglify')
var jade = require('gulp-jade')
var sourcemaps = require('gulp-sourcemaps')

gulp.task('default', function () {
  gutil.log(gutil.colors.red('error'))
  gutil.log(gutil.colors.green('message:') + "some")
  gulp.watch('src/js/*.js', ['uglifyjs'])
  gulp.watch('src/page/*.jade', ['jade'])
})

gulp.task('uglifyjs', function () {
  gulp.src('src/js/*.js')
    .pipe(sourcemaps.init())
      .pipe(uglify())
    .pipe(sourcemaps.write('./src'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('jade', function () {
  gulp.src('src/page/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('dist/html'));
})

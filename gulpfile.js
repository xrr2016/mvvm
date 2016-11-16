const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

gulp.task('imgMin',function () {
  return gulp.src('./public/images/**/*')
             .pipe(imagemin())
             .pipe(gulp.dest('./dist/images/'))
})

gulp.task('default',['imgMin'])

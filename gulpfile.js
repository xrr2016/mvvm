const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const rename  = require('gulp-rename')

gulp.task('imgMin',function () {
  return gulp.src('./public/images/**/*')
             .pipe(imagemin())
             .pipe(gulp.dest('./dist/'))
})

gulp.task('reName',['imgMin'],function(){
  return gulp.src('./dist/images/**/*')
        .pipe(rename(function(path){
          path.prefix += 'smaller-'
        }))
        .pipe(gulp.dest('./dist/'))
})

gulp.task('default',['reName'])

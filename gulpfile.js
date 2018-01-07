var gulp = require('gulp');
var scss = require('gulp-sass');

gulp.task('scss', function () {
    gulp.src([
        './css/**/*.scss',
        './css/*.scss'
    ])
        .pipe(scss().on('error', scss.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', function (){
   gulp.run('scss');
});

gulp.task('watch', function () {
    gulp.watch('css/*.scss', ['scss'])
});
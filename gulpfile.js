var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('legacy', function () {
    return gulp.src('styles-legacy/**.css')
        .pipe(concat('tg-compiled-legacy.css'))
        .pipe(gulp.dest('tg-compiled-css'));
});

gulp.task('new', function () {
    return gulp.src('styles-new/**.css')
        .pipe(concat('tg-compiled-new.css'))
        .pipe(gulp.dest('tg-compiled-css'));
});

gulp.task('shinyshoes', ['legacy', 'new']);


gulp.task('default', ['legacy', 'new']);

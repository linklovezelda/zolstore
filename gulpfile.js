const gulp = require('gulp');
const watch = require('gulp-watch');
const html = require('gulp-minify-html');
// const sass = require('gulp-sass');
// const css = require('gulp-minify-css');
// const rename = require('gulp-rename');
// const uglify = require('gulp-uglify');
// const img = require('gulp-imagemin');
// const babel = require('gulp-babel');
// const es2015 = require('babel-preset-es2015');


gulp.task('uglifyhtml', () => {
    return gulp.src('src/*.html')
        .pipe(html())
        .pipe(gulp.dest('dist/'));
});


gulp.task('default', function() {
    watch(['src/*.html'], gulp.parallel('uglifyhtml'));
});
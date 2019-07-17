const gulp = require('gulp');
const watch = require('gulp-watch');
const html = require('gulp-minify-html');
// const sass = require('gulp-sass');
const css = require('gulp-minify-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const img = require('gulp-imagemin');
const babel = require('gulp-babel');
const es2015 = require('babel-preset-es2015');


gulp.task('uglifyhtml', () => {
    return gulp.src('src/*.html')
        .pipe(html())
        .pipe(gulp.dest('dist/'));
});

gulp.task('uglifycss', () => {
    return gulp.src('src/css/*.css')
        .pipe(css())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('uglifyjs', () => {
    return gulp.src('src/script/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});


gulp.task('uglifyimage', () => {
    return gulp.src('src/img/*.{png,jpg,gif,ico}')
        .pipe(img({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('babeljs', () => {
    return gulp.src('src/script/js/*.js') //引入文件
        .pipe(babel({
            presets: ['es2015']
        })) //执行压缩插件
        .pipe(uglify())
        .pipe(gulp.dest('dist/js')); //输出
});

gulp.task('default', function() {
    watch(['src/*.html'], gulp.parallel('uglifyhtml'));
});
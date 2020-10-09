const gulp = require('gulp');
const rename = require("gulp-rename"); 
const stripJsonComments = require('gulp-strip-json-comments');
const prettify = require('gulp-jsbeautifier');

gulp.task('default', defaultTask);

function defaultTask() {
    return gulp.src('./src/alternate-package.json')
        .pipe(stripJsonComments())
        .pipe(prettify())
        .pipe(rename("./package.json"))
        .pipe(gulp.dest('./'));
};

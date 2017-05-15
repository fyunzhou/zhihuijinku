/**
 * Created by yunzhou on 2017/5/15.
 */
var gulp = require("gulp");
var less = require("less");
var aa  = require("gulp-load-plugins")();
gulp.task('myless', function () {
    gulp.src('app/style/*.less')
        .pipe(aa.less())
        .pipe(gulp.dest('dist/css'));
});
gulp.task('dist',function () {
    gulp.watch("app/style/*.less",["myless"]);
});
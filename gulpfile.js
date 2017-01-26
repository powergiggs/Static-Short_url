const gulp = require('gulp');
const guBump = require('gulp-bump');
const util = require('debugging-tool');

const major = util.bumpIt('1.1.0', 'major');
const minor = util.bumpIt('1.1.0', 'minor');
const patch = util.bumpIt('1.1.0', 'patch');

// gulp function to increase version
gulp.task('bump', function() {
gulp.src('./package.json')
.pipe(guBump({ type: patch }))
.pipe(gulp.dest('./'));
});
 gulp.task('watch', function() {
   gulp.watch('./package.json', ['bump']);

 });

gulp.task('default', ['bump', 'watch']);

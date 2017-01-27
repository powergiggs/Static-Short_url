const gulp = require('gulp');
const guBump = require('gulp-bump');
const util = require('debugging-tool');

const major = util.bumpIt('1.1.0', 'major');
const minor = util.bumpIt('1.1.0', 'minor');
const patch = util.bumpIt('1.1.0', 'patch');

// gulp function to increase version
gulp.task('bump', function() {
  return gulp.src('./package.json')
.pipe(guBump({ version: minor }))
.pipe(gulp.dest('./'));
});
// task watch if package.json change
// gulp.task('watch', function() {
//   gulp.watch('./package.json', ['bump']);
// });

// default tash is run with other task
gulp.task('default', ['bump']);

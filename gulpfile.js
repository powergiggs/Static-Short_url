const gulp = require('gulp');
const guBump = require('gulp-bump');
const util = require('debugging-tool');

// store version from bumpit uitility tool
const major = util.bumpIt('1.1.0', 'major');
const minor = util.bumpIt('1.1.0', 'minor');
const patch = util.bumpIt('1.1.0', 'patch');
// store files paths to monitor changes
const folders = {
  models: ['db.js', 'urls.js'],
  routes: ['api.js'],
  test: ['__urls.js']
};

// gulp function to increase version
gulp.task('bump', function() {
  return gulp.src('./package.json')
.pipe(guBump({ version: patch }))
.pipe(gulp.dest('./'));
});

// function to watch foldes for chages then bump version
gulp.task('watch', function() {
  gulp.watch(folders.models, ['bump']);
  gulp.watch(folders.routes, ['bump']);
  gulp.watch(folders.test, ['bump']);
});

// default task is run with other task
gulp.task('default', ['bump', 'watch']);

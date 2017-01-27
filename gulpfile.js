const gulp = require('gulp');
const bump = require('gulp-bump');
const util = require('debugging-tool');
const fs = require('fs');

// store files paths to monitor changes
const folders = {
  models: ['db.js', 'urls.js'],
  routes: ['api.js']
};

// function to read json package
const getJsonPkg = function () {
  return JSON.parse(fs.readFileSync('./package.json', 'utf8'));
};

// gulp task function to increase version
gulp.task('bump', function () {
  // store read package
  const pkg = getJsonPkg();
  // push read package version into bumpit and store as variable
  const patch = util.bumpIt(pkg.version, 'patch');
  const major = util.bumpIt(pkg.version, 'major');
  const minor = util.bumpIt(pkg.version, 'minor');
  return gulp.src('./package.json')
.pipe(bump({ version: patch }))
.pipe(gulp.dest('./'));
});

// function to watch foldes for changes then bump version
gulp.task('watch', function () {
  gulp.watch(folders.models, ['bump']);
  gulp.watch(folders.routes, ['bump']);
});

// default task is run with other task
gulp.task('default', ['bump', 'watch']);

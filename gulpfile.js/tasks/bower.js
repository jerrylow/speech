var gulp            = require('gulp')
var mainBowerFiles  = require('main-bower-files');
var $               = require('gulp-load-plugins')();

var bowerBase = function() {
  return gulp.src(mainBowerFiles(), { base: './bower_components'})
}

var bowerTaskTemp = function () {
  var stream = bowerBase();
  return stream
    .pipe(gulp.dest('./tmp/lib'))
}

var bowerTaskBuild = function () {
  var stream = bowerBase();
  return stream
    .pipe(gulp.dest('./build/lib'))
}

gulp.task('bower:serve', bowerTaskTemp)
gulp.task('bower:build', bowerTaskBuild)

module.exports = bowerTaskTemp

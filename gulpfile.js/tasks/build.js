var gulp            = require('gulp')
var $               = require('gulp-load-plugins')();

var buildTask = function(cb) {
  $.sequence('clean:build', 'bower:build', 'css:build', 'js:build', 'html:build', 'images:build', cb);
}

gulp.task('build', buildTask)
module.exports = buildTask

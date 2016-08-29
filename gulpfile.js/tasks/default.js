var gulp            = require('gulp')
var $               = require('gulp-load-plugins')();

var defaultTask = function(cb) {
  $.sequence('clean:serve', 'bower:serve', 'css:serve', 'js:serve', 'html:serve', 'images:serve', 'watch', cb);
}

gulp.task('default', defaultTask)
module.exports = defaultTask

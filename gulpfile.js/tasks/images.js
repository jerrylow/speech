var config       = require('../config')
if(!config.tasks.images) return

var gulp            = require('gulp')
var path            = require('path')

var paths = {
  src: path.join(config.root.src, config.tasks.images.src, '/**/*.{' + config.tasks.images.extensions + '}'),
  buildDest: path.join(config.root.buildDest, config.tasks.images.dest),
  serveDest: path.join(config.root.serveDest, config.tasks.images.dest)
}

var imagesBase = function () {
  return gulp.src(paths.src);
}

var imagesTaskTemp = function () {
  var stream = imagesBase();
  return stream
    .pipe(gulp.dest(paths.serveDest));
}

var imagesTaskBuild = function () {
  var stream = imagesBase();
  return stream
    .pipe(gulp.dest(paths.buildDest));
}

gulp.task('images:serve', imagesTaskTemp)
gulp.task('images:build', imagesTaskBuild)

module.exports = imagesTaskTemp

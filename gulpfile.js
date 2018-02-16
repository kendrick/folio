'use strict';
(() => {
  const gulp = require('gulp');

  const plugins = require('gulp-load-plugins')({ DEBUG: false, pattern: '*' });

  const buildPath = './docs';
  const buildCssPath = `${buildPath}/css`;
  const srcPath = './src';
  const tasksPath = './gulp-tasks';

  const config = {
    buildPath: buildPath,
    buildCssPath: buildCssPath,
    srcPath: srcPath,
    sizeOptions: {
      showFiles: true,
      gzip: true
    }
  };

  function getTask(task, taskParams) {
    return require(`${tasksPath}/${task}`)(gulp, plugins, config, taskParams);
  }

  gulp.task('default', getTask('default'));

  gulp.task('build', getTask('build'));
  gulp.task('copy-js', getTask('copy-js'));
  gulp.task('copy-resources', getTask('copy-resources'));
  gulp.task('server', getTask('server'));
  gulp.task('styles', getTask('styles'));
  gulp.task('views', ['copy-js', 'copy-resources'], getTask('views'));
  gulp.task('watch', getTask('watch'));
})();

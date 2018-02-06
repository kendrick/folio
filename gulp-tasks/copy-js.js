'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      return plugins.vinylFs.src([config.srcPath + '/**/*.js'])
        .pipe(plugins.changed(config.buildPath))
        .pipe(plugins.vinylFs.dest(config.buildPath, { overwrite: true }));
    };
  };
})();

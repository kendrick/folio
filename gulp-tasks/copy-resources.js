'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      plugins.vinylFs.src([
          'node_modules/rocketbelt/dist/css/rocketbelt.css',
          'node_modules/rocketbelt/dist/css/rocketbelt.min.css',
          'node_modules/rocketbelt/dist/css/rocketbelt.min.css.map'
        ])
        .pipe(plugins.vinylFs.dest(config.buildPath + '/vendor/'));

      return plugins.vinylFs.src([
        config.srcPath + '/**/img/*.*',
        config.srcPath + '/**/*.svg',
        config.srcPath + '/**/*.zip'
      ])
        .pipe(plugins.changed(config.buildPath))
        .pipe(plugins.vinylFs.dest(config.buildPath, { overwrite: true }));
    };
  };
})();

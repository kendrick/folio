'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      var fs = require('fs');
      // var icons = fs.readdirSync(config.patternsPath + '/components/icons/svg');

      return gulp.src([config.srcPath + '/**/*.pug', '!' + config.srcPath + '/**/_*.pug'])
        .pipe(plugins.plumber({ errorHandler: plugins.notify.onError('Error: <%= error.message %>') }))
        .pipe(plugins.jadeFindAffected())
        .pipe(plugins.jadeInheritance({ basedir: config.srcPath }))
        .pipe(plugins.pug({
          basedir: __dirname + '/../' + config.srcPath,
          pretty: true,
          locals: {
            buildPath: '',
            shorthash: plugins.shorthash
          }
        }))
        .pipe(gulp.dest(config.buildPath))
      ;
    };
  };
})();

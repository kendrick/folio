'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      var fs = require('fs');
      // var icons = fs.readdirSync(config.patternsPath + '/components/icons/svg');

      const projects = {
        checkout: {
          uri: 'projects/checkout.html'
        },
        ratingsAndReviews: {
          uri: 'projects/ratings-and-reviews.html'
        },
        a11y: {
          uri: 'projects/accessibility.html'
        },
        rocketbelt: {
          uri: 'projects/rocketbelt.html'
        },
        taxonomy: {
          uri: 'projects/taxonomy.html'
        },
        wishlistAndRegistry: {
          uri: 'projects/wishlist-and-registry.html'
        }
      };

      return gulp.src([config.srcPath + '/**/*.pug', '!' + config.srcPath + '/**/_*.pug'])
        .pipe(plugins.plumber({ errorHandler: plugins.notify.onError('Error: <%= error.message %>') }))
        .pipe(plugins.jadeFindAffected())
        .pipe(plugins.jadeInheritance({ basedir: config.srcPath }))
        .pipe(plugins.pug({
          basedir: __dirname + '/../' + config.srcPath,
          pretty: true,
          locals: {
            buildPath: '',
            shorthash: plugins.shorthash,
            projects: projects
          }
        }))
        .pipe(plugins.tipograph({ format: 'html' }))
        .pipe(gulp.dest(config.buildPath))
      ;
    };
  };
})();

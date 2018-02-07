'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      var fs = require('fs');
      // var icons = fs.readdirSync(config.patternsPath + '/components/icons/svg');

      const projects = [
        {
          title: 'Checkout Redesign',
          lede: 'Our e-commerce site had a checkout experience that was inconsistent &amp; inaccessible.',
          uri: 'checkout.html',
          order: 1
        },
        {
          title: 'Rocketbelt Pattern Library',
          lede: 'Governance &amp; collaboration with developers led us to better consistency &amp; massive acceleration.',
          uri: 'rocketbelt.html',
          order: 2
        },
        {
          title: 'Site Navigation Taxonomy',
          lede: '',
          uri: 'taxonomy.html',
          order: 3
        },
        {
          title: 'Ratings &amp; Reviews',
          lede: 'An exercise in silver linings &amp; stakeholder buy-in.',
          uri: 'ratings-and-reviews.html',
          order: 4
        },
        {
          title: 'Accessibility Rehabilitation',
          lede: 'Identifying empathy gaps &amp; understanding that accessibility is usability.',
          uri: 'accessibility.html',
          order: 5
        },
        {
          title: 'Wishlist &amp Registry',
          lede: 'Turning a neglected area of the site into something inspirational.',
          uri: 'wishlist-and-registry.html',
          order: 6
        }
      ];

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

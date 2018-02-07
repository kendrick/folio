'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      const supported =
        ['last 10 Chrome versions',
         'last 10 Firefox versions',
         'Safari >= 9',
         'ie >= 11',
         'Edge >= 12',
         'iOS >= 10',
         'Android >= 4.4.4'];

      const source = gulp.src([
        `${config.srcPath}/scss/**/*.scss`
      ])
        .pipe(plugins.plumber({
          errorHandler: plugins.notify.onError('Error: <%= error.message %>')
        }))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass())
        .pipe(plugins.autoprefixer({
          browsers: supported
        }))
      ;

      const max = source.pipe(plugins.clone())
        .pipe(plugins.sourcemaps.write('.', { sourceRoot: null }))
        .pipe(gulp.dest(config.buildCssPath))
      ;

      const min = source.pipe(plugins.clone())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.rename({ suffix: '.min' }))
        .pipe(plugins.postcss([
          require('postcss-font-magician')({
            variants: {
              'Work Sans': {
                '400': ['woff woff2'],
                '400 italic': ['woff woff2'],
                '600': ['woff woff2'],
                '800': ['woff woff2']
              }
            }
          }),
          plugins.cssnano({ autoprefixer: { browsers: supported } })
        ]))
        .pipe(plugins.size(config.sizeOptions))
        .pipe(plugins.sourcemaps.write('.', { sourceRoot: null }))
        .pipe(gulp.dest(config.buildCssPath))
        .pipe(plugins.browserSync.stream({ match: '**/*.css' }))
      ;

      return plugins.mergeStream(max, min);
    };
  };
})();

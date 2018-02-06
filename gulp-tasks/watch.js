'use strict';
(() => {
  const debounce = (func, wait, immediate) => {
    let timeout;
    return () => {
      const context = this;
      const args = arguments;

      const later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) { func.apply(context, args); }
    };
  };

  module.exports = (gulp, plugins, config) => {
    return () => {
      gulp.watch(['./src/scss/**/*.scss'], ['styles']);
      gulp.watch(['./src/**/*.pug'], ['views']);
      gulp.watch(config.buildPath + '/**/*.html')
        .on('change', plugins.browserSync.reload);
      gulp.watch(config.buildPath + '/**/*.js')
        .on('change', plugins.browserSync.reload);

      global.isWatching = true;

      return true;
    }
  };
})();

'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return (done) => {
      return plugins.runSequence(['styles', 'views'], done);
    };
  };
})();

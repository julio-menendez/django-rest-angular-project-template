'use strict';

import gulp from 'gulp';
import config from '../config';

gulp.task('watch', () => {
  let allPaths = [].concat(config.paths.html.all, [config.paths.js.all]);
  gulp.watch(allPaths, ['webpack', config.browserSync.reload]);
  gulp.watch([config.paths.css.all], ['styles']);
});

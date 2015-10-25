'use strict';

import gulp from 'gulp';
import webpack from 'webpack-stream';
import config from '../config';

// use webpack.config.js to build modules
gulp.task('webpack', () => {
  return gulp.src(config.paths.js.entry)
    .pipe(webpack(require('../webpack.config')))
    .pipe(gulp.dest(config.paths.js.dest));
});

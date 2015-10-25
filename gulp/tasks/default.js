'use strict';

import gulp from 'gulp';
import sync from 'run-sequence';

gulp.task('default', (done) => {
  sync('styles', 'webpack', 'server', 'watch', done);
});

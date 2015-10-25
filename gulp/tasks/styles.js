'use strict';

import gulp from 'gulp';
import config from '../config';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';

gulp.task('styles', () => {
  return gulp.src(config.paths.css.entry)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(rename(config.names.css))
    .pipe(gulp.dest(config.paths.css.dest))
    .pipe(config.browserSync.stream());
});

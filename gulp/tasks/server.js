var gulp = require('gulp'),
    config = require('../config'); // Relative to this file

gulp.task('server', function() {
    config.browserSync.init();
});
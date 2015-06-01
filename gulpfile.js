'use strict';

var gulp = require('gulp');
var config = require('ng-factory').use(gulp);

//
// Aliases

gulp.task('serve', gulp.series('ng:serve'));
gulp.task('build', gulp.series('ng:build'));

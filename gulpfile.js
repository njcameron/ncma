'use strict';

var gulp = require('gulp');
var config = require('ng-factory').use(gulp);

//
// Aliases

gulp.task("add_scripts", function() {
  return gulp.src(['app/bower_components/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('dist/bower_components/jquery/dist'));
});

gulp.task("add_scripts2", function() {
  return gulp.src(['app/bower_components/DirectionAwareHoverEffect/js/jquery.hoverdir.js'])
    .pipe(gulp.dest('dist/bower_components/DirectionAwareHoverEffect/js'));
});

gulp.task("add_assets", function() {
  return gulp.src(['app/assets/**/*.*'])
    .pipe(gulp.dest('dist/assets'));
});

gulp.task("add_templates", function() {
  return gulp.src(['app/views/**/*.*'])
    .pipe(gulp.dest('dist/views'));
});

gulp.task("add_robots", function() {
  return gulp.src(['app/*robots.txt'])
    .pipe(gulp.dest('dist/'));
});


gulp.task('serve', gulp.series('ng:serve'));
gulp.task('build', gulp.series(['ng:build', 'add_scripts2', 'add_scripts', 'add_assets', 'add_templates', 'add_robots']));
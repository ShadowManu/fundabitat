'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');

// HTML Processors
const jade = require('gulp-jade');
const replace = require('gulp-html-replace');

// CSS Processors
const sass = require('gulp-sass');

// Helpers
const sourcemaps = require('gulp-sourcemaps');
const shell = require('gulp-shell');

// Environment constants
const devel_env = (!process.env.NODE_ENV) || process.env.NODE_ENV === 'development';

// Default
gulp.task('default', ['setup']);

// Setup
gulp.task('setup', [
  'setup:jade',
  'setup:sass',
  'setup:js',
  'setup:ts',
  'setup:otf',
  'setup:css',
  'setup:png',
  'setup:svg'
]);

// Watch
gulp.task('watch', ['setup'], function() {
  return plumber()
    .pipe(gulp.watch('src/**', ['setup']));
});

// Process jade
gulp.task('setup:jade', function() {
  let tasks = {};
  if (devel_env) tasks.production = '';
  else tasks.development = '';

  return gulp.src('src/**/*.jade')
    .pipe(plumber())
    .pipe(jade({pretty: true}))
    .pipe(replace(tasks, {keepUnassigned: true }))
    .pipe(gulp.dest('dist'));
});

// Process sass
gulp.task('setup:sass', function() {
  return gulp.src('src/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

// Process typescript
gulp.task('setup:ts', shell.task('tsc'));

// Copy js
gulp.task('setup:js', function() {
  return gulp.src('src/**/*.js')
    .pipe(gulp.dest('dist'));
});

// Copy otf fonts
gulp.task('setup:otf', function() {
  return gulp.src('src/**/*.otf')
    .pipe(gulp.dest('dist'));
});

// Copy css
gulp.task('setup:css', function() {
  return gulp.src('src/**/*.css')
    .pipe(gulp.dest('dist'));
});

// Copy images
gulp.task('setup:png', function() {
  return gulp.src('src/**/*.png')
    .pipe(gulp.dest('dist'));
});

// Copy vectors
gulp.task('setup:svg', function() {
  return gulp.src('src/**/*.svg')
    .pipe(gulp.dest('dist'));
});
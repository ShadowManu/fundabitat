'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');

// HTML Processors
const jade = require('gulp-jade');
const replace = require('gulp-html-replace');

// CSS Processors
const sass = require('gulp-sass');

// Typescript Processors
const gts = require('gulp-typescript');
const tsproj = gts.createProject('tsconfig.json');

// Helpers
const sourcemaps = require('gulp-sourcemaps');
const merge = require('merge2');
const shell = require('gulp-shell');

// Environment constants
const devel_env = (!process.env.NODE_ENV) || process.env.NODE_ENV === 'development';

// Default
gulp.task('default', ['setup']);

// Setup
gulp.task('setup', [
  'setup:jade',
  'setup:sass',
  'setup:ts',
  'setup:static'
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
gulp.task('setup:ts', function() {
  let results = tsproj.src()
    .pipe(gts(tsproj));

  return merge([
    results.js.pipe(gulp.dest('dist')),
    results.dts.pipe(gulp.dest('dist'))
  ]);
});

// Copy static resources
gulp.task('setup:static', function() {
  return gulp.src([
    'src/**/*.js',
    'src/**/*.css',
    'src/**/*.otf',
    'src/**/*.ttf',
    'src/**/*.png',
    'src/**/*.svg'
  ])
  .pipe(gulp.dest('dist'));
});


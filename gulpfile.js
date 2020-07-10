/**'use strict'

var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass',function(){
    gulp.src('./styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles'));
})

*/

'use strict'

var gulp = require('gulp'),

sass = require('gulp-sass'),

browserSync = require('browser-sync'),

del = require('del'),

imagemin = require('gulp-imagemin'),

uglify = require('gulp-uglify'),

usemin= require('gulp-usemin'),

rev = require('gulp-rev'),

cleancss = require('gulp-clean-css'),

flatmap = require('gulp-flatmap'),

htmlmin = require('gulp-htmlmin');

gulp.task('sass', function () {

return gulp.src('./styles/*.scss')

.pipe(sass().on('error', sass.logError))

.pipe(gulp.dest('./styles'));

});

gulp.task('sass:watch', function() {

gulp.watch('./styles/*.scss', gulp.series('sass'));

});

gulp.task('browser-sync', function () {

var files = ['./*.html', './styles/*.css', './img/*.{png,jpg,gif,jpeg}', './js/*.js'];

browserSync.init(files, {

server: {

baseDir: "./"

}

});

});

gulp.task('clean', function(){

return del(['dist']);

});

gulp.task('copyfonts', function(){

return gulp.src('./node_modules/open-iconic/font/fonts/*.{ttf,woff,eof,svg,eot,otf}*')

.pipe(gulp.dest('./dist/fonts'));

});

gulp.task('imagemin', function(){

return gulp.src('./img/*.{png,jpg,jpeg,gif}')

.pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))

.pipe(gulp.dest('dist/img'));

});

gulp.task('usemin', function(){

return gulp.src('*.html')

.pipe(flatmap(function(stream, file){

return stream

.pipe(usemin({

css: [rev()],

html: [function() {return htmlmin({collapseWhitespace: true})}],

js: [uglify(), rev()],

inlinejs: [uglify()],

inlinecss: [cleancss(), 'concat']

}));

}))

.pipe(gulp.dest('dist/'));

});

gulp.task('default', gulp.parallel('browser-sync', 'sass:watch'));

gulp.task('build', gulp.series('clean','copyfonts','imagemin','usemin')); 
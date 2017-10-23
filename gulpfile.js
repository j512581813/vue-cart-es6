const gulp = require('gulp');
const jshint = require('gulp-jshint');
const livereload = require('gulp-livereload');
const webpack = require('gulp-webpack');
const uglify= require('gulp-uglify');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const minifycss = require('gulp-minify-css');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
//const browserSync = require('browser-sync');


gulp.task('scripts',function(callback){
	return gulp.src('src/entry.js')
			.pipe(webpack(require('./webpack.config.js')))
			.pipe(concat('bundle.js'))
			.pipe(gulp.dest('dist'));
			//.pipe(browserSync.stream());
});

gulp.task("style",function(){
	return gulp.src("static/style/style.css")
			.pipe(minifycss())
	      	.pipe(gulp.dest('dist/css'));
          //.pipe(browserSync.stream());
	      
});

gulp.task('image', function () {
    gulp.src('static/images/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('dist/images'));
        //.pipe(browserSync.stream());
});


/*gulp.task("browser-sync", function(){
    browserSync.init({
        files: "**",
        server: {
            baseDir: "./"
        }
    });
});*/

// 清理
gulp.task('clean', function() {
  	return gulp.src(['dist'], {read: false})
      .pipe(clean());
});

// 预设任务
gulp.task('default', ['clean'],function() {
  gulp.start('scripts','style','image');
});



gulp.task('watch', function() {
	gulp.watch('static/style/*.css', ['style']);
	gulp.watch('static/images/*', ['image']);

	// 监听所有.js文档
	gulp.watch('js/*.js', ['scripts']);
  	livereload.listen();
  gulp.watch(['dist/**']).on('change', livereload.changed);
});
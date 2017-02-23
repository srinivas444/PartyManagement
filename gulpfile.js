const gulp  = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', ['transpileHTML','transpileCSS','transpileJS'], function () {
    
});

gulp.task('transpileJS',[], function(){
    gulp.src('src/**/*.js')
        .pipe(babel({
            presets : ['es2015']
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('transpileHTML',[], function(){
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('build'));
});

gulp.task('transpileCSS',[], function(){
    gulp.src('src/**/*.css')
        .pipe(gulp.dest('build'));
});

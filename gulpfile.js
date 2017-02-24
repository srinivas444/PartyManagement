const gulp = require('gulp');
const babel = require('gulp-babel');
const webserver = require('gulp-webserver');

gulp.task('default', ['libs', 'bower', 'transpileHTML', 'transpileCSS', 'transpileJS', 'transpileComponents'], function () {});

gulp.task('transpileJS', [], function () {
    gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('transpileComponents', [], function () {
    gulp.src(['src/components/**/*.component.js', 'src/components/**/*.controller.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('build/components'));

    gulp.src('src/components/**/*.template.html')
        .pipe(gulp.dest('build/components'));

    gulp.src('src/components/**/*.template.css')
        .pipe(gulp.dest('build/components'));
});

gulp.task('transpileHTML', [], function () {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('build'));
});

gulp.task('transpileCSS', [], function () {
    gulp.src('src/**/*.css')
        .pipe(gulp.dest('build'));
});

gulp.task('bower', [], function () {
    gulp.src(['bower_components/**/*.min.*'])
        .pipe(gulp.dest('build/bower_components'));
});

gulp.task('libs', [], function () {
    return gulp.src([
            'node_modules/systemjs/dist/system.js',
            'node_modules/babel-polyfill/dist/polyfill.js'
        ])
        .pipe(gulp.dest('build/libs'));
});

gulp.task('serve', [], function () {
    gulp.src('build')
        .pipe(webserver({
            open: true
        })).on('error', onError);

});

gulp.task('cbuild', function () {
    gulp.watch('src/**/*.*', ['default'])
        .on('error', onError);

})

function onError(err) {
    console.log(err);
    this.emit('end');
}
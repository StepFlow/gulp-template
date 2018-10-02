module.exports = function () {
    $.gulp.task('styles:build', () => {
        return $.gulp.src(['./src/assets/scss/*.scss'])
            .pipe($.gp.sass())
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gp.csscomb())
            .pipe($.gp.csso())
            .pipe($.gulp.dest('./build/assets/css/'))
    });

    $.gulp.task('styles:src', () => {
        return $.gulp.src(['./src/assets/scss/*.scss'])
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'Sass',
                    message: error.message
                };
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gulp.dest('./build/assets/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};

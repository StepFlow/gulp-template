global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    fs: require('fs'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('src', $.gulp.series(
    'clean',
    $.gulp.parallel('styles:src', 'pug', 'libsJS:src', 'js:copy', 'svg', 'img:src', 'fonts', 'svg:copy')));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('styles:build', 'pug', 'libsJS:build', 'js:copy', 'svg', 'img:src', 'fonts', 'svg:copy')));

$.gulp.task('default', $.gulp.series(
    'src',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));

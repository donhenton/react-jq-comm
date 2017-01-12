var notify = require("./build_utils").notify;
var argv = require('yargs').argv;
var gulp = require('gulp');
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var gulpif = require("gulp-if");
var props = require("./build_utils").props;
var watch = require('gulp-watch');

function Bundle(srcLocation) {

    var Bundler = browserify({
        entries: srcLocation,
        transform: [["babelify", {"presets": ["es2015", "react"]}]],
        extensions: ['.js'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    });
    return Bundler
            .bundle()
            .on('error', notify);
}

gulp.task('build-react1', function () {
    Bundle('src/code/react1/react1.js')
            .pipe(source('bundle-react1.js'))
            .pipe(gulpif(argv.production, streamify(uglify())))
            //     .pipe(gulpif(argv.production, rename({suffix: '.min'})))
            .pipe(gulp.dest(props.targetLocation))
            .on('finish', function ( ) {
                gutil.log("react2 build bundle end");
                livereload.reload(props.pageURL);
            });
    ;
});

gulp.task('build-react2', function () {
    Bundle('src/code/react2/react2.js')
            .pipe(source('bundle-react2.js'))
            .pipe(gulpif(argv.production, streamify(uglify())))
            //     .pipe(gulpif(argv.production, rename({suffix: '.min'})))
            .pipe(gulp.dest(props.targetLocation))
            .on('finish', function ( ) {
                gutil.log("react1 build bundle end");
                livereload.reload(props.pageURL);
            });
    ;
});

gulp.task('build-jquery', function () {


    function JQBundle() {

        var Bundler = browserify({
            entries: './src/code/jquery/jquery1.js',
            transform: [["babelify", {"presets": ["es2015"]}]],
            extensions: ['.js'],
            debug: true,
            cache: {},
            packageCache: {},
            fullPaths: true
        });
        return Bundler
                .bundle()
                .on('error', notify);
    }



    JQBundle()
            .pipe(source('bundle-jq.js'))
            .pipe(gulpif(argv.production, streamify(uglify())))
            //     .pipe(gulpif(argv.production, rename({suffix: '.min'})))
            .pipe(gulp.dest(props.targetLocation))
            .on('finish', function ( ) {
                gutil.log("jq build bundle end");
                livereload.reload(props.pageURL);
            });
    ;
});


gulp.task('watch-code', function () {

    watch(['./src/code/react1/**/*.js'], function (events, done) {

        gulp.start('build-react1');
    });
    watch(['./src/code/react2/**/*.js'], function (events, done) {

        gulp.start('build-react2');
    });
    watch(['./src/code/jquery/**/*.js'], function (events, done) {

        gulp.start('build-jquery');
    });
    watch(['./src/code/common/**/*.js'], function (events, done) {

        gulp.start(['build-react1','build-react2']);
    });


});
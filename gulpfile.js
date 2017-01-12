/**
 * 
 * @type Module gulp|Module gulp
 * 
 * 
 * gulp dev --production
 * gulp release --production
 * will contingently minify js, no flag leaves js assembled.
 * 
 */

var notify = require("./build_utils/build_utils").notify;
var props = require("./build_utils/build_utils").props;
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglifycss = require('gulp-uglifycss');
var del = require('del');
var reactify = require('reactify');
var babelify = require('babelify');
var browserify = require('browserify');
var watch = require('gulp-watch');
var tap = require('gulp-tap');
var gutil = require('gulp-util');
var server = require('gulp-server-livereload');
var livereload = require('gulp-livereload');
var gulpsync = require('gulp-sync')(gulp);
var gulpif = require("gulp-if");
var argv = require('yargs').argv;
var rename = require("gulp-rename");
require('./build_utils/gulp-react1');
var gulp = require('gulp');


var SASS_FILES = './src/sass/**/*.scss';
var WATCH_JS = ['./src/**/*.js'];
var MAIN_HTML_FILE = ['./src/html/index.html'];


gulp.task('serve', function (done) {
    livereload.listen();
    gulp.src('target')
            .pipe(server({
                livereload: {
                    enable: true
                },
                host: '127.0.0.1',
                port: 8080,
                defaultFile: 'index.html',
                directoryListing: false,
                open: true
            }));
});

gulp.task('default', function () {
    // place code for your default task here
});


gulp.task('copy-html', function () {


    // base allows to copy the folders above the file
    // return gulp.src(MAIN_HTML_FILE,{'cwd': './src/html','base':'./..'} )
    return gulp.src(MAIN_HTML_FILE).pipe(gulp.dest(props.targetLocation))
            .on('finish', function ( ) {
                gutil.log("processing change in html");
                livereload.reload(props.pageURL);
               // cb();
            });
 

});

var sassProcess =
        function () {

            return gulp.src(SASS_FILES)
                    .pipe(sass().on('error', sass.logError))
                    .pipe(concat('main.css'))
                  //  .pipe(uglifycss())
                    .pipe(gulp.dest(props.targetLocation));
        };

gulp.task('sass', function () {
    sassProcess();

});

gulp.task('copy-assets', function () {
    
      gulp.src(['./src/html/imgs/**/*'] )
              .pipe(gulp.dest(props.targetLocation+'/images'));
       gulp.src(['./src/html/icons/**/*'] )
              .pipe(gulp.dest(props.targetLocation+'/icons'));
       gulp.src(['./src/html/**/*.css'] )
              .pipe(gulp.dest(props.targetLocation));
      
         gulp.src(['./src/bower_components/lodash/dist/lodash.min.js'] )
              .pipe(gulp.dest(props.targetLocation+"/libs"));
  
        gulp.src(['./src/bower_components/jquery/dist/jquery.min.js'] )
              .pipe(gulp.dest(props.targetLocation+"/libs"));
      
        gulp.src(['./src/bower_components/postal.js/lib/postal.min.js'] )
              .pipe(gulp.dest(props.targetLocation+"/libs"));
  
    
});


gulp.task('watch-general', function () {

    watch(SASS_FILES, function (events, done) {

        sassProcess()
                .on('finish', function ( ) {
                    gutil.log("processing change in css");
                    livereload.reload(props.pageURL);
                });

    });

     

    watch(MAIN_HTML_FILE, function (events, done) {
        gutil.log("starting html change");
        gulp.start('copy-html');
    });

});



gulp.task('clean', function (  ) {

    del(['target']);

});

 

gulp.task('build', ['build-react1','build-react2','build-jquery']);
gulp.task('release', gulpsync.sync(['clean','build', 'sass','copy-assets', 'copy-html']));
gulp.task('dev', gulpsync.sync(['clean', 'build', 'sass','copy-assets', 'copy-html', 'watch-general', 'watch-code', 'serve']));
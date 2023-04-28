var gulp = require("gulp");
var minify = require("gulp-minify");
var rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const newer = require("gulp-newer");

gulp.task("pack-js", function () {
  return gulp
    .src("dist/index.js", { allowEmpty: true })
    .pipe(minify({ noSource: true }))
    .pipe(rename("index.min.js"))
    .pipe(gulp.dest("dist"));
});

gulp.task("sass-site", () =>
  gulp
    .src("./src/css/site.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(sourcemaps.write("./dist"))
    .pipe(newer("./dist"))
    .pipe(gulp.dest("./dist"))
);

gulp.task("default", gulp.series("pack-js", "sass-site"));

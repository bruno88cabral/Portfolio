var gulp = require("gulp");
var sass = require("gulp-sass");
var notify = require("gulp-notify");

gulp.task('sass', function(){
	return gulp.src('source/sass/*.scss')
	     .pipe(sass({outputStyle:'compressed'}))
	     .on('error', notify.onError({ title: 'Erro ao Compilar', massage: '<%= error.message %>'}))
	     .pipe(gulp.dest('dist/css'))
});

gulp.task('buildjs', function(){ 
	return gulp.src([
	'source/componentes/jquery/dist/jquery.js',
	'source/componentes/jquery-mobile/jquery.mobile.custom.js',
	'source/componentes/jquery-typer/jquery.typer.js'
		])
	.pipe(gulp.dest('dist/js'))
});

gulp.task('move-fonts', function(){
	return gulp.src('source/componentes/components-font-awesome/fonts/**')
	.pipe(gulp.dest('dist/fonts'))
})

gulp.task('js', function(){
	return gulp.src('source/js/*.js')
	.pipe(gulp.dest('dist/js/'))
});

gulp.task('demolidor', function(){
	gulp.watch('source/sass/**/*.scss',['sass'])
	gulp.watch('source/js/**/*.js',['js'])
});

gulp.task('default',['buildjs','sass','js','demolidor']);
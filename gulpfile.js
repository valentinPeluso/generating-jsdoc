var gulp = require('gulp');
var fs = require('fs');
var _ = require('lodash');

function readFile(fileName) {
    var fileName = fileName;
    fs.readFile(fileName, function(err, data) {
        if(err) throw err;
        console.log(data.toString());
        writeFile(fileName, data);
    });
}

function writeFile(fileName, data) {
    var fileString = "Hello Node.js";
    //Verificar si hay que hacer cambios;
    fs.writeFile(fileName, fileString, function(err) {
        if(err) throw err;
        console.log("Modifico");
    });
}

gulp.task('watch', function() {
	gulp.watch('src/**.js').on('change', function (file) {
        console.log('---- File ----');
        console.log(file.path);
        readFile(file.path);
    });
});

gulp.task('default', ['watch']);

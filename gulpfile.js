const { src, dest, watch, series } = require ('gulp'); 
//Compilar CSS
const sass = require('gulp-sass')(require('sass')); 

function css ( done ) {
    
    src('src/scss/app.scss')//Identificar el archivo principal
        .pipe( sass() )//Compilar SASS
        .pipe( dest('build/css') )//Exportarlo o guardarlo en una ubicacion 

    done();    
}
function dev(){
        watch('src/scss/**/*.scss', css);
}

exports.css = css; 
exports.dev = dev; 
exports.default = series ( css, dev);
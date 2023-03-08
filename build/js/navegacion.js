document.addEventListener('DOMContentLoaded', function(){
//botones

const body = document.querySelector('body');
const contactoPag = document.querySelector('#contacto');
const videoPag = document.querySelector('#video');
const ubicacionPag = document.querySelector('#ubicacion');
const documentos = document.querySelector('#documentos');
const contacto = document.querySelector('.datos-contacto');
const video = document.querySelector('.datos-video');
const ubicacion = document.querySelector('.datos-ubicacion')
const cuerpoGeneral = document.querySelectorAll('section');
const fotoPerfil = document.querySelector('.foto-perfil');
const textoPerfil = document.querySelector('.presentacion-texto');

let linkMenu = '';

contactoPag.addEventListener('click', verContenido);
ubicacionPag.addEventListener('click', verContenido);
videoPag.addEventListener('click', verContenido);



function verContenido(e) {
    e.preventDefault();
    
    let linkMenu = e.target.parentElement.id;

    

    if(linkMenu =='contacto'){
        if(cuerpoGeneral[0].classList.contains('empresaMenus') && !ubicacion.classList.contains('visually-hidden')){
            aparecerOcultar1(contacto);
        }
        if(!cuerpoGeneral[0].classList.contains('empresaMenus')) {
            aparecerOcultar1(contacto);
        }
       
        
        if (cuerpoGeneral[0].classList.contains('empresaMenus')){
            return;
        }

        transformarBanner();
        return;
    }
  
    if(linkMenu =='ubicacion'){
        if(!cuerpoGeneral[0].classList.contains('empresaMenus')) {
            aparecerOcultar2(ubicacion);
        }
        if(cuerpoGeneral[0].classList.contains('empresaMenus') && !contacto.classList.contains('visually-hidden')){
            aparecerOcultar2(ubicacion);
        }
        if (cuerpoGeneral[0].classList.contains('empresaMenus')){
            return;
        }
         transformarBanner();
         return;
    }

    if(linkMenu =='video'){
        if(!cuerpoGeneral[0].classList.contains('empresaMenus')) {
            aparecerOcultar3(video);
        }
        if(cuerpoGeneral[0].classList.contains('empresaMenus') && !ubicacion.classList.contains('visually-hidden')){
            aparecerOcultar3(video);
        }
        
        if (cuerpoGeneral[0].classList.contains('empresaMenus')){
            return;
        }

        transformarBanner();
        return;
    }
}



function aparecerOcultar1 (seccion){

    if (seccion.classList.contains('visually-hidden')){
        seccion.classList.remove('visually-hidden');
        cuerpoGeneral[2].classList.add('visually-hidden');
        cuerpoGeneral[3].classList.add('visually-hidden');
        cuerpoGeneral[4].classList.add('visually-hidden');
        cuerpoGeneral[5].classList.add('visually-hidden');
        cuerpoGeneral[6].classList.add('visually-hidden');
        cuerpoGeneral[8].classList.add('visually-hidden');
        cuerpoGeneral[9].classList.add('visually-hidden');
    

     

    }else {
        seccion.classList.add('visually-hidden');
        cuerpoGeneral[2].classList.remove('visually-hidden');
        cuerpoGeneral[3].classList.remove('visually-hidden');
        cuerpoGeneral[4].classList.remove('visually-hidden');
        cuerpoGeneral[5].classList.remove('visually-hidden');
        cuerpoGeneral[6].classList.remove('visually-hidden');

    }

}

function aparecerOcultar2 (seccion){

    if (seccion.classList.contains('visually-hidden')){
        seccion.classList.remove('visually-hidden');
        cuerpoGeneral[2].classList.add('visually-hidden');
        cuerpoGeneral[3].classList.add('visually-hidden');
        cuerpoGeneral[4].classList.add('visually-hidden');
        cuerpoGeneral[5].classList.add('visually-hidden');
        cuerpoGeneral[6].classList.add('visually-hidden');
        cuerpoGeneral[7].classList.add('visually-hidden');
        cuerpoGeneral[9].classList.add('visually-hidden');
     

    }else {
        seccion.classList.add('visually-hidden');
        cuerpoGeneral[2].classList.remove('visually-hidden');
        cuerpoGeneral[3].classList.remove('visually-hidden');
        cuerpoGeneral[4].classList.remove('visually-hidden');
        cuerpoGeneral[5].classList.remove('visually-hidden');
        cuerpoGeneral[6].classList.remove('visually-hidden');

    }

}

function aparecerOcultar3 (seccion){

    if (seccion.classList.contains('visually-hidden')){
        seccion.classList.remove('visually-hidden');
        cuerpoGeneral[2].classList.add('visually-hidden');
        cuerpoGeneral[3].classList.add('visually-hidden');
        cuerpoGeneral[4].classList.add('visually-hidden');
        cuerpoGeneral[5].classList.add('visually-hidden');
        cuerpoGeneral[6].classList.add('visually-hidden');
        cuerpoGeneral[7].classList.add('visually-hidden');
        cuerpoGeneral[8].classList.add('visually-hidden');
     

    }else {
        seccion.classList.add('visually-hidden');
        cuerpoGeneral[2].classList.remove('visually-hidden');
        cuerpoGeneral[3].classList.remove('visually-hidden');
        cuerpoGeneral[4].classList.remove('visually-hidden');
        cuerpoGeneral[5].classList.remove('visually-hidden');
        cuerpoGeneral[6].classList.remove('visually-hidden');

    }

}



function transformarBanner() {  

    if (cuerpoGeneral[0].classList.contains('empresa')){
        cuerpoGeneral[0].classList.remove('empresa');
   
        cuerpoGeneral[0].classList.add('empresaMenus');

        body.classList.add('bg-secondary')
        body.classList.remove('bg-tarjeta')

        cuerpoGeneral[1].classList.remove('perfil');
        fotoPerfil.classList.remove('pb-4');
        cuerpoGeneral[1].classList.add('perfilMenus');
        textoPerfil.classList.add('visually-hidden');


    }else {
        cuerpoGeneral[0].classList.add('empresa');
        cuerpoGeneral[0].classList.remove('empresaMenus');

        body.classList.remove('bg-secondary')
        body.classList.add('bg-tarjeta')
        

        cuerpoGeneral[1].classList.add('perfil');
        cuerpoGeneral[1].classList.remove('perfilMenus');
        textoPerfil.classList.remove('visually-hidden');
    }


}




});


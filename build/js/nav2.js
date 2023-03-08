document.addEventListener('DOMContentLoaded', function(){
    //botones
    
    const body = document.querySelector('body');
    const cerrarPag = document.querySelector('#cerrar');
    const cerrar = document.querySelector('.cerrar');
    const contactoPag = document.querySelector('#contacto');
    const menuPag = document.querySelector('#menu');
    const videoPag = document.querySelector('#video');
    const ubicacionPag = document.querySelector('#ubicacion');
    const documentosPag = document.querySelector('#documentos');
    const documentos = document.querySelector('.datos-documentos');
    const contacto = document.querySelector('.datos-contacto');
    const video = document.querySelector('.datos-video');
    const ubicacion = document.querySelector('.datos-ubicacion')
    const cuerpoGeneral = document.querySelectorAll('section');
    const fotoPerfil = document.querySelector('.foto-perfil');
    const textoPerfil = document.querySelector('.presentacion-texto');
    const menuAsidePag = document.querySelector('#menu-aside');
    const menuAside = document.querySelector('.menu-aside');
    const datosCompartirPag = document.querySelector('#share');
    const datosCompartir = document.querySelector('.datos-compartir');
    const vcardPag = document.querySelector('#gcontact');
    const vCard = document.querySelector('.datos-vcard');
    const anidarPag = document.querySelector('#anidar');
    const anidar = document.querySelector('.datos-inicio ');
    
    let linkMenu = '';

    contactoPag.addEventListener('click', menus);
    ubicacionPag.addEventListener('click', menus);
    videoPag.addEventListener('click', menus);
    documentosPag.addEventListener('click', menus);
    cerrar.addEventListener('click', cerrarMenu);
    datosCompartirPag.addEventListener('click', menus);
    vcardPag.addEventListener('click', menus);
    anidarPag.addEventListener('click', menus);
    
    function cerrarMenu (e){
        e.preventDefault();
        
        botonCerrar();

    }   

    function menus(e) {

        e.preventDefault();
        let linkMenu = e.target.parentElement.id;
        console.log(linkMenu);
       

        if (cuerpoGeneral[0].classList.contains('empresa')){

         verContenido(linkMenu);

        } else {

         verContenido2(linkMenu);
    

        }
    }
    
    
    function verContenido(e) {

        if(e =='contacto'){
            transformarBanner();
            aparecerOcultar (contacto);
            return;
        }
        if(e =='ubicacion'){
            transformarBanner();
            aparecerOcultar (ubicacion);
            return;
        }
        if(e =='video'){
            transformarBanner();
            aparecerOcultar (video);
            return;
        }
        if(e =='documentos'){
            transformarBanner();
            aparecerOcultar (documentos);
            return;
        }
        if(e =='share'){
            transformarBanner();
            aparecerOcultar (datosCompartir);
            return;
        }
        if(e =='gcontact'){
            transformarBanner();
            aparecerOcultar (vCard);
            return;
        }
        if(e =='anidar'){
            transformarBanner();
            aparecerOcultar (anidar);
            return;
        }
     
    }

    function verContenido2(e) {
  

        

        if(e == 'ubicacion'){
            arreglo();
            aparecerOcultar2(ubicacion);
        }

        if(e == 'contacto'){
            arreglo();
            aparecerOcultar2(contacto);
        }

        if(e == 'video'){
            arreglo();
            aparecerOcultar2(video);
        }

        if(e == 'documentos'){
            arreglo();
            aparecerOcultar2(documentos);
        }
        if(e =='share'){
            arreglo();
            aparecerOcultar2(datosCompartir);
            return;
        }
        if(e =='gcontact'){
            arreglo();
            aparecerOcultar2(vCard);
            return;
        }
        if(e =='anidar'){
            arreglo();
            aparecerOcultar2(anidar);
            return;
        }
     
     
    }
    
    
    
    
    function aparecerOcultar (seccion){
    
        if (seccion.classList.contains('visually-hidden')){
            seccion.classList.remove('visually-hidden');
            seccion.classList.add('activo');
            menuAside.classList.add('visually-hidden')
            cuerpoGeneral[2].classList.add('visually-hidden');
            cuerpoGeneral[3].classList.add('visually-hidden');
            cuerpoGeneral[4].classList.add('visually-hidden');
            cuerpoGeneral[5].classList.add('visually-hidden');
            cuerpoGeneral[6].classList.add('visually-hidden');

            return;
        }
    
    }

    function arreglo () {
        cuerpoGeneral.forEach(function (seccion) {
            if (seccion.classList.contains('activo')) {
                seccion.classList.add('visually-hidden');
                seccion.classList.remove('activo');    
            }   
        })
    }

    function aparecerOcultar2 (seccion) {  
            seccion.classList.remove('visually-hidden');
            seccion.classList.add('activo');
            
    }
    
   
    
    function transformarBanner() {  
    
        if (cuerpoGeneral[0].classList.contains('empresa')){
            cuerpoGeneral[0].classList.remove('empresa');
       
            cuerpoGeneral[0].classList.add('empresaMenus');
            cerrarPag.classList.remove('visually-hidden');
    
            body.classList.add('bg-secondary')
            body.classList.remove('bg-tarjeta')
    
            cuerpoGeneral[1].classList.remove('perfil');
            fotoPerfil.classList.remove('pb-4');
            cuerpoGeneral[1].classList.add('perfilMenus');
            textoPerfil.classList.add('visually-hidden');
            
            return;
        }else {
            
        }
    
    
    }

    function botonCerrar(){
            cuerpoGeneral[0].classList.add('empresa');
            cuerpoGeneral[0].classList.remove('empresaMenus');
    
            body.classList.remove('bg-secondary');
            body.classList.add('bg-tarjeta');
            cerrarPag.classList.add('visually-hidden');
    
            cuerpoGeneral[1].classList.add('perfil');
            cuerpoGeneral[1].classList.remove('perfilMenus');
            textoPerfil.classList.remove('visually-hidden');

            cuerpoGeneral[2].classList.remove('visually-hidden');
            cuerpoGeneral[3].classList.remove('visually-hidden');
            cuerpoGeneral[4].classList.remove('visually-hidden');
            cuerpoGeneral[5].classList.remove('visually-hidden');
            cuerpoGeneral[6].classList.remove('visually-hidden');
            menuAside.classList.remove('visually-hidden')

            cuerpoGeneral.forEach(function (seccion) {
                if (seccion.classList.contains('activo')) {
                    seccion.classList.add('visually-hidden');
                    seccion.classList.remove('activo');    
                }   
            })

    }
    
    
    
    
    });
    
    
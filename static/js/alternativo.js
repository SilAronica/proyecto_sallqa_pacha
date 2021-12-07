const seccionesPaginaPrincipal = new fullpage('#fullpage', {
    autoScrolling: true,
    easing: 'easeInOutCubic',
    scrollingSpeed: 700,
    css3: true,
    easingcss3: 'ease-out',
    loopBottom: false,

    /*---Barra de Navegación---*/

    navigation: true,
    menu: '#menu',
    anchors:['inicio', 'quienes_somos', 'ods', 'foros'],
    navigationTooltips: ['Inicio', 'Quiénes somos', 'ODS', 'Foros'],
    showAtiveTooltip: false,


/*----Secciones*/

    sectionsColor: ['#c2c2c2', '#c2c2c2', '#c2c2c2'],
    verticalCentered: true,
});  
    
    /*
    
    controlArrows: true,
    slidesNavigation: false,
    afterLoad: function(origin, detination){
        if(AudioDestinationNode.anchor == 'Foro'){
            document.querySelector('.footer').querySelector('h2').style.opacity = 1;
        }
    }

    */
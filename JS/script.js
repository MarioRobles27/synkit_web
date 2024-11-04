// //animate burger icon
// $(document).ready(function() {
//     $(".burger").on("click",function() {
//       $(".burger").toggleClass("active");
      
//     });
//   });
//   //slide menu list
//   $(document).ready(function(){
//     $(".burger").click(function(){
//       $("ul").slideToggle("ul");
      
//     });
//   });

// MENÚ LATERAL
// ------------
function MenuLateral() {
  var dis = this;
  dis.menu = $('#menu-lateral');
  dis.btn = $('#btn-menu-lateral');
  
  // Determino si puedo hacer touch o no.
  dis.touchsi = 'ontouchstart' in window;

  // Variables para guardar eventos.
  dis.empieza = dis.touchsi ? 'touchstart' : 'mousedown';
  dis.mientras = dis.touchsi ? 'touchmove' : 'mousemove';
  dis.termina = dis.touchsi ? 'touchend' : 'mouseup';

  dis.moviendo = false;
  dis.puntoPartida;
  dis.movido;
  dis.pos;
  dis.abierto = false;

  // Evento de inicio
  dis.menu.on(dis.empieza, function(event) {
      event.preventDefault();

      dis.moviendo = true;
      dis.puntoPartida = dis.touchsi ? event.originalEvent.touches[0].clientX : event.clientX;
      dis.pos = -dis.menu.position().left;
  });

  // Evento de movimiento
  $(document).on(dis.mientras, function(event) {
      event.preventDefault();

      if (dis.moviendo) {
          dis.movido = (dis.touchsi ? event.originalEvent.touches[0].clientX : event.clientX) - dis.puntoPartida;
          dis.menu.css('left', (dis.movido - dis.pos) + 'px');
      }
  });

  // Evento de terminación
  $(document).on(dis.termina, function(event) {
      dis.moviendo = false;
      event.preventDefault();

      if (dis.movido > 50) {
          dis.menu.css('left', '0px');
          dis.abierto = true;
      } else if (dis.movido < -50) {
          dis.menu.css('left', '-220px');
          dis.abierto = false;
      } else {
          dis.menu.css('left', dis.abierto ? '0px' : '-220px');
      }
  });
}

if ($('#menu-lateral').length > 0) {
  var lateral = new MenuLateral();
}



// PDP PRODUCTO


// Inicializa Packery en el contenedor con clase .grid
const $grid = $('.grid').packery({
    itemSelector: '.grid-item',
    columnWidth: 100
  });
  
  // Convierte todos los elementos .grid-item en objetos draggables usando Draggabilly
  $grid.find('.grid-item').each(function(i, gridItem) {
    const draggie = new Draggabilly(gridItem);
    // Vincula eventos de Draggabilly a Packery
    $grid.packery('bindDraggabillyEvents', draggie);
  });

  
  



// var initPhotoSwipeFromDOM = function(gallerySelector) {
//     var parseThumbnailElements = function(thumbnails) {
//         var items = [];
//         for (var i = 0; i < thumbnails.length; i++) {
//             var figureEl = thumbnails[i];
//             var linkEl = figureEl.children[0]; // <a> element
//             var size = linkEl.getAttribute('data-size').split('x');

//             var item = {
//                 src: linkEl.getAttribute('href'),
//                 w: parseInt(size[0], 10),
//                 h: parseInt(size[1], 10),
//                 title: figureEl.children.length > 1 ? figureEl.children[1].innerHTML : ''
//             };

//             items.push(item);
//         }
//         return items;
//     };

//     var openPhotoSwipe = function(index) {
//         var pswpElement = document.querySelectorAll('.pswp')[0];
//         var items = parseThumbnailElements(document.querySelectorAll(gallerySelector + ' figure'));
//         var options = {
//             index: index,
//             bgOpacity: 0.85,
//             showHideOpacity: true,
//         };
//         var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
//         gallery.init();
//     };

//     var galleryElements = document.querySelectorAll(gallerySelector + ' figure');
//     for (var i = 0; i < galleryElements.length; i++) {
//         galleryElements[i].onclick = function(event) {
//             event.preventDefault();
//             var index = Array.prototype.indexOf.call(galleryElements, this);
//             openPhotoSwipe(index);
//         };
//     }
// };









// LIBRERIA AOS ACTUALIZACIONES
window.onload = function () {
    "use strict";
    AOS.init({
        duration: 1500,
    });
  };

  
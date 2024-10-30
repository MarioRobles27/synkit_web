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

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(Flip);

    let products = gsap.utils.toArray(".product");
    let active = products[0];

    products.forEach(el => {
        el.addEventListener("click", () => changeGrid(el));
    });

    function changeGrid(el) {
        if (el === active) return;

        let state = Flip.getState(products);
        active.dataset.grid = el.dataset.grid;
        el.dataset.grid = "img-1";
        active = el;

        Flip.from(state, {
            duration: 0.3,
            absolute: true,
            ease: "power1.inOut"
        });
    }
});









// LIBRERIA AOS ACTUALIZACIONES
window.onload = function () {
    "use strict";
    AOS.init({
        duration: 1500,
    });
  };

  
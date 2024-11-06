
function MenuLateral() {
  var dis = this;
  dis.menu = $('#menu-lateral');
  dis.btn = $('#btn-menu-lateral');

  dis.touchsi = 'ontouchstart' in window;
  dis.empieza = dis.touchsi ? 'touchstart' : 'mousedown';
  dis.mientras = dis.touchsi ? 'touchmove' : 'mousemove';
  dis.termina = dis.touchsi ? 'touchend' : 'mouseup';

  dis.moviendo = false;
  dis.puntoPartida = 0;
  dis.movido = 0;
  dis.pos = 0;
  dis.abierto = false;

  // Abre o cierra el menú al hacer clic en el botón
  dis.btn.on('click', function() {
    if (dis.abierto) {
      dis.menu.css('left', '-220px');
    } else {
      dis.menu.css('left', '0px');
    }
    dis.abierto = !dis.abierto;
  });

  // Evento de inicio de arrastre
  dis.menu.on(dis.empieza, function(event) {
    event.preventDefault();
    dis.moviendo = true;
    dis.puntoPartida = dis.touchsi ? event.originalEvent.touches[0].clientX : event.clientX;
    dis.pos = -dis.menu.position().left;
  });

  // Evento de movimiento
  $(document).on(dis.mientras, function(event) {
    if (dis.moviendo) {
      event.preventDefault();
      dis.movido = (dis.touchsi ? event.originalEvent.touches[0].clientX : event.clientX) - dis.puntoPartida;
      dis.menu.css('left', (dis.movido - dis.pos) + 'px');
    }
  });

  // Evento de terminación
  $(document).on(dis.termina, function(event) {
    if (dis.moviendo) {
      event.preventDefault();
      dis.moviendo = false;

      if (dis.movido > 50) {
        dis.menu.css('left', '0px');
        dis.abierto = true;
      } else if (dis.movido < -50) {
        dis.menu.css('left', '-220px');
        dis.abierto = false;
      } else {
        dis.menu.css('left', dis.abierto ? '0px' : '-220px');
      }
    }
  });
}

// Inicializa el menú lateral si existe el elemento #menu-lateral
if ($('#menu-lateral').length > 0) {
  var lateral = new MenuLateral();
}



$(document).ready(function() {
  const images = $(".thumbnail").map(function() { return $(this).attr("src"); }).get();
  let currentIndex = 0;

  // Abre el modal al hacer clic en la imagen principal
  $("#mainImage").click(function() {
    $("#modalImage").attr("src", $(this).attr("src"));
    $("#imageModal").css("display", "flex");
    currentIndex = images.indexOf($(this).attr("src"));
  });

  // Función para actualizar la imagen en el modal
  function updateModalImage(index) {
    currentIndex = (index + images.length) % images.length;
    $("#modalImage").attr("src", images[currentIndex]);
  }

  // Botones de control para el carrusel
  $("#prev").click(function() {
    updateModalImage(currentIndex - 1);
  });
  $("#next").click(function() {
    updateModalImage(currentIndex + 1);
  });

  // Cerrar el modal
  $(".close").click(function() {
    $("#imageModal").css("display", "none");
  });

  // Cambiar imagen principal al hacer clic en miniatura
  $(".thumbnail").click(function() {
    let mainSrc = $("#mainImage").attr("src");
    $("#mainImage").attr("src", $(this).attr("src"));
    $(this).attr("src", mainSrc);
  });
});
  
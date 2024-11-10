function toggleStyle(element) {
  // Quitamos la clase 'active' de todos los elementos para que solo uno esté activo
  document.querySelectorAll('.clickable-title').forEach(el => el.classList.remove('active'));

  // Agregamos la clase 'active' al elemento actual
  element.classList.add('active');
}


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

  // Actualiza la imagen en el modal
  function updateModalImage(index) {
    currentIndex = (index + images.length) % images.length;
    $("#modalImage").attr("src", images[currentIndex]);
  }

  // Navega por las imágenes en el modal
  $("#prev").click(function() {
    updateModalImage(currentIndex - 1);
  });
  $("#next").click(function() {
    updateModalImage(currentIndex + 1);
  });

  // Cierra el modal al hacer clic en la capa de fondo
  $(".modal-background").click(function() {
    $("#imageModal").css("display", "none");
  });

  // Cierra el modal con el botón de cerrar
  $(".close").click(function() {
    $("#imageModal").css("display", "none");
  });

  // Cambia la imagen principal al hacer clic en una miniatura
  $(".thumbnail").click(function() {
    $("#mainImage").attr("src", $(this).attr("src"));
  });
});


$(document).ready(function() {
  const texto = "El Papercut Texture Pack de Design Syndrome incluye 100 texturas de alta definición en formato PNG, tanto en versión original como transparente, ideal para sobreponer en proyectos de diseño. Este pack está pensado para mejorar posters, ilustraciones digitales y proyectos de branding, ofreciendo texturas de corte, arrugas y detalles artesanales. Es compatible con Photoshop, Illustrator, Figma, y varias otras plataformas de diseño. Además, está disponible con licencias comercial y extendida.";
  const velocidad = 30;
  let indice = 0;

  function escribirTexto() {
      if (indice < texto.length) {
          $('#texto').append(texto.charAt(indice));
          indice++;
          
          // Mueve el cursor al final del texto en cada iteración
          $('.cursor').appendTo('#texto');
          
          setTimeout(escribirTexto, velocidad);
      }
  }

  // Inicia el efecto de escritura
  escribirTexto();
});






window.onload = function () {
  "use strict";
  AOS.init({
      duration: 1500,
  });
};


particlesJS('particles-js', {
  particles: {
    number: {
      value: 50, // Cantidad de partículas
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff" // Color de las partículas (blanco)
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      }
    },
    opacity: {
      value: 0.3, // Opacidad baja para un efecto discreto
      random: false,
      anim: {
        enable: false
      }
    },
    size: {
      value: 3, // Tamaño pequeño de partículas
      random: true,
      anim: {
        enable: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1, // Movimiento suave y lento
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false
      },
      onclick: {
        enable: false
      },
      resize: true
    }
  },
  retina_detect: true
});

//animate burger icon
$(document).ready(function() {
    $(".burger").on("click",function() {
      $(".burger").toggleClass("active");
      
    });
  });
  //slide menu list
  $(document).ready(function(){
    $(".burger").click(function(){
      $("ul").slideToggle("ul");
      
    });
  });


// LIBRERIA AOS ACTUALIZACIONES
window.onload = function () {
    "use strict";
    AOS.init({
        duration: 1500,
    });
  };


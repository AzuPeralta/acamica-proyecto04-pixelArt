// No modifiques estas funciones a menos que sepas MUY BIEN lo que estas haciendo!


// Abre una ventana para guardar nuestro arte en un archivo pixel-art.png
function guardarPixelArt() {
  html2canvas($("#grilla-pixeles") , {
    onrendered: function(canvas) {
      theCanvas = canvas;
      canvas.toBlob(function(blob) {
        saveAs(blob, "pixel-art.png");
      });
    }
  });
}

// Carga a un superheroe predefinido - Modificado para dejar de usar Jquery.

function cargarSuperheroe(superheroe) {
  var a = document.getElementsByClassName("pixel");
  for (var i = 0; i < superheroe.length; i++) {
    a[i].style.backgroundColor = superheroe[i];
  }
}

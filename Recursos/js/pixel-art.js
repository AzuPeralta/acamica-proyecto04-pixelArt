function inicio(){
  generarPaletaColores();
  generarGrilla();
  cambiarIndicadorColor();
  pintarPixelGrilla();
  borrarTodo();
}

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var paletaColores = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var indicador = document.getElementById('indicador-de-color');
var estadoDelMouse;



function generarPaletaColores(){
  for(let i = 0; i < nombreColores.length; i++){
    let color = document.createElement("div");
    color.style.backgroundColor = nombreColores[i];
    color.className = "color-paleta";
    paletaColores.appendChild(color);
  }
}

function generarGrilla(){
  for(let i = 0; i < 1750; i++){
      let pixel = document.createElement('div');
      pixel.className = "pixel"
      grillaPixeles.appendChild(pixel);
  }
}

//funciona pero no la entiendo.
function cambiarIndicadorColor(){
  document.getElementById('paleta').addEventListener("click", function(e){
    indicador.style.backgroundColor = e.target.style.backgroundColor;
  });
}

function pintarPixelGrilla(){
  grillaPixeles.addEventListener("click", function(e){
    e.target.style.backgroundColor = indicador.style.backgroundColor;
  });
}

colorPersonalizado.addEventListener('change',
  (function() {
    colorActual = colorPersonalizado.value;
    indicador.style.backgroundColor = colorActual;
  })
);


  grillaPixeles.addEventListener("mouseup",function(){
    estadoDelMouse = false;
  });
  grillaPixeles.addEventListener("mousedown", function(){
    estadoDelMouse = true;
  });
  grillaPixeles.addEventListener("mousemove", function(e){
    if (estadoDelMouse == true){
    e.target.style.backgroundColor = indicador.style.backgroundColor;
    }
  });
  grillaPixeles.addEventListener("contextmenu", function(e){
    e.preventDefault();
  });

  function borrarTodo(){
    let boton = document.getElementById('borrar');
    boton.addEventListener("click", function(){
      for(let pixel of grillaPixeles.children){
        pixel.style.backgroundColor = "white";
      }
      animarBorrado(grillaPixeles,'fadein');
    });
  }

  function animarBorrado(elemento, className){
    elemento.classList.remove(className);
    elemento.offsetWidth;
    elemento.classList.add(className);
  }


function cargarSuperheroe(superheroe) {
  var a = document.getElementsByClassName("pixel");
  for (var i = 0; i < superheroe.length; i++) {
    a[i].style.backgroundColor = superheroe[i];
  }
}

    document.getElementById('batman').addEventListener("click", function(e){
      cargarSuperheroe(batman);
    });
    document.getElementById('wonder').addEventListener("click", function(e){
      cargarSuperheroe(wonder);
    });
    document.getElementById('flash').addEventListener("click", function(e){
      cargarSuperheroe(flash);
    });
    document.getElementById('invisible').addEventListener("click", function(e){
      cargarSuperheroe(invisible);
    });

document.getElementById('guardar').addEventListener("click", guardarPixelArt);

function guardarPixelArt() {
  html2canvas(grillaPixeles , {
    onrendered: function(canvas) {
      theCanvas = canvas;
      canvas.toBlob(function(blob) {
        saveAs(blob, "pixel-art.png");
      });
    }
  });
}


inicio();
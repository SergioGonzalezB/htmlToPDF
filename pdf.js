//necesario utilizar npm install --save html-pdf

//cargamos el modulo para convertir html a pdf.
const pdf = require("html-pdf");

// en una variable constante realizamos la plantilla en html y con css de ser necesario.
const content = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Resultado de plantilla PDF</title>
    <style>
      h1 {
        color: green;
      }
    </style>
  </head>

  <body>
    <div
      id="pageHeader"
      style="border-bottom: 1px solid #ddd; padding-bottom: 5px;"
    >
      <p>- Ejemplo de cabecera en HTML PDF</p>
    </div>

    <div id="pageFooter" style="border-top: 1px solid #ddd; padding-top: 5px;">
      Footer de Ejemplo
    </div>

    <h1>Título en el PDF creado con el paquete html-pdf</h1>
    <p>Generando un PDF con un HTML sencillo</p>
  </body>
</html>`;

//Crea el archivo utilizando la variable que contiene nuestro contenido HTML
//./nombreDeArchivo.pdf para determinar el nombre del archivo creado en ./ (raiz del proyecto)
pdf.create(content).toFile("./resultadoPDF/html2-pdf.pdf", function(err, res) {
  if (err) {
    //si existe un error lo tomamos y lo mandamos a consola
    console.log(err);
  } else {
    //si no hay error mandamos el RESPONSE a consola
    console.log(res);
  }
});

//Para obtener el archivo HTML guardado
var fs = require("fs");
//Leer el archivo HTML con su charset
var html = fs.readFileSync("./Plantillas/EjemploPropio.html", "utf8");
//path para obtener la direccion absoluta de la carpeta Plantillas donde esta nuestro CSS y HTML
var path = require("path");
//Opciones para el documento PDF que se creara
var options = {
  //Format determina el tamaño de pagina para el PDF
  format: "Tabloid",
  //path.resolve se concatena al prefijo file:// que necesita llevar la propiedad base (donde residen los archivos css, imagenes y js)
  base: "file://" + path.resolve("./Plantillas")
};

pdf
  .create(html, options)
  .toFile("./resultadoPDF/pruebaCSS.pdf", function(err, res) {
    if (err) return console.log(err);
    console.log(res);
  });

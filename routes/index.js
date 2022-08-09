var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    
    title: 'Asistente Universitario',


});
});

// TOKENIZACION::
const getvalue = () =>{  
    
  // DIV General de todos los Mensajes 
  var padre = document.getElementById("mensajes");
  // Valor de entrada del usuario
  var inputValue = lorca(document.getElementById("entrada").value); 
          //Lorca API
          //const lorca = require('lorca-nlp');
          //var doc = lorca(inputValue); 
          //doc.words().get();
    //creamos el div "texto", el cual va a contener el elemento p con el texto de respuesta:
    var div = document.createElement("div"); 
    div.classList.add ("texto")
    //creamos el elemento p para el texto respuesta
    var p = document.createElement("p");
    var pText = document.createTextNode(inputValue); 
    p.appendChild(pText); 
    //agregamos el texto de respuesta al div texto"
    div.appendChild(p); 
    //añadimos el div texto al div padre: "mensajes"
    padre.appendChild(div);
    //borramos el texto del input 
    document.getElementsByClassName("entrada")[0].value = ""; 
  } 
module.exports = router;

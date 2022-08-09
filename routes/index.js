var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    
    title: 'Asistente Universitario',
    response: "Hola World"

});
});


///

router.post('/response', async(req, res, next) =>{
 
  const { NlpManager } = require('node-nlp'); 
  const manager = new NlpManager({ languages: ['es'], forceNER: true });
  // Adds the utterances and intents for the NLP 
  manager.addDocument('es', 'quién es el director de la carrera ingeniería en sistemas?', 'pregunta.directorsis');
  manager.addDocument('es', 'quién es el director de la carrera en computación?', 'pregunta.directorsis');
  manager.addDocument('es', 'director de la carrera en computación?', 'pregunta.directorsis');
  
  manager.addDocument('es', 'quién es el director de la carrera ingeniería en Geología Ambiental y Ordenamiento Territorial?', 'pregunta.directorgeo');
  manager.addDocument('es', 'quién es el director de la carrera Geología Ambiental?', 'pregunta.directorgeo');
  manager.addDocument('es', 'director de la carrera de Geología?', 'pregunta.directorgeo');
  manager.addDocument('es', 'director de Geología?', 'pregunta.directorgeo');
  
  manager.addDocument('es', 'quién es el director de la carrera de Electromecánica?', 'pregunta.directormeca');
  manager.addDocument('es', 'quién es el director de Electromecánica?', 'pregunta.directormeca');
  manager.addDocument('es', 'director de la carrera de Electromecánica?', 'pregunta.directormeca');
  
  manager.addDocument('es', 'quién es el director de la carrera de Electronica y Telecominicaciónes?', 'pregunta.directorelec');
  manager.addDocument('es', 'quién es el director de la carrera de Electronica?', 'pregunta.directorelec');
  manager.addDocument('es', 'director de la carrera de Electronica?', 'pregunta.directorelec');
  
  manager.addDocument('es', 'quién es el director de la carrera Mecánica Automotriz?', 'pregunta.directorauto');
  manager.addDocument('es', 'quién es el director de la carrera de Mecánica?', 'pregunta.directorauto');
  manager.addDocument('es', 'director de la carrera de Mecánica?', 'pregunta.directorauto');
  
  manager.addDocument('es', 'quién es el decano de la facultad de la educación, el arte y la comunicación?', 'pregunta.decanoedu');
  manager.addDocument('es', 'quién es el decano de la educación, el arte y la comunicación?', 'pregunta.decanoedu');
  manager.addDocument('es', 'DECANO DE LA FACULTAD DE LA EDUCACIÓN, EL ARTE Y LA COMUNICACIÓN?', 'pregunta.decanoedu');
  manager.addDocument('es', 'DECANO DE LA FACULTAD DE LA EDUCACIÓN?', 'pregunta.decanoedu');
  manager.addDocument('es', 'quiés es el DECANO DE LA FACULTAD DE LA Educación?', 'pregunta.decanoedu');
  
  manager.addDocument('es', 'quién es el decano de la facultad de Agropecuaria?', 'pregunta.decanoagro');
  manager.addDocument('es', 'quién es el decano de AGROPECUARIA?', 'pregunta.decanoagro');
  manager.addDocument('es', 'DECANO DE LA FACULTAD AGROPECUARIA  Y DE RECURSOS NATURALES RENOVABLES?', 'pregunta.decanoagro');
  manager.addDocument('es', 'DECANO DE LA FACULTAD DE AGROPECUARIA?', 'pregunta.decanoagro');
  manager.addDocument('es', 'quiés es el DECANO DE LA FACULTAD DE AGROPECUARIA Y DE RECURSOS NATURALES RENOVABLES?', 'pregunta.decanoagro');
  
  manager.addDocument('es', 'quién es el decano de la facultad Jurídica, Social Y Administrativa?', 'pregunta.decanojuri');
  manager.addDocument('es', 'quién es el decano de energía?', 'pregunta.decanojuri');
  manager.addDocument('es', 'DECANO DE LA FACULTAD JURÍDICA, SOCIAL Y ADMINISTRATIVA?', 'pregunta.decanojuri');
  manager.addDocument('es', 'DECANO DE LA FACULTAD JURÍDICA?', 'pregunta.decanojuri');
  manager.addDocument('es', 'quiés es el DECANO DE LA FACULTAD JURÍDICA, SOCIAL Y ADMINISTRATIVA?', 'pregunta.decanojuri');
  
  manager.addDocument('es', 'quién es el decano de la facultad de Salud Humana?', 'pregunta.decanosalud');
  manager.addDocument('es', 'quién es el decano de Salud Humana?', 'pregunta.decanosalud');
  manager.addDocument('es', 'DECANO DE LA FACULTAD DE LA Salud Humana?', 'pregunta.decanosalud');
  manager.addDocument('es', 'quiés es el DECANO DE LA FACULTAD DE LA Salud Humana?', 'pregunta.decanosalud');
  
  manager.addDocument('es', 'quién es el DIRECTOR DE LA UNIDAD DE EDUCACIÓN A DISTANCIA?', 'pregunta.decanoadis');
  manager.addDocument('es', 'quién es el decano de LA UNIDAD DE EDUCACIÓN A DISTANCIA?', 'pregunta.decanoadis');
  manager.addDocument('es', 'Director de LA UNIDAD DE EDUCACIÓN A DISTANCIA?', 'pregunta.decanoadis');
  manager.addDocument('es', 'quiés es el Director de la Unidad de Educación a Distancia?', 'pregunta.decanoadis');
  
  manager.addDocument('es', 'quién es el decano de la facultad de energía?', 'pregunta.decanosis');
  manager.addDocument('es', 'quién es el decano de energía?', 'pregunta.decanosis');
  manager.addDocument('es', 'DECANO DE LA FACULTAD DE LA ENERGÍA, LAS INDUSTRIAS Y LOS RECURSOS NATURALES NO RENOVABLES?', 'pregunta.decanosis');
  manager.addDocument('es', 'DECANO DE LA FACULTAD DE LA ENERGÍA?', 'pregunta.decanosis');
  manager.addDocument('es', 'quiés es el DECANO DE LA FACULTAD DE LA ENERGÍA?', 'pregunta.decanosis');
  
  
  
  manager.addDocument('es', 'hasta otra!', 'greetings.bye');
  manager.addDocument('es', 'ok, te veo luego', 'greetings.bye');
  manager.addDocument('es', 'chao, te veo luego', 'greetings.bye');
  manager.addDocument('es', 'hasta luego!', 'greetings.bye');
  manager.addDocument('es', 'te veo luego', 'greetings.bye');
  manager.addDocument('es', 'me tengo que ir', 'greetings.bye');
  manager.addDocument('es', 'hola', 'greetings.hello');
  manager.addDocument('es', 'que tal?', 'greetings.hello');
  manager.addDocument('es', 'como vás?', 'greetings.hello');
  manager.addDocument('es', 'buenas tardes', 'greetings.tardes');
  manager.addDocument('es', 'hola, buenas tardes', 'greetings.tardes');
  manager.addDocument('es', 'buena tarde', 'greetings.tardes');
  manager.addDocument('es', 'buenas noches', 'greetings.noches');
  manager.addDocument('es', 'hola, buenas noches', 'greetings.noches');
  manager.addDocument('es', 'buena noches', 'greetings.noches');
  
  // Train also the NLG
  manager.addAnswer('es', 'pregunta.decanoedu', 'El decano de la facultad de la Educación, el Arte y la Comunicación, es el Dr. Yovany Salazar Estrada, Ph.D., yovany.salazar@unl.edu.ecc');
  manager.addAnswer('es', 'pregunta.decanoedu', 'El decano de la facultad de la Educación, el Arte y la Comunicación, es el Dr. Yovany Salazar Estrada, Ph.D., yovany.salazar@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.decanoedu', 'El Dr. Yovany Salazar Estrada, Ph.D., es el decano de la facultad de la Educación, el Arte y la Comunicación, su correo es: yovany.salazar@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.decanoedu', 'El Dr. Yovany Salazar Estrada, Ph.D., yovany.salazar@unl.edu.ec');
  
  manager.addAnswer('es', 'pregunta.decanoagro', 'El decano de la facultad de Agropecuaria y de Recursos Naturales Renovables, es el Msc. Jorky Roosevelt Armijos Tituana, jorky.armijos@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.decanoagro', 'El decano de la facultad de Agropecuaria, es el Msc. Jorky Roosevelt Armijos Tituana, jorky.armijos@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.decanoagro', 'El Msc. Jorky Roosevelt Armijos Tituana, es el decano de la facultad de Agropecuaria, su correo es: jorky.armijos@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.decanoagro', 'El Msc. Jorky Roosevelt Armijos Tituana, jorky.armijos@unl.edu.ec');
  
  manager.addAnswer('es', 'pregunta.decanojuri', 'La decano de la facultad Jurídica, Social y Administrativa, es la Dra. Elvia Maricela Zhapa Amay, elvia.zhapa@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.decanojuri', 'La decano de la facultad Jurídica, es la Dra. Elvia Maricela Zhapa Amay, elvia.zhapa@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.decanojuri', 'La Dra. Elvia Maricela Zhapa Amay, es la decano de la facultad Jurídica, Social y Administrativa, su correo es: elvia.zhapa@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.decanojuri', 'La Dra. Elvia Maricela Zhapa Amay, elvia.zhapa@unl.edu.ec');
  
  manager.addAnswer('es', 'pregunta.decanosalud', 'El decano de la facultad de la Salud Humana, es el Dr. Santos Amable Bermeo Flores, bermeoa@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.decanosalud', 'El decano de la facultad de Salud, es el Dr. Santos Amable Bermeo Flores, bermeoa@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.decanosalud', 'El Dr. Santos Amable Bermeo Flores, es el decano de la facultad de Salud Humana, su correo es: bermeoa@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.decanosalud', 'El Dr. Santos Amable Bermeo Flores, bermeoa@unl.edu.ec');
  
  manager.addAnswer('es', 'pregunta.decanoadis', 'El director de la unidad a distancia, es el Dr. Milton Eduardo Mejía Balcázar, milton.mejia@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.decanoadis', 'El decano de la unidad a distancia, es el Dr. Milton Eduardo Mejía Balcázar, milton.mejia@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.decanoadis', 'El Dr. Milton Eduardo Mejía Balcázar, es el director de la unidad a distancia, su correo es: milton.mejia@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.decanoadis', 'El Dr. Milton Eduardo Mejía Balcázar, milton.mejia@unl.edu.ec');
  
  manager.addAnswer('es', 'pregunta.decanosis', 'El decano de la facultad de Energía, las Indrustrias y los recursos naturales no renovables, es el Ing. Jorge Michael Valarezo Riofrío, michael.valarezo.r@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.decanosis', 'El decano de la facultad de Energía, es el Ing. Jorge Michael Valarezo Riofrío, michael.valarezo.r@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.decanosis', 'El Ing. Jorge Michael Valarezo Riofrío, es el decano de la facultad de Energía, su correo es: michael.valarezo.r@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.decanosis', 'El Ing. Jorge Michael Valarezo Riofrío, michael.valarezo.r@unl.edu.ec');
  
  manager.addAnswer('es', 'pregunta.directorsis', 'El director de la carrera de Ingeniería en Ciencias de la Computación y Sistemas, es el Ing. Pablo Fernando Ordóñez Ordóñez, pfordonez@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.directorsis', 'El director de la carrera de Ciencias de la Computación, es el Ing. Pablo Fernando Ordóñez Ordóñez, pfordonez@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.directorsis', 'El director de la carrera de Ingeniería en Sistemas, es el Ing. Pablo Fernando Ordóñez Ordóñez, pfordonez@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.directorsis', 'El Ing. Pablo Fernando Ordóñez Ordóñez, es el director de la carrera de Computación y Sistemas, su correo es: pfordonez@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.directorsis', 'El Ing. Pablo Fernando Ordóñez Ordóñez pfordonez@unl.edu.ec');
  
  manager.addAnswer('es', 'pregunta.directorgeo', 'El director de la carrera de Ingeniería en Geología ambiental y Ordenamiento territorial, es el Ing. Julio Eduardo Romero Sigcho, julio.romero@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.directorgeo', 'El director de la carrera de Geología ambiental y Ordenamiento territorial, es el Ing. Julio Eduardo Romero Sigcho, julio.romero@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.directorgeo', 'El director de la carrera de Geología, es el Ing. Julio Eduardo Romero Sigcho, julio.romero@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.directorgeo', 'El Ing. Julio Eduardo Romero Sigcho, es el director de la carrera de Geología ambiental y Ordenamiento territorial, su correo es: julio.romero@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.directorgeo', 'El Ing. Julio Eduardo Romero Sigcho, julio.romero@unl.edu.ec');
  
  manager.addAnswer('es', 'pregunta.directormeca', 'El director de la carrera de Electromecánica, es el Ing. Leonel Francisco Aleaga Loaiza, francisco.aleaga@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.directormeca', 'El director de Electromecánica, es el Ing. Leonel Francisco Aleaga Loaiza, francisco.aleaga@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.directormeca', 'El director es el Ing. Leonel Francisco Aleaga Loaiza, francisco.aleaga@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.directormeca', 'El Ing. Leonel Francisco Aleaga Loaiza, es el director de la carrera de Electromecánica, su correo es: francisco.aleaga@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.directormeca', 'El Ing. Leonel Francisco Aleaga Loaiza, francisco.aleaga@unl.edu.ec');
  
  manager.addAnswer('es', 'pregunta.directorelec', 'El director de la carrera de Electrónica y Telecomunicaciónes, es el Ing. Paulo Alberto Samaniego Rojas, pasamaniego@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.directorelec', 'El director de Electrónica y Telecomunicaciónes, es el Ing. Paulo Alberto Samaniego Rojas, pasamaniego@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.directorelec', 'El director de Electrónica es el Ing. Paulo Alberto Samaniego Rojas, pasamaniego@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.directorelec', 'El Ing. Paulo Alberto Samaniego Rojas, es el director de la carrera de Electrónica y Telecomunicaciónes, su correo es pasamaniego@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.directorelec', 'El Ing. Paulo Alberto Samaniego Rojas, pasamaniego@unl.edu.ec');
  
  manager.addAnswer('es', 'pregunta.directorauto', 'El director de la carrera de Mecánica Automotriz, es el Ing. Jairo Darío Castillo Calderón, jdcastilloc@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.directorauto', 'El director de la carrera de Mecánica es el Ing. Jairo Darío Castillo Calderón, jdcastilloc@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.directorauto', 'El Ing. Jairo Darío Castillo Calderón, es el director de la carrera de Mecánica Automotriz, su correo es: jdcastilloc@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.directorauto', 'El Ing. Jairo Darío Castillo Calderón, jdcastilloc@unl.edu.ec');
  
  manager.addAnswer('es', 'pregunta.rector', 'El director de la carrera de Mecánica Automotriz, es el Ing. Jairo Darío Castillo Calderón, jdcastilloc@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.rector', 'El director de la carrera de Mecánica es el Ing. Jairo Darío Castillo Calderón, jdcastilloc@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.rector', 'El Ing. Jairo Darío Castillo Calderón, es el director de la carrera de Mecánica Automotriz, su correo es: jdcastilloc@unl.edu.ec');
  manager.addAnswer('es', 'pregunta.rector', 'El Ing. Jairo Darío Castillo Calderón, jdcastilloc@unl.edu.ec');
  
  manager.addAnswer('es', 'greetings.bye', 'hablamos luego');
  manager.addAnswer('es', 'greetings.bye', 'chao, hablamos luego');
  manager.addAnswer('es', 'greetings.bye', 'hasta luego!');
  manager.addAnswer('es', 'greetings.tardes', 'Buenas tardes! :3');
  manager.addAnswer('es', 'greetings.tardes', 'Hola, buenas tardes!');
  manager.addAnswer('es', 'greetings.tardes', 'buenas tardes!');
  manager.addAnswer('es', 'greetings.noches', 'Buenas noches! :3');
  manager.addAnswer('es', 'greetings.noches', 'Hola, buenas noches!');
  manager.addAnswer('es', 'greetings.noches', 'buenas noches!');
  manager.addAnswer('es', 'greetings.hello', 'Hola!');
  manager.addAnswer('es', 'greetings.hello', 'Saludos!');
  manager.save();
    await manager.train(); 
      const response = await manager.process('es', req.body.entrada); 
      console.log(response);   
      console.log(response.answer);  
      console.log(response.answer);    
    res.render("index", {
    title: "Asistente Universitario says",
    response:response,
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

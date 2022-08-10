var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express(); 
//NLP --------
const { NlpManager } = require("node-nlp");

const manager = new NlpManager({ languages: ["es"], forceNER: true });
// Adds the utterances and intents for the NLP
manager.addDocument(
  "es",
  "quién es el director de la carrera ingeniería en sistemas?",
  "pregunta.directorsis"
);
manager.addDocument(
  "es",
  "quién es el director de la carrera en computación?",
  "pregunta.directorsis"
);
manager.addDocument(
  "es",
  "director de la carrera en computación?",
  "pregunta.directorsis"
);

manager.addDocument(
  "es",
  "quién es el director de la carrera ingeniería en Geología Ambiental y Ordenamiento Territorial?",
  "pregunta.directorgeo"
);
manager.addDocument(
  "es",
  "quién es el director de la carrera Geología Ambiental?",
  "pregunta.directorgeo"
);
manager.addDocument(
  "es",
  "director de la carrera de Geología?",
  "pregunta.directorgeo"
);
manager.addDocument("es", "director de Geología?", "pregunta.directorgeo");

manager.addDocument(
  "es",
  "quién es el director de la carrera de Electromecánica?",
  "pregunta.directormeca"
);
manager.addDocument(
  "es",
  "quién es el director de Electromecánica?",
  "pregunta.directormeca"
);
manager.addDocument(
  "es",
  "director de la carrera de Electromecánica?",
  "pregunta.directormeca"
);

manager.addDocument(
  "es",
  "quién es el director de la carrera de Electronica y Telecominicaciónes?",
  "pregunta.directorelec"
);
manager.addDocument(
  "es",
  "quién es el director de la carrera de Electronica?",
  "pregunta.directorelec"
);
manager.addDocument(
  "es",
  "director de la carrera de Electronica?",
  "pregunta.directorelec"
);

manager.addDocument(
  "es",
  "quién es el director de la carrera Mecánica Automotriz?",
  "pregunta.directorauto"
);
manager.addDocument(
  "es",
  "quién es el director de la carrera de Mecánica?",
  "pregunta.directorauto"
);
manager.addDocument(
  "es",
  "director de la carrera de Mecánica?",
  "pregunta.directorauto"
);

manager.addDocument(
  "es",
  "quién es el decano de la facultad de la educación, el arte y la comunicación?",
  "pregunta.decanoedu"
);
manager.addDocument(
  "es",
  "quién es el decano de la educación, el arte y la comunicación?",
  "pregunta.decanoedu"
);
manager.addDocument(
  "es",
  "DECANO DE LA FACULTAD DE LA EDUCACIÓN, EL ARTE Y LA COMUNICACIÓN?",
  "pregunta.decanoedu"
);
manager.addDocument(
  "es",
  "DECANO DE LA FACULTAD DE LA EDUCACIÓN?",
  "pregunta.decanoedu"
);
manager.addDocument(
  "es",
  "quiés es el DECANO DE LA FACULTAD DE LA Educación?",
  "pregunta.decanoedu"
);

manager.addDocument(
  "es",
  "quién es el decano de la facultad de Agropecuaria?",
  "pregunta.decanoagro"
);
manager.addDocument(
  "es",
  "quién es el decano de AGROPECUARIA?",
  "pregunta.decanoagro"
);
manager.addDocument(
  "es",
  "DECANO DE LA FACULTAD AGROPECUARIA  Y DE RECURSOS NATURALES RENOVABLES?",
  "pregunta.decanoagro"
);
manager.addDocument(
  "es",
  "DECANO DE LA FACULTAD DE AGROPECUARIA?",
  "pregunta.decanoagro"
);
manager.addDocument(
  "es",
  "quiés es el DECANO DE LA FACULTAD DE AGROPECUARIA Y DE RECURSOS NATURALES RENOVABLES?",
  "pregunta.decanoagro"
);

manager.addDocument(
  "es",
  "quién es el decano de la facultad Jurídica, Social Y Administrativa?",
  "pregunta.decanojuri"
);
manager.addDocument(
  "es",
  "quién es el decano de energía?",
  "pregunta.decanojuri"
);
manager.addDocument(
  "es",
  "DECANO DE LA FACULTAD JURÍDICA, SOCIAL Y ADMINISTRATIVA?",
  "pregunta.decanojuri"
);
manager.addDocument(
  "es",
  "DECANO DE LA FACULTAD JURÍDICA?",
  "pregunta.decanojuri"
);
manager.addDocument(
  "es",
  "quiés es el DECANO DE LA FACULTAD JURÍDICA, SOCIAL Y ADMINISTRATIVA?",
  "pregunta.decanojuri"
);

manager.addDocument(
  "es",
  "quién es el decano de la facultad de Salud Humana?",
  "pregunta.decanosalud"
);
manager.addDocument(
  "es",
  "quién es el decano de Salud Humana?",
  "pregunta.decanosalud"
);
manager.addDocument(
  "es",
  "DECANO DE LA FACULTAD DE LA Salud Humana?",
  "pregunta.decanosalud"
);
manager.addDocument(
  "es",
  "quiés es el DECANO DE LA FACULTAD DE LA Salud Humana?",
  "pregunta.decanosalud"
);

manager.addDocument(
  "es",
  "quién es el DIRECTOR DE LA UNIDAD DE EDUCACIÓN A DISTANCIA?",
  "pregunta.decanoadis"
);
manager.addDocument(
  "es",
  "quién es el decano de LA UNIDAD DE EDUCACIÓN A DISTANCIA?",
  "pregunta.decanoadis"
);
manager.addDocument(
  "es",
  "Director de LA UNIDAD DE EDUCACIÓN A DISTANCIA?",
  "pregunta.decanoadis"
);
manager.addDocument(
  "es",
  "quiés es el Director de la Unidad de Educación a Distancia?",
  "pregunta.decanoadis"
);

manager.addDocument(
  "es",
  "quién es el decano de la facultad de energía?",
  "pregunta.decanosis"
);
manager.addDocument(
  "es",
  "quién es el decano de energía?",
  "pregunta.decanosis"
);
manager.addDocument(
  "es",
  "DECANO DE LA FACULTAD DE LA ENERGÍA, LAS INDUSTRIAS Y LOS RECURSOS NATURALES NO RENOVABLES?",
  "pregunta.decanosis"
);
manager.addDocument(
  "es",
  "DECANO DE LA FACULTAD DE LA ENERGÍA?",
  "pregunta.decanosis"
);
manager.addDocument(
  "es",
  "quiés es el DECANO DE LA FACULTAD DE LA ENERGÍA?",
  "pregunta.decanosis"
);

manager.addDocument("es", "hasta otra!", "greetings.bye");
manager.addDocument("es", "ok, te veo luego", "greetings.bye");
manager.addDocument("es", "chao, te veo luego", "greetings.bye");
manager.addDocument("es", "hasta luego!", "greetings.bye");
manager.addDocument("es", "te veo luego", "greetings.bye");
manager.addDocument("es", "me tengo que ir", "greetings.bye");
manager.addDocument("es", "hola", "greetings.hello");
manager.addDocument("es", "que tal?", "greetings.hello");
manager.addDocument("es", "como vás?", "greetings.hello");

manager.addDocument("es", "Cuándo inicia el ciclo?", "pregunta.iniciclo");
manager.addDocument(
  "es",
  "Cuándo empieza el siguiente semestre?",
  "pregunta.iniciclo"
);
manager.addDocument("es", "Cuándo inician clases?", "pregunta.iniciclo");
manager.addDocument(
  "es",
  "Cuándo empiezan las clases en la universidad?",
  "pregunta.iniciclo"
);

manager.addDocument(
  "es",
  "Qué materias reciben en primer ciclo?",
  "pregunta.materiasprimer"
);
manager.addDocument(
  "es",
  "Qué materias se imparten en primer ciclo?",
  "pregunta.materiasprimer"
);
manager.addDocument(
  "es",
  "Qué materias dan en primer ciclo?",
  "pregunta.materiasprimer"
);
manager.addDocument(
  "es",
  "Qué materias dan en primer ciclo?",
  "pregunta.materiasprimer"
);

manager.addDocument(
  "es",
  "Qué materias reciben en segundo ciclo?",
  "pregunta.materiasseg"
);
manager.addDocument(
  "es",
  "Qué materias se imparten en segundo ciclo?",
  "pregunta.materiasseg"
);
manager.addDocument(
  "es",
  "Qué materias dan en segundo ciclo?",
  "pregunta.materiasseg"
);

manager.addDocument(
  "es",
  "Qué materias reciben en tercer ciclo?",
  "pregunta.materiastercer"
);
manager.addDocument(
  "es",
  "Qué materias se imparten en tercer ciclo?",
  "pregunta.materiastercer"
);
manager.addDocument(
  "es",
  "Qué materias dan en tercer ciclo?",
  "pregunta.materiastercer"
);

manager.addDocument(
  "es",
  "Qué materias reciben en cuarto ciclo?",
  "pregunta.materiascuar"
);
manager.addDocument(
  "es",
  "Qué materias se imparten en cuarto ciclo?",
  "pregunta.materiascuar"
);
manager.addDocument(
  "es",
  "Qué materias dan en cuarto ciclo?",
  "pregunta.materiascuar"
);

manager.addDocument(
  "es",
  "Qué materias reciben en quinto ciclo?",
  "pregunta.materiasquin"
);
manager.addDocument(
  "es",
  "Qué materias se imparten en quinto ciclo?",
  "pregunta.materiasquin"
);
manager.addDocument(
  "es",
  "Qué materias dan en quinto ciclo?",
  "pregunta.materiasquin"
);

manager.addDocument(
  "es",
  "Qué materias reciben en sexto ciclo?",
  "pregunta.materiassext"
);
manager.addDocument(
  "es",
  "Qué materias se imparten en sexto ciclo?",
  "pregunta.materiassext"
);
manager.addDocument(
  "es",
  "Qué materias dan en sexto ciclo?",
  "pregunta.materiassext"
);

manager.addDocument(
  "es",
  "Qué especialidades tiene la carrera?",
  "pregunta.especialidades"
);
manager.addDocument(
  "es",
  "Qué especialidades puedo escoger en septimo ciclo?",
  "pregunta.especialidades"
);
manager.addDocument(
  "es",
  "Cuáles son las especialidades de la carrera?",
  "pregunta.especialidades"
);

manager.addDocument(
  "es",
  "Qué especialidades tiene la carrera?",
  "pregunta.especialidades"
);
manager.addDocument(
  "es",
  "Qué especialidades puedo escoger en septimo ciclo?",
  "pregunta.especialidades"
);
manager.addDocument(
  "es",
  "Cuáles son las especialidades de la carrera?",
  "pregunta.especialidades"
);

manager.addDocument(
  "es",
  "Cuántos ciclos son en la carrera?",
  "pregunta.cantciclos"
);
manager.addDocument(
  "es",
  "Qué tiempo de duración tiene la carrera?",
  "pregunta.cantciclos"
);
manager.addDocument(
  "es",
  "Cuántos ciclos tiene la carrera?",
  "pregunta.cantciclos"
);

manager.addDocument(
  "es",
  "Qué ciclo es el más dificil de la carrera?",
  "pregunta.ciclohard"
);
manager.addDocument(
  "es",
  "Cuál es el ciclo más complicado de la carrera?",
  "pregunta.ciclohard"
);
manager.addDocument(
  "es",
  "Cuál es el ciclo con mayor dificultad de la carrera?",
  "pregunta.ciclohard"
);

manager.addDocument(
  "es",
  "Qué puntaje necesito para ingresar a la carrera?",
  "pregunta.point"
);
manager.addDocument(
  "es",
  "Cuántos puntos necesito para la carrera?",
  "pregunta.point"
);

manager.addDocument(
  "es",
  "Qué necesito para ingresar a estudiar?",
  "pregunta.reqing"
);
manager.addDocument(
  "es",
  "Cuáles son los requisitos para estudiar?",
  "pregunta.reqing"
);

manager.addDocument(
  "es",
  "Qué horarios tiene la carrera?",
  "pregunta.jor"
);
manager.addDocument(
  "es",
  "Qué jornada tiene la carrera?",
  "pregunta.jor"
);

manager.addDocument("es", "En dónde esta ubicada la carrera?", "pregunta.ubi");
manager.addDocument("es", "En que parte se encuentra la carrera?", "pregunta.ubi");

manager.addDocument("es", "Cuál es el correo de secretaría de la carrera?", "pregunta.secre");

manager.addDocument("es", "És lo mismo Computacion y Sistemas?", "pregunta.pregu");

manager.addDocument(
  "es",
  "Cuál es el docente más chevere de la carrera?",
  "pregunta.docchido"
);

// Train also the NLG
manager.addAnswer(
  "es",
  "pregunta.docchido",
  "Sin duda, la Ingeniera Genoveva Suing :D"
);

manager.addAnswer(
  "es",
  "pregunta.pregu",
  "A grandes rasgos, un ingeniero en Sistemas se enfoca más en la programación de redes, así como la implementación y optimización de hardware; mientras que un ingeniero en Computación e Informática desarrolla productos para optimizar procesos computacionales y se encarga del correcto procesamiento de los datos. Podras encontrar más detalles acerca de la diferencia en la siguiente pagina https://advance.unab.cl/eventos/diferencias-de-un-ingeniero-en-sistemas-y-uno-en-computacion/#:~:text=A%20grandes%20rasgos%2C%20un%20ingeniero,correcto%20procesamiento%20de%20los%20datos."
);

manager.addAnswer(
  "es",
  "pregunta.secre",
  "El correo de secretaría es secretaria.cis@unl.edu.ec"
);

manager.addAnswer(
  "es",
  "pregunta.ubi",
  "La carrera pertenece a la Facultad de Energía, Las industrias y los recursos naturales no renovables, la cual esta ubicada en https://goo.gl/maps/Mw5E6GEWbXrMFY5H8."
);

manager.addAnswer(
  "es",
  "pregunta.jor",
  "El horario de clases de la carrera es Diurno y empieza a las 7:30am y finaliza a la 1:30pm."
);

manager.addAnswer(
  "es",
  "pregunta.reqing",
  "Para ingresar a la Universidad Nacional de Loja, primeramente debes rendir el examen de acceso a la educación superior de la Senescyt, obtener un puntaje y postular en la carrera que deseas formarte presencial o a distancia. Revisa la oferta académica aquí: https://unl.edu.ec/oferta_academica."
);

manager.addAnswer(
  "es",
  "pregunta.point",
  "La carrera de ‘Computación’ se oferta con un puntaje referencial de: 807 puntos."
);

manager.addAnswer("es", "pregunta.ciclohard", "6to Ciclo.");

manager.addAnswer(
  "es",
  "pregunta.cantciclos",
  "La carrera de Ingeniería en Computación consta de 9 ciclos."
);
manager.addAnswer("es", "pregunta.cantciclos", "9 ciclos.");
manager.addAnswer(
  "es",
  "pregunta.cantciclos",
  "La carrera tiene una duración de 9 ciclos"
);

manager.addAnswer(
  "es",
  "pregunta.especialidades",
  "Las especialidades que existen en la carrera son: Sistemas Inteligentes, Computación Aplicada e Ingeniería del Software."
);
manager.addAnswer(
  "es",
  "pregunta.especialidades",
  "Las especialidades para el septimo ciclo son: Sistemas Inteligentes, Computación Aplicada e Ingeniería del Software."
);
manager.addAnswer(
  "es",
  "pregunta.especialidades",
  "Las especialidades que ofrece la carrera son: Sistemas Inteligentes, Computación Aplicada e Ingeniería del Software."
);

manager.addAnswer(
  "es",
  "pregunta.materiassext",
  "En el sexto ciclo de la carrera de computación hay: Teoría de Autómatas y Computabilidad Avanzada, Sistemas Distribuidos, Procesos de Software, Computación en la nube y Gestión de Redes y Comunicaciones."
);
manager.addAnswer(
  "es",
  "pregunta.materiassext",
  "Teoría de Autómatas y Computabilidad Avanzada, Sistemas Distribuidos, Procesos de Software, Computación en la nube y Gestión de Redes y Comunicaciones."
);
manager.addAnswer(
  "es",
  "pregunta.materiassext",
  "Las materias que se imparten en el sexto ciclo son: Teoría de Autómatas y Computabilidad Avanzada, Sistemas Distribuidos, Procesos de Software, Computación en la nube y Gestión de Redes y Comunicaciones."
);

manager.addAnswer(
  "es",
  "pregunta.materiasquin",
  "En el quinto ciclo de la carrera de computación hay: Sistemas Digitales, Análisis Numérico, Desarrollo Basado en Plataformas, Simulación y Fundamentos de Redes de Comunicaiones."
);
manager.addAnswer(
  "es",
  "pregunta.materiasquin",
  "Sistemas Digitales, Análisis Numérico, Desarrollo Basado en Plataformas, Simulación y Fundamentos de Redes de Comunicaiones."
);
manager.addAnswer(
  "es",
  "pregunta.materiasquin",
  "Las materias que se imparten en el quinto ciclo son: Sistemas Digitales, Análisis Numérico, Desarrollo Basado en Plataformas, Simulación y Fundamentos de Redes de Comunicaiones."
);

manager.addAnswer(
  "es",
  "pregunta.materiascuar",
  "En el cuarto ciclo de la carrera de computación hay: Complejidad Computacional, Ecuaciones Diferenciales, Diseño de Software, Sistemas Operativos y Metodología de la Investigación en Computación."
);
manager.addAnswer(
  "es",
  "pregunta.materiascuar",
  "Complejidad Computacional, Ecuaciones Diferenciales, Diseño de Software, Sistemas Operativos y Metodología de la Investigación en Computación."
);
manager.addAnswer(
  "es",
  "pregunta.materiascuar",
  "Las materias que se imparten en el cuarto ciclo son: Complejidad Computacional, Ecuaciones Diferenciales, Diseño de Software, Sistemas Operativos y Metodología de la Investigación en Computación."
);

manager.addAnswer(
  "es",
  "pregunta.materiastercer",
  "En el tercer ciclo de la carrera de computación hay: Estructura de Datos, Requisistos de Software, Estadística Analítica, Arquitectura de Ordenadores y Base de Datos."
);
manager.addAnswer(
  "es",
  "pregunta.materiastercer",
  "Estructura de Datos, Requisistos de Software, Estadística Analítica, Arquitectura de Ordenadores y Base de Datos."
);
manager.addAnswer(
  "es",
  "pregunta.materiastercer",
  "Las materias que se imparten en el tercer ciclo son: Estructura de Datos, Requisistos de Software, Estadística Analítica, Arquitectura de Ordenadores y Base de Datos."
);

manager.addAnswer(
  "es",
  "pregunta.materiasseg",
  "En el segundo ciclo de la carrera de computación hay: Diseño de Circuitos, Análisis Matemático, Teoría de la Distribución y la Probabilidad, Programación Orientada a Objetos y Emprendimiento e innovación tecnológica."
);
manager.addAnswer(
  "es",
  "pregunta.materiasseg",
  "Diseño de Circuitos, Análisis Matemático, Teoría de la Distribución y la Probabilidad, Programación Orientada a Objetos y Emprendimiento e innovación tecnológica."
);
manager.addAnswer(
  "es",
  "pregunta.materiasseg",
  "Las materias que se imparten en segundo ciclo son: Diseño de Circuitos, Análisis Matemático, Teoría de la Distribución y la Probabilidad, Programación Orientada a Objetos y Emprendimiento e innovación tecnológica."
);

manager.addAnswer(
  "es",
  "pregunta.materiasprimer",
  "En el primer ciclo de la carrera de computación hay: Electricidad, Matemáticas Discretas, Algebra Lineal, Teoria de la Programación y Comunicación y Redaccion Técnica."
);
manager.addAnswer(
  "es",
  "pregunta.materiasprimer",
  "Electricidad, Matemáticas Discretas, Algebra Lineal, Teoria de la Programación y Comunicación y Redaccion Técnica."
);
manager.addAnswer(
  "es",
  "pregunta.materiasprimer",
  "Las materias que se imparten en primer ciclo son: Electricidad, Matemáticas Discretas, Algebra Lineal, Teoria de la Programación y Comunicación y Redaccion Técnica."
);

manager.addAnswer(
  "es",
  "pregunta.iniciclo",
  "Aun no se ha definido la fecha de inicio de clases del siguiente periodo académico."
);
manager.addAnswer(
  "es",
  "pregunta.iniciclo",
  "No me ha confirmado la fecha aún."
);
manager.addAnswer(
  "es",
  "pregunta.iniciclo",
  "Lo siento aun no conocemos la fecha de inicio de clases."
);
manager.addAnswer(
  "es",
  "pregunta.iniciclo",
  "Por el momento no se ha confirmado la fecha de inicio de clases."
);

manager.addAnswer(
  "es",
  "pregunta.decanoedu",
  "El decano de la facultad de la Educación, el Arte y la Comunicación, es el Dr. Yovany Salazar Estrada, Ph.D., yovany.salazar@unl.edu.ecc"
);
manager.addAnswer(
  "es",
  "pregunta.decanoedu",
  "El decano de la facultad de la Educación, el Arte y la Comunicación, es el Dr. Yovany Salazar Estrada, Ph.D., yovany.salazar@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.decanoedu",
  "El Dr. Yovany Salazar Estrada, Ph.D., es el decano de la facultad de la Educación, el Arte y la Comunicación, su correo es: yovany.salazar@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.decanoedu",
  "El Dr. Yovany Salazar Estrada, Ph.D., yovany.salazar@unl.edu.ec"
);

manager.addAnswer(
  "es",
  "pregunta.decanoagro",
  "El decano de la facultad de Agropecuaria y de Recursos Naturales Renovables, es el Msc. Jorky Roosevelt Armijos Tituana, jorky.armijos@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.decanoagro",
  "El decano de la facultad de Agropecuaria, es el Msc. Jorky Roosevelt Armijos Tituana, jorky.armijos@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.decanoagro",
  "El Msc. Jorky Roosevelt Armijos Tituana, es el decano de la facultad de Agropecuaria, su correo es: jorky.armijos@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.decanoagro",
  "El Msc. Jorky Roosevelt Armijos Tituana, jorky.armijos@unl.edu.ec"
);

manager.addAnswer(
  "es",
  "pregunta.decanojuri",
  "La decano de la facultad Jurídica, Social y Administrativa, es la Dra. Elvia Maricela Zhapa Amay, elvia.zhapa@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.decanojuri",
  "La decano de la facultad Jurídica, es la Dra. Elvia Maricela Zhapa Amay, elvia.zhapa@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.decanojuri",
  "La Dra. Elvia Maricela Zhapa Amay, es la decano de la facultad Jurídica, Social y Administrativa, su correo es: elvia.zhapa@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.decanojuri",
  "La Dra. Elvia Maricela Zhapa Amay, elvia.zhapa@unl.edu.ec"
);

manager.addAnswer(
  "es",
  "pregunta.decanosalud",
  "El decano de la facultad de la Salud Humana, es el Dr. Santos Amable Bermeo Flores, bermeoa@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.decanosalud",
  "El decano de la facultad de Salud, es el Dr. Santos Amable Bermeo Flores, bermeoa@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.decanosalud",
  "El Dr. Santos Amable Bermeo Flores, es el decano de la facultad de Salud Humana, su correo es: bermeoa@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.decanosalud",
  "El Dr. Santos Amable Bermeo Flores, bermeoa@unl.edu.ec"
);

manager.addAnswer(
  "es",
  "pregunta.decanoadis",
  "El director de la unidad a distancia, es el Dr. Milton Eduardo Mejía Balcázar, milton.mejia@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.decanoadis",
  "El decano de la unidad a distancia, es el Dr. Milton Eduardo Mejía Balcázar, milton.mejia@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.decanoadis",
  "El Dr. Milton Eduardo Mejía Balcázar, es el director de la unidad a distancia, su correo es: milton.mejia@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.decanoadis",
  "El Dr. Milton Eduardo Mejía Balcázar, milton.mejia@unl.edu.ec"
);

manager.addAnswer(
  "es",
  "pregunta.decanosis",
  "El decano de la facultad de Energía, las Indrustrias y los recursos naturales no renovables, es el Ing. Jorge Michael Valarezo Riofrío, michael.valarezo.r@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.decanosis",
  "El decano de la facultad de Energía, es el Ing. Jorge Michael Valarezo Riofrío, michael.valarezo.r@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.decanosis",
  "El Ing. Jorge Michael Valarezo Riofrío, es el decano de la facultad de Energía, su correo es: michael.valarezo.r@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.decanosis",
  "El Ing. Jorge Michael Valarezo Riofrío, michael.valarezo.r@unl.edu.ec"
);

manager.addAnswer(
  "es",
  "pregunta.directorsis",
  "El director de la carrera de Ingeniería en Ciencias de la Computación y Sistemas, es el Ing. Pablo Fernando Ordóñez Ordóñez, pfordonez@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.directorsis",
  "El director de la carrera de Ciencias de la Computación, es el Ing. Pablo Fernando Ordóñez Ordóñez, pfordonez@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.directorsis",
  "El director de la carrera de Ingeniería en Sistemas, es el Ing. Pablo Fernando Ordóñez Ordóñez, pfordonez@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.directorsis",
  "El Ing. Pablo Fernando Ordóñez Ordóñez, es el director de la carrera de Computación y Sistemas, su correo es: pfordonez@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.directorsis",
  "El Ing. Pablo Fernando Ordóñez Ordóñez pfordonez@unl.edu.ec"
);

manager.addAnswer(
  "es",
  "pregunta.directorgeo",
  "El director de la carrera de Ingeniería en Geología ambiental y Ordenamiento territorial, es el Ing. Julio Eduardo Romero Sigcho, julio.romero@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.directorgeo",
  "El director de la carrera de Geología ambiental y Ordenamiento territorial, es el Ing. Julio Eduardo Romero Sigcho, julio.romero@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.directorgeo",
  "El director de la carrera de Geología, es el Ing. Julio Eduardo Romero Sigcho, julio.romero@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.directorgeo",
  "El Ing. Julio Eduardo Romero Sigcho, es el director de la carrera de Geología ambiental y Ordenamiento territorial, su correo es: julio.romero@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.directorgeo",
  "El Ing. Julio Eduardo Romero Sigcho, julio.romero@unl.edu.ec"
);

manager.addAnswer(
  "es",
  "pregunta.directormeca",
  "El director de la carrera de Electromecánica, es el Ing. Leonel Francisco Aleaga Loaiza, francisco.aleaga@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.directormeca",
  "El director de Electromecánica, es el Ing. Leonel Francisco Aleaga Loaiza, francisco.aleaga@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.directormeca",
  "El director es el Ing. Leonel Francisco Aleaga Loaiza, francisco.aleaga@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.directormeca",
  "El Ing. Leonel Francisco Aleaga Loaiza, es el director de la carrera de Electromecánica, su correo es: francisco.aleaga@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.directormeca",
  "El Ing. Leonel Francisco Aleaga Loaiza, francisco.aleaga@unl.edu.ec"
);

manager.addAnswer(
  "es",
  "pregunta.directorelec",
  "El director de la carrera de Electrónica y Telecomunicaciónes, es el Ing. Paulo Alberto Samaniego Rojas, pasamaniego@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.directorelec",
  "El director de Electrónica y Telecomunicaciónes, es el Ing. Paulo Alberto Samaniego Rojas, pasamaniego@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.directorelec",
  "El director de Electrónica es el Ing. Paulo Alberto Samaniego Rojas, pasamaniego@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.directorelec",
  "El Ing. Paulo Alberto Samaniego Rojas, es el director de la carrera de Electrónica y Telecomunicaciónes, su correo es pasamaniego@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.directorelec",
  "El Ing. Paulo Alberto Samaniego Rojas, pasamaniego@unl.edu.ec"
);

manager.addAnswer(
  "es",
  "pregunta.directorauto",
  "El director de la carrera de Mecánica Automotriz, es el Ing. Jairo Darío Castillo Calderón, jdcastilloc@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.directorauto",
  "El director de la carrera de Mecánica es el Ing. Jairo Darío Castillo Calderón, jdcastilloc@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.directorauto",
  "El Ing. Jairo Darío Castillo Calderón, es el director de la carrera de Mecánica Automotriz, su correo es: jdcastilloc@unl.edu.ec"
);
manager.addAnswer(
  "es",
  "pregunta.directorauto",
  "El Ing. Jairo Darío Castillo Calderón, jdcastilloc@unl.edu.ec"
);

manager.addAnswer("es", "greetings.bye", "hablamos luego");
manager.addAnswer("es", "greetings.bye", "chao, hablamos luego");
manager.addAnswer("es", "greetings.bye", "hasta luego!");
manager.addAnswer("es", "greetings.hello", "Hola!");
manager.addAnswer("es", "greetings.hello", "Saludos!");

// Train and save the model.
(async () => {
  await manager.train();
  manager.save();
  const response = await manager.process("es", "director de geo?");
  console.log(response);
})(); 
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

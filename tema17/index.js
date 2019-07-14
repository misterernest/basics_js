// condicional switch case
// opción alterna al if
let signo = prompt("¿Cuál es tu signo?");
console.log(signo);

switch (signo) {
  case "acuario":
    console.log(
      "Sabemos que este es uno de los signos zodiacales más independientes y desconfiados que hay en todo el zodiaco y por eso el mejor consejo para él se inclina hacia la necesidad de aprender a confiar más en las demás personas. Igualmente se le aconseja que aprenda a tomar decisiones junto a otros, compartir en este aspecto le ayudará a liberarse de tensiones y cargas innecesarias."
    );
    break;

  case "tauro":
    console.log(
      "Se reconoce a este signo como uno de los más estrictos y conservadores. Por ello no es de extrañar que se le aconseje  ser más flexible. Abrirse a nuevas ideas y modos de hacer las cosas mejorará exponencialmente sus perspectivas."
    );
    break;

  case "geminis":
    console.log(
      "Este signo malgasta mucho su energía en sus indecisiones. Por eso se le recomienda aprender a ser más centrado y de esta forma pueda tomar decisiones más fácilmente. Abarcar menos le ayudará a dirigir mejor sus esfuerzos."
    );
    break;

  case "cancer":
    console.log(
      "Los cancerianos suelen ser muy soñadores y se dejan llevar mucho por sus emociones. Por ello es esencial que aprendan a ser más objetivos y que racionalicen más sus acciones."
    );
    break;

  case "leo":
    console.log(
      "El hecho de sentirse el centro del mundo hace que no escuche a quienes están a su alrededor. Debe aprender a hacerlo, ya que las opiniones y consejos de los demás pueden serle de gran ayuda."
    );
    break;

  case "virgo":
    console.log(
      "Este signo es muy perfeccionista y exigente tanto consigo mismo como con los otros. Por ello se le recomienda aprender a ser más tolerante y dejar un poco la crítica de lado. "
    );
    break;

  case "libra":
    console.log(
      "Suele sentir mucho temor a ser rechazado y esto hace que evite dar sus puntos de vista y opiniones. Deje dejar estos miedos a un lado, atreviéndose a expresar lo que siente, piensa y cree le hará ganar autenticidad."
    );
    break;

  case "escorpio":
    console.log(
      "Su alto grado de independencia así como el hecho de ser tan alejado de los demás hace necesario que este signo trabaje en acercarse más a los otros. También debería animarse a solicitar ayuda o a aceptarla cuando se le es ofrecida."
    );
    break;

  case "sagitario":
    console.log(
      "Todo sagitariano es un ser muy aventurero e impulsivo y normalmente está mirando hacia todos lados, sin saber muy bien hacia dónde ir. Por eso se aconseja a los nativos de este signo enfocarse en focalizar su mente y esfuerzos en un solo objetivo. Escuchar a los demás también es algo que deben aprender."
    );
    break;

  case "capricornio":
    console.log(
      "Es demasiado conservador y cauteloso. Por ello se aconseja abrirse un poco a los riesgos. Lo desconocido, se trate de situaciones o personas puede traer grandes aprendizajes."
    );
    break;

  case "acuario":
    console.log(
      "Su mente es muy creativa y por ello tienden a diversificar y repartir su energía en muchas actividades a la vez. el consejo para ellos es centrarse en un solo proyecto, para así dar lo mejor de sí y tener el éxito deseado."
    );
    break;

  case "piscis":
    console.log(
      "Dueño de una sensibilidad y solidaridad poco comunes, es frecuente que los piscianos vivan más ocupados en los asuntos ajenos que en los propios. Es necesario que dejen de postergar para comenzar a priorizarse."
    );
    break;

  default:
    console.log("No es un signo zodiacal valido!");

    break;
}

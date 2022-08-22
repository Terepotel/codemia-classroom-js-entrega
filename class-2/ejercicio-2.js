/*let mostrarMensajeSegunEdadIf=92;
    if (mostrarMensajeSegunEdadIf>=18){
        console.log("Bienvenido, puede pasar")
    } else if (mostrarMensajeSegunEdadIf>90){
        console.log("Que edad tan inusual, puede pasar!")
    } else{
        console.log("Ustede no puede pasar")
    }
*/

function mostrarMensajeSegunEdadTernario(edad) {
    edad >= 18
      ? console.log("Bienvenido, puede pasar")
      : edad > 90
      ? console.log("Que edad tan inusual, puede pasar")
      : console.log("usted no puede pasar");
  }
  mostrarMensajeSegunEdadTernario(90);
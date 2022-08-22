function auth(age, acceptedTOS) {
    if (age > 13 && acceptedTOS === true) {
      return true;
    } else if (age > 13 && acceptedTOS === false) {
      return "Tenés que aceptar os términos y condiciones para ingresar";
    } else if (age < 13 && acceptedTOS === true) {
      return "Tenés que ser mayor de 13 para ingresar";
    } else if (age < 13 && acceptedTOS === false) {
      return "Tenés que ser mayor de 13 y aceptar los términos y condiciones para ingresar";
    }
  }
  console.log(auth(15, true));
  console.log(auth(15, false));
  console.log(auth(5, true));
  console.log(auth(5, false));
function horasdDelDiaTernario(hora) {
    console.log(hora >= 21
      ? "Buenas Noches"
      : hora >= 19
      ? "Buenas tardes"
      : hora >= 14
      ? "Buenos medio dia"
      : "Buenos dias"
    )
  }
  horasdDelDiaTernario(22);
  
  /*
  function horasdDelDiaTernario(hora) {
    if(hora>=21){
       console.log("Buenas Noches")
   } else if (hora>=19){
       console.log("Buenos medios dias")
   }else if(hora>=9){
       console.log("Buenos dias")
   }
   horasDelDiaTernario(22);
   */
  
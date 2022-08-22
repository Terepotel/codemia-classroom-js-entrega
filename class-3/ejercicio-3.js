function jaimito(numA, numB) {
    if (numA > 0 && numB > 0) {
      return 1;
    } else if (numA < 0 && numB < 0) {
      return -1;
    } else if (numA > 0 && numB < 0) {
      return 0;
    } else {
      return 0;
    }
  }
  console.log(jaimito(15, 5));
  console.log(jaimito(-1, -5));
  console.log(jaimito(15, -5));
  console.log(jaimito(-15, 5));
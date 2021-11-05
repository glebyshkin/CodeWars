function calculateAge (n, w){
    let r = w - n
    if (r === 1) {
      return "You are " + r + " year old."
    } else if (r > 1){
      return "You are " + r + " years old.";
    } else if (r === 0){
      return "You were born this very year!";
    } else if (r === -1){
      return "You will be born in " + r*(-1) + " year."
    } else (r < -1)
      return "You will be born in " + r*(-1) + " years."
  }

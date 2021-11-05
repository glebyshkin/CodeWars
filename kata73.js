function remove(s){
    while (s && s.slice(-1) == '!') {
  s = s.slice(0,-1);
  }
  return s;


}
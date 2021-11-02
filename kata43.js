function enough(cap, on, wait) {
    let dif = Math.abs((cap - on)-wait)
   return (on + wait < cap) ? 0: dif// your code here
  }

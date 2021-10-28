function duplicateEncode(word) {
    const letterArray = word.toLowerCase().split("");
    let outPutString = [];
    for (i in letterArray) {
      outPutString.push(
        word.toLowerCase().split(letterArray[i]).length - 1 <= 1 ? "(" : ")"
      );
    }
    return outPutString.join("");
  }
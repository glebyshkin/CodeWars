function getAverage(marks){
    var total = 0;
      for(var i = 0; i < marks.length; i++){
        total += marks[i];
      }
      return Math.floor(total / marks.length);
    }
function countSheeps(arrayOfSheep) {
    let sortArray = arrayOfSheep.filter(function(item){
       if (item == true) {
         return item;
       }
    })
    return sortArray.length;
   }
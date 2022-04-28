function countRegNumber(regCount){
  
    var array = regCount.split(',');
    var counter = 0;
    
    for(var i = 0; i < array.length; i++){
      //console.log (array.length)
      var newArray = array[i].trim();
     // counter++;

     if(newArray.startsWith('C')){
        counter++;
       }
    
    if(counter == 0){
      return "There are no registration numbers"
    }

  }
  
  return counter
}

// if(newArray.startsWith('CJ')){
//   counter++;
//   }
  
// if(counter == 0){
//    return "There are no registration numbers for Paarl"
//    }
//    if (counter > 5){
//      return "registration numbers are more than 5 in the string"
//    }

// }
// return counter

// }
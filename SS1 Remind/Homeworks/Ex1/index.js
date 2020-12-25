function adjacentElementsProduct(inputArray) {
     
    let found = -999999999999999999999999999999;
    
    for(let i=0; i < inputArray.length; i++){
      if(inputArray[i]*inputArray[i+1] > product){
       found = inputArray[i]*inputArray[i+1];
      };
    };
   return found;
  };

console.log(adjacentElementsProduct([3, -6, 2, -5, 7, -3]));   
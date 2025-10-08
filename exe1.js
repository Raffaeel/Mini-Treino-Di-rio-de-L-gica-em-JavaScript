
let number= '';
let number1= '';


function numberverification(number,number1){

  if(number===number1){return " o "  + number +"  é igual  " + number1}

   if(number>number1){return "o " + number + " é maior que o " + number1}

  else{return " o " + number  + " é menor que o " +number1}


} ;


console.log(numberverification(5,35));
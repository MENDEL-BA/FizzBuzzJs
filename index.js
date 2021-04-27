function fizzBuzz(number){

if(number === 'undefined' || number === null || typeof(number) !== 'number'){
  console.log("Veuillez donner un parametre valide");
} else {
   if (number % 3 === 0 && number % 2 === 0){
    console.log("Fizz Buzz");
  } else {
    if(number % 2 === 0) {
        console.log("Fizz");
      }  else  if(number % 3 === 0){
         console.log("Buzz");
      } 
  }
}
return number;
}

fizzBuzz(3);
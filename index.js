// function writeCards( namesArray, event ) {
//     let thankYouCards = []
//     for ( let i = 0; i < namesArray.length; i++ ) {
//       thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
//     }
//     return thankYouCards
//   }

//   function countDown( startingNumber ) {
//     while ( startingNumber > 0 ) {
//       console.log( startingNumber );
//       startingNumber -= 1;
//     }
//     console.log( startingNumber );
//   }

// Creates function "writeCards" returns an "array[]" of thank you messages for each name provided to the function
function writeCards(tricks, treats) {
  let thankS = [];
  for (let i = 0; i < tricks.length; i++) {
    thankS[i] = `Thank you, ${tricks[i]}, for the wonderful ${treats} gift!`;
  }
  return thankS;
}

// Logs each number when counting down, starting from the number provided ("-1" = "0" starting point)
function countDown(fromNum) {
  for (let i = fromNum; i > -1; i--) {
    console.log(i); //Invokes console.log once for each number, counting down from the number provided to zero
  }
}

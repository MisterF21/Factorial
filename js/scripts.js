var factorial = function(number) {
  if (number === 0) {
    return 1;
  } else if (number < 0) {
    alert('Please enter a positive number');
  } else {
   return (number * (factorial(number-1)));
  }
};


// var factorial = function(number) {
//   if (number === 0 || number === 1) {
//     return 1; 
//   };
//   var total = number * (number - 1);
//     for (var count = number - 2; count > 1; count--) {
    
//     console.log(count);
//     console.log(total);
//     console.log('=================');

//     total *= count;

//     };
//     console.log(total);
//     return total;
// };


$(document).ready(function() {
  $('form#factorial').submit(function(event) {
    var userInput = parseInt($('input#number').val());
    
  $('p#result').text(factorial(userInput));

  
  event.preventDefault();
  });
});

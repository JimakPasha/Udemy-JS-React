const num = 934775410;

logDigits(num);

function logDigits(num) {

  function dividing(num) {
    let digit;
    
    while(num) {
      digit = num % 10;
      num = Math.floor(num / 10);

      console.log(digit); 
    }
  }



  function fromString(num) {
    let str = num.toString();
    let digit;

    for(i = 0; i < str.length; i++) {
      digit = str[i];
      console.log(digit);
    }
  }

  dividing(num);
  console.log('-----');
  fromString(num);
}


// ------------------------------------------------------------
const num2 = 12345;

sumDigita(num2);


function sumDigita(num) {
  let sum = 0;

  while(num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  console.log(sum);
}


// ------------------------------------------------------------





/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

let counter, message;
const contenitore = document.getElementById("contenitore");


for (let i = 1;  i <= 100; i++){
 
    const quadrato = document.createElement('div');

    if (i % 3 === 0 && i % 5 === 0) {
        message = "FizzBuzz";
        console.log(message);
        quadrato.classList.add("red");
        
    }
    else if ( i % 3 === 0 ){
        message = "Fizz";
        console.log(message);
        quadrato.classList.add("green");
    }
    else if ( i % 5 === 0 ){
        message = "Buzz";
        console.log(message);
        quadrato.classList.add("yellow");
    }
    else{
        message = i;
        console.log(message);
        quadrato.classList.add("teal");
    }

    quadrato.append(message);

    contenitore.append(quadrato);
}


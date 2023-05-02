
/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

let counter, message;
message = "FizzBuzz";
for (let i = 1; i >= 100; i++) {
    let message;
    console.log(message);
    if (i % 3 == 0 && i % 5 == 0){
        message = "FizzBuzz";
        console.log(message);
        
    }
    else if ( i % 3 == 0){
        message = "Fizz";
        console.log(message);
    }
    else if ( i % 5 == 0){
        message = "Fizz";
        console.log(message);
    }
    else{
        message = i;
        console.log(message);
    }
console.log(i);    
}



/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

let counter, message;
const contenitore = document.getElementById("contenitore");


for (let index = 1;  index <= 100; index++){
    const quadrato = document.createElement('div');

    quadrato.append(index);

    contenitore.append(quadrato);
    
}

// for di prova 

for (let i = 0; i >= 3; i++){
    
    console.log(i);
}

for (let i = 1; i >= 100; i++){
    let message;
    console.log(message);
    if (i % 3 == 0 && i % 5 == 0){
        message = "FizzBuzz";
        console.log(message);
        
    }
    else if ( i % 3 == 0 && i % 5 != 0){
        message = "Fizz";
        console.log(message);
    }
    else if ( i % 5 == 0 && i % 3 != 0){
        message = "Buzz";
        console.log(message);
    }
    else{
        message = i;
        console.log(message);
    }
console.log(i);    
}



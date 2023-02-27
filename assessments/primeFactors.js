function isPrime(number){
    for(let i=2; i<=Math.sqrt(number); i++){
        if(number%i == 0) return false;
    }
    return true;
}

//console.log(isPrime(19))

function primeFactors(number){
    //check if number is prime
    //if not while number is different than 1
    //start a counter at two, if its divisible restart counter and add factor modifying number

    let counter = 2;
    let factors = [];
    let isItPrime = false;

    isItPrime = isPrime(number);
    if(isItPrime) return [number];
    console.log('todo bien')
    while(number != 1){
        if(number%counter == 0){
            factors.push(counter);
            number = number/counter;
            counter = 2;
        }else{
            isItPrime = false;
            while(!isItPrime){
                counter++;
                isItPrime = isPrime(counter);
            }
        }
    }

    return factors;

}


console.log(primeFactors(1245325))
console.log(primeFactors(2473))
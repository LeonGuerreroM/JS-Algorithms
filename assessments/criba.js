//returns the amount of prime numbers until certain number;

function eratostenes(number){
    let factors = Array.from(Array(number+1).keys());

    factors = factors.slice(1);

    for(let i=2; i<Math.sqrt(number); i++){
        for(let j=0; j<factors.length; j++){
            if(factors[j]%i == 0 && i!=factors[j]) factors.splice(j,1);
        }
    }

    return factors;

}

console.log(eratostenes(100))
//console.log(eratostenes(1245325));
//console.log(eratostenes(2473));

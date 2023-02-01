function decimalToBinary(decimal){
    let binary = '';
    
    while(decimal > 1){
        if(decimal%2==0){
            binary = 0 + binary;
            decimal /= 2;
        }else{
            binary = 1 + binary;
            decimal /= 2;
            decimal = Math.trunc(decimal);
        } 
    }
    if(decimal == 1){
        binary = 1 + binary;
    }else{
        binary = 0 + binary;
    }

    return binary;
}

console.log(decimalToBinary(28));
console.log(decimalToBinary(79));
console.log(decimalToBinary(256));
console.log(decimalToBinary(128));

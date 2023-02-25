function binaryToDecimal(binary){
    
    let decimal = 0;
    let length = 0;
    let binaryArr = binary.split('');

    while(binaryArr.length > 0){
        if(binaryArr[0]=='1'){
            length = binaryArr.length
            decimal += 2**(length-1);
        }
        binaryArr.splice(0, 1);
    }
    return decimal;
}

console.log(binaryToDecimal('11100'));
console.log(binaryToDecimal('1001111'));
console.log(binaryToDecimal('100000000'));
console.log(binaryToDecimal('11111111111111111111111111111101'));
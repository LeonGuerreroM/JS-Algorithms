function hexaToDecimal(hexa){
    let hexaArr = hexa.split('');
    let length;
    let decimal = 0;

    while(hexaArr.length>0){
        length = hexaArr.length;
        decimal += 16**(length-1)*hexaBasicConverter(hexaArr[0]);
        hexaArr.splice(0, 1);
    }
    return decimal;
}

function hexaBasicConverter(hexa){
    if(parseInt(hexa)<10){
        return parseInt(hexa);
    }else{
        switch(hexa){
            case 'A':
                return 10;
            case 'B':
                return 11;
            case 'C':
                return 12;
            case 'D':
                return 13;
            case 'E':
                return 14;
            case 'F':
                return 15;

        }
    }
}

console.log(hexaToDecimal('1EF'));
console.log(hexaToDecimal('4D86B'));

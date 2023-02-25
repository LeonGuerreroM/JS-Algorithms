function romanToDecimal(roman){
    roman = roman.slice("");
    const length = roman.length;
    let decimal = 0;
    let number = 0;
    let nextNumber = 0;
    let skip = false;

    for(let i=0; i<length-1; i++){
        if(skip == true){
            skip = false;
            continue;
        }
        number = singleConvert(roman[i]);
        nextNumber = singleConvert(roman[i+1]);
        if(number < nextNumber){
            number = nextNumber - number;
            skip = true;
        }
        decimal += number; 
    }

    if(skip == false){
        decimal += singleConvert(roman[length-1]);
    }

    console.log(decimal);

}

function singleConvert(roman){
    switch(roman){
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return 0;
    }
}

romanToDecimal('I')
romanToDecimal('IV')
romanToDecimal('IX')
romanToDecimal('XII')
romanToDecimal('XV')
romanToDecimal('XVIII')
romanToDecimal('XIX')
romanToDecimal('XX')
romanToDecimal('XLIV')
romanToDecimal('CD')
romanToDecimal('CDXCIX')
romanToDecimal('CM')


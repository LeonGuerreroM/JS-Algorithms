function decimalToRoman(decimal){
    let roman = '';

    if(decimal>3999){
        return 'number out of bounds';
    }
    
    while(decimal > 0){
        if(decimal >= 1000){
            decimal -= 1000;
            roman = roman + 'M'
        }else if(decimal >= 900){
            decimal -= 900;
            roman = roman + 'CM';
        }else if(decimal >= 500){
            decimal -= 500;
            roman = roman + 'D';
        }else if(decimal >= 400){
            decimal -= 400;
            roman = roman + 'CD';
        }else if(decimal >= 100){
            decimal -= 100;
            roman = roman + 'C';
        }else if(decimal >= 90){
            decimal -= 90;
            roman = roman + 'XC';
        }else if(decimal >= 50){
            decimal -= 50;
            roman = roman + 'L';
        }else if(decimal >= 40){
            decimal -= 40;
            roman = roman + 'XL';
        }else if(decimal >= 10){
            decimal -= 10;
            roman = roman + 'X';
        }else if(decimal >= 9){
            decimal -= 9;
            roman = roman + 'IX';
        }else if(decimal >= 5){
            decimal -= 5;
            roman = roman + 'V';
        }else if(decimal >= 4){
            decimal -= 4;
            roman = roman + 'IV';
        }else if(decimal >= 1){
            decimal -= 1;
            roman = roman + 'I';
        }
    }
    return roman;
}

console.log(decimalToRoman(1));
console.log(decimalToRoman(4));
console.log(decimalToRoman(9));
console.log(decimalToRoman(12));
console.log(decimalToRoman(15));
console.log(decimalToRoman(18));
console.log(decimalToRoman(19));
console.log(decimalToRoman(20));
console.log(decimalToRoman(44));
console.log(decimalToRoman(400));
console.log(decimalToRoman(499));
console.log(decimalToRoman(900));
console.log(decimalToRoman(3999));
console.log(decimalToRoman(4000));


// romanToDecimal('I')
// romanToDecimal('IV')
// romanToDecimal('IX')
// romanToDecimal('XII')
// romanToDecimal('XV')
// romanToDecimal('XVIII')
// romanToDecimal('XIX')
// romanToDecimal('XX')
// romanToDecimal('XLIV')
// romanToDecimal('CD')
// romanToDecimal('CDXCIX')
// romanToDecimal('CM')
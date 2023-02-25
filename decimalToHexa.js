function decimalToHexa(decimal){
    let result = 0
    let reminder = 0;
    let hexa = '';
    
    while(decimal>16){
        result = decimal / 16;
        result = Math.trunc(result)
        reminder = decimal - result*16;
        hexa = basicHexaConverter(reminder) + hexa;
        decimal = result;
    }
    hexa = basicHexaConverter(decimal) + hexa;
    return hexa;
}

function basicHexaConverter(decimal){
    if(decimal<10){
        return decimal.toString();
    }else{
        switch(decimal){
            case 10:
                return 'A';
            case 11:
                return 'B';
            case 12:
                return 'C';
            case 13:
                return 'D';
            case 14:
                return 'E';
            case 15:
                return 'F';
        }
    }
}

console.log(decimalToHexa(9));
console.log(decimalToHexa(12));
console.log(decimalToHexa(15));
console.log(decimalToHexa(495));
console.log(decimalToHexa(317547));
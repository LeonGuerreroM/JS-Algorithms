function stringCompression(s){
    //recorrer arreglo
        //if next character is equal to current, add to the counter
        //if not, add to the counter and concat
    
    //loop trough result increasing by a factor of 2 and starting at 1
        //if ascii equivalent is greater than 49 then put singular on false and break

    //if singular is true, return s, if not, return result

    let result = '';
    let asciiEquivalent;
    let singular = true;
    let counter = 0;

    // for(let i=0; i<s.length-1; i++){
    //     if(s[i] != s[i+1]){
    //         counter++;
    //         result = result + s[i] + counter;
    //         counter = 0;
    //         if(i == s.length-2){
    //             result = result + s[i+1] + 1;
    //         }
    //     }else{
    //         counter++;
    //         if(i == s.length-2){
    //             counter++;
    //             result = result + s[i] + counter;
    //         } 
            
    //     }
    // }

    for(let i=0; i<s.length; i++){
        if(i == s.length-1){
            if(s.length > 1){
                if(s[i-1] == s[i]){
                    counter++;
                    result = result + s[i] + counter;
                }else{
                    result = result + s[i] + 1;
                }
            }else{
                return s;
            }
        }else{
            if(s[i] != s[i+1]){
                counter++;
                result = result + s[i] + counter;
                counter = 0;
            }else{
                counter++;                
            }
        }
    }

    for(let i=1; i<result.length; i+=2){
        asciiEquivalent = result[i].charCodeAt(0);
        if(asciiEquivalent != 49){
            singular = false;
            break;
        } 
    }
    if(singular) return s;

    return result;

}


console.log(stringCompression('aabcccccaaa'))
console.log(stringCompression('manzana'))
console.log(stringCompression('aabcccccaad'))
console.log(stringCompression('a'))






function stringCompressionUnsorted(s){
    
    let frequencies = new Array(256).fill(0);
    let asciiEquivalent;
    let singular = true;
    let result = '';

    for(let i of s){
        asciiEquivalent = i.charCodeAt(0);
        frequencies[asciiEquivalent]++;
    }

    for(let i of frequencies){
        if(i>1){
            singular = false;
            break;
        }
    }

    if(singular){
        return s;
    }

    for(let i=0; i<frequencies.length; i++){
        if(frequencies[i]!=0) result = result + String.fromCharCode(i) + frequencies[i];
    }

    return result;

}

function isUnique(s){
    let characters = [];

    for(let element of s){
        for(let char of characters){
            if(element == char){
                return false;
            }
        }
        characters.push(element);
    }
    
    return true;
}


function isUniqueMV(s){
    for(let i=0; i<s.length-1; i++){
        repeated = false;
        for(let j=i+1; j<s.length; j++){
            if(s[i] == s[j]){
                return false
            }
        }
    }
    
    return true;
}

console.log(isUniqueMV('conejo rabioso'));


function freqTable(arr){
    let frequencies = [];
    let appeared = false;

    for(let i of arr){  
        for(let j=0; j<frequencies.length; j++){ 
            if(i == frequencies[j].character){
                appeared = true;
                frequencies[j].frequency++;
                break;
            } 
        }
        if(!appeared){ 
            frequencies.push({
                character: i,
                frequency: 1
            })
        }else{
            appeared = false;
        }
    }

    return frequencies;
}

console.log(freqTable('manzana'))

function isPalindromePermutation(s){
    //verify if all letters have even freq unless s is odd, then just one freq should be even

    //rewrite the word WO spaces.
    //loop through s and add 1 freq every time a letter appears using the ascii conv code
    //loop through the ascii based array
    //if its odd decrease odd limit
    //if odd limit is less than 0, return false 
    //if nothing happened till this point, return true

    let oddLimit = 0;
    let sWOSpaces = [];
    let asciiEquivalent;
    let frequencies = new Array(256);

    for(let i=0; i<frequencies.length; i++){
        frequencies[i] = 0;
    }

    for(let element of s){
        if(element != ' ') sWOSpaces.push(element);
    }

    if(sWOSpaces.length%2 != 0) oddLimit++;

    for(let i=0; i<sWOSpaces.length; i++){
        asciiEquivalent = sWOSpaces[i].charCodeAt(0);
        frequencies[asciiEquivalent]++;
    }

    //console.log(frequencies);

    for(let element of frequencies){
        if(element != 0){
            if(element%2 != 0){
                oddLimit--;
                if(oddLimit < 0) return false;
            }
        }
    }

    return true;

}

console.log(isPalindromePermutation('anitl lava aa tina'));
function lexSimplify(s){
    //loop through the string getting unique letters
    //capture frequency on array based on the index
    
    //while s long is more than unique letters
        //loop through the s and if current letter freq is bigger than 1, delete it.
    
    let characters = [];
    let frequencies = [];
    let asciiEquivalent;
    let appeared;
    let uniqueLetters;

    for(let i=0; i<s.length; i++){
        appeared = false;
        asciiEquivalent = s[i].charCodeAt(0);
        for(let j=0; j<characters.length; j++){
            if(s[i]==characters[j]){
                frequencies[asciiEquivalent]++;
                appeared = true;
            }
        }
        if(!appeared){
            characters.push(s[i]);
            frequencies[asciiEquivalent] = 1;
        }
    }

    uniqueLetters = characters.length;
    s = s.split('');

    while(s.length > uniqueLetters){
        for(let i=0; i<s.length; i++){
            asciiEquivalent = s[i].charCodeAt(0);
            if(frequencies[asciiEquivalent] > 1){
                s.splice(i, 1);
                frequencies[asciiEquivalent]--;
            } 
        }
    }
    console.log(characters);
    console.log(s.join(''));

}

console.log(lexSimplify('HAY QUE BUSCAR UNO QUE NO HAGA TANTO PROBLEMA'));
//console.log(lexSimplify('aaccba'));

// s = 'hola';
// s = s.split('')
// s.splice(1,1);
// console.log(s);
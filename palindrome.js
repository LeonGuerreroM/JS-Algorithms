function palindrome(word){
    let wordAsArray = []
    for(let i of word){
        if(i != ' ')
        wordAsArray.push(i);
    }
    console.log(wordAsArray);
    const length = wordAsArray.length;
    let medium = (length/2);
    medium = Math.trunc(medium);
    let counter = 0;
    let negativeCounter = length-1;

    while(counter < medium){
        if(wordAsArray[counter] != wordAsArray[negativeCounter]){
            return 'not a palindrome'
        }
        counter++;
        negativeCounter--;
    }

    return 'palindrome indeed'
}

console.log(palindrome('amo la pacifica paloma'));
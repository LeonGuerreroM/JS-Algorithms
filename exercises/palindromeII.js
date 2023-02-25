function isPalindrome(s){
    let sWOSpaces = [];
    let half, limit;
    let mainSubstring = [];
    let mirrorSubstring = [];
    let result;

    for(element of s){
        if(element != ' ') sWOSpaces.push(element);
    }

    console.log(sWOSpaces);

    half = sWOSpaces.length/2;
    limit = Math.trunc(half);

    mainSubstring = sWOSpaces.slice(0, limit);
    if(sWOSpaces.length%2 != 0) limit++;
    mirrorSubstring = sWOSpaces.slice(limit, s.length);
    mirrorSubstring.reverse();

    console.log(mainSubstring);
    console.log(mirrorSubstring);

    mirrorSubstring.join('') == mainSubstring.join('') ? result = true : result =  false;
    return result;

}


console.log(isPalindrome('anitalavalatina'));
console.log(isPalindrome('taco cat'));
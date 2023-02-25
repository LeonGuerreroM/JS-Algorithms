function isModified(s1, s2){
    //if both are equal, return true
    //if the difference between their lengths is higher than one, return false
    //if both are the same length, it could be modified
        //compare both and if there is more than one difference, return false, otherwise return true
    //if it got this far, do the ascii array thecnique on both
    //loop through both and if more than one difference is found, return false. Otherwise, return true.
    let s1Length = s1.length;
    let s2Length = s2.length;
    let difference = 0;
    let s1Frequencies = new Array(256).fill(0);
    let s2Frequencies = new Array(256).fill(0);
    let asciiEquivalent;

    if(s1 == s2) return true;
    if(Math.abs(s1Length - s2Length) > 1) return false;

    if(s1Length == s2Length){ //modified case
        for(let i=0; i<s1Length; i++){
            if(s1[i] != s2[i]) difference++;
            if(difference > 1) return false;
        }
        return true;
    }

    for(let i=0; i<s1Length; i++){
        asciiEquivalent = s1[i].charCodeAt(0);
        s1Frequencies[asciiEquivalent]++;
    }

    for(let i=0; i<s2Length; i++){
        asciiEquivalent = s2[i].charCodeAt(0);
        s2Frequencies[asciiEquivalent]++;
    }

    for(let i=0; i<256; i++){
        if(s1Frequencies[i] != s2Frequencies[i]) difference++;
        if(difference > 1) return false;
    }

    return true;

}

console.log(isModified('pale', 'palesq'));
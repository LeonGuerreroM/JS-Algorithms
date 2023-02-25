/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let group = 1;
    let fullGroup = group*2;
    let currentElement = 0;
    let index;
    let counter;
    let accomplishedSame = true;
    let accomplishedDifferent = true;
    let substringsNumber = 0;
    //let substrings = []; //
    //let substring = ''; //


    while(fullGroup <= s.length){
        for(let i=0; i<=s.length-fullGroup; i++){
            currentElement = s[i];
            index = i+1;
            counter = 1;
            //substring += s[i]; //
            while(counter<group){ //case for same type
                if(currentElement != s[index]){
                    accomplishedSame = false;
                    break;
                }
                //substring += s[index]; //
                index++;
                counter++;
            }
            if(accomplishedSame){
                counter = 0;
                while(counter<group){ //case for different type
                    if(currentElement == s[index]){
                        accomplishedDifferent = false;
                        break;
                    }
                    //substring += s[index]; //
                    index++;
                    counter++;
                }
                if(accomplishedDifferent){
                    //substrings.push(substring); //
                    substringsNumber++;
                }
            }
            //substring = ''; //
            accomplishedSame = true;
            accomplishedDifferent = true;
        }
        group++;
        fullGroup = group*2;
    }
    //console.log(substrings)
    return substringsNumber;
};
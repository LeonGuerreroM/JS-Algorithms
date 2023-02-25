function urlify(s){
    s = s.split('');

    for(let i=0; i<s.length-1; i++){
        if(s[i] == ' '){
                if(s[i+1] == ' '){
                    s = s.slice(0, i);
                    break;
                }
            s[i] = '%20';
        }
    }

    return s.join('');
}


console.log(urlify('Mr John Smith'));
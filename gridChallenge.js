function gridChallenge(grid) {
    
    let unorderedElements;
    let actualAscii, nextAscii, prevAscii = 0;
    let holder;
    let counter = 0;

    for(let i of grid){
        i = Array.from(i);
        unorderedElements = i.length; 
        while(unorderedElements > 1){
            for(let j=0; j<unorderedElements-1; j++){
                actualAscii = i[j].charCodeAt(0);
                nextAscii = i[j+1].charCodeAt(0);
                if(actualAscii > nextAscii){
                    holder = i[j];
                    i[j] = i[j+1];
                    i[j+1] = holder;
                }
            }
            unorderedElements--;
        }
        grid[counter] = i.join('');
        counter++;
    }

    counter = 0;

    while(counter < grid.length){
        for(let k of grid){
            actualAscii = k[counter];
            if(prevAscii > actualAscii){
                return 'NO';
            } 
            prevAscii = k[counter]
        }
        prevAscii = 0;
        counter++;
    }
    
    return 'YES';

}
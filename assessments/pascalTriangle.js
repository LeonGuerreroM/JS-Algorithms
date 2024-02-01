const pascalTriangle = (levels) => {

    if(typeof levels != 'number') throw TypeError('This is not a number');

    let triangle = [[1], [1, 1]];
    let pastLevel = [1, 1];
    let newLevel = [];
    let pastNumber = 0;
    let sum;
    let holder = [];
    levels -=2;

    while(levels > 0){
        for(let i=0; i<pastLevel.length-1; i++){
            sum = pastLevel[i]+pastLevel[i+1];
            if(pastNumber >= sum){
                holder.push(...newLevel);
                pastNumber == sum ? newLevel.push(...holder.reverse()) : newLevel.push(...holder.slice(0, -1).reverse());
                break;
            }
            newLevel.push(sum);
            pastNumber = sum;
        }
        
        newLevel.unshift(1);
        newLevel.push(1);
        triangle.push(newLevel);
        levels--;
        pastLevel = newLevel;
        newLevel = [];
        holder = [];
        pastNumber = 0;
    }
    
    return triangle;

}

try{
    const result = pascalTriangle(10);
    for(let i of result) console.log(i);
}catch(error){
    console.error(error.message)
}

datos.reduce((a, v) => a.concat(a.map(d => [v].concat(d))), [[]] )
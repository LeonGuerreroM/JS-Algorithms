function bubbleSort(array){
    let unorderedElements = array.length;
    let i;
    
    while(unorderedElements > 1){
        for(i=0; i<=unorderedElements-2; i++){
            if(array[i] > array[i+1]){
            array[i] = array[i] + array[i+1];
            array[i+1] = array[i] - array[i+1];
            array[i] = array[i] - array[i+1];
            }
        }
        unorderedElements--;
        console.log(array);
    }
    return array;
    }

let array = [-2, 45, 0, 11, -9];
//let array = [-5, -15, 8, 21, 4402, 121942, 98, 4, 1, 394823482048, 0, 43, 12, 56, 4];
let orderedArray = bubbleSort(array);
console.log("ordered " + orderedArray);
function selectionSort(array){
    let currentToSwap = 0;
    let currentMinimumIndex = currentToSwap;
    let holder;
    
    while(currentToSwap < array.length-1){
        for(let i=currentToSwap; i<array.length; i++){
            if(array[i] < array[currentMinimumIndex]){
            currentMinimumIndex = i;
            }
        }
        holder = array[currentToSwap];
        array[currentToSwap] = array[currentMinimumIndex];
        array[currentMinimumIndex] = holder;
        currentToSwap++;
        currentMinimumIndex = currentToSwap
    }
    
        return array
        
}

function selectionSortDesc(array){
    let currentToSwap = 0;
    let currentMaximumIndex = currentToSwap;
    let holder;
    
    while(currentToSwap < array.length-1){
        for(let i=currentToSwap; i<array.length; i++){
            if(array[i] > array[currentMaximumIndex]){
            currentMaximumIndex = i;
            }
        }
        holder = array[currentToSwap];
        array[currentToSwap] = array[currentMaximumIndex];
        array[currentMaximumIndex] = holder;
        currentToSwap++;
        currentMaximumIndex = currentToSwap
    }
    
        return array
        
}

const sortedArray = selectionSort([3, 9, 54, 7, 3, 2, 100, 1000])
console.log(sortedArray);
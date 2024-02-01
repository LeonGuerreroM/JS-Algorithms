function quickSort(arr){
    let pivot = arr.length-1;
    let i = 0;
    let j = arr.length-2;
    let aux;
    let arrLeft = [], arrRight = [];

    console.log('proceso para '+arr);

    if(arr.length == 1){
        console.log('se retorna '+arr);
        return arr;
    }

    while(i<j){
        while(arr[i]<=arr[pivot] && i<arr.length-1){
            i++;
        }
    
        while(arr[j]>arr[pivot] && j>0){
            j--;
        }

        if(i<j){
            console.log('se hace swap de '+i+' y '+j);
            console.log('se hace swap de '+arr[i]+' y '+arr[j]);
            aux = arr[i];
            arr[i] = arr[j];
            arr[j] = aux;
        }
    }

    console.log('se hace swap final de '+i+' y '+pivot);
    console.log('se hace swap final de '+arr[i]+' y '+arr[pivot]);
    aux = arr[i];
    arr[i] = arr[pivot];
    arr[pivot] = aux;

    
    if(i!=0){
        arrLeft = quickSort(arr.slice(0, i));
    }
    if(i!=pivot){
        arrRight = quickSort(arr.slice(i+1, arr.length));
    }

    return arrLeft.concat(arr[i], arrRight);

}

//console.log(quickSort([22, 11, 88, 66, 55, 77, 33, 44]));
console.log(quickSort([-5, -15, 8, 21, 4402, 121942, 98, 4, 1, 394823482048, 0, 43, 12, 56, 4]));

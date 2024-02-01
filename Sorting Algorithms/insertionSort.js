function insertionSort(array){
    let holder;
    
    for(let i=0; i<array.length; i++){ //seleccionamos un elemento a ordenar
        holder = array[i];
        j = i-1;
        while(j>=0 && array[j]>holder){ //mientras el elemento de antes sea mas grande
            array[j+1] = array[j]; //hacemos desplazamiento o copia hacia adelante
            j--;
        }
        array[j+1] = holder; //en el último que fue mas grande se asigna el que estabamos ordenando (no se pierde pues está duplicado en la siguiente posición)
    }

    return array;

}

function insertionSortV2(array){
    let currentIndex = 1;
    let limitIndex;
    let holder;
    
    while(currentIndex < array.length){
        limitIndex = currentIndex;
        holder = array[currentIndex];
        for(let j=currentIndex-1; j>-1; j--){
            if(array[j] > holder){ //condición para realizar copia hacia adelante
                array[j+1] = array[j];
                if(j == 0){ //condición por si nunca deja de ser verdad la anterior
                    limitIndex = 0
                }
            }else{
                limitIndex = j+1; //variable que guarda el valor de j porque no se mantiene fuera del for
                break; //condición de ruptura del ciclo
            }
        } 

        array[limitIndex] = holder;
        
        currentIndex++;
    }

    return array;

}

//const sortedArray = insertionSort([3, 9, 54, 7, 3, 2])
//const sortedArray = insertionSort([3, 9, 54, 7, 3, 2, 100, 1000])
const sortedArray = insertionSort([1, 2, 10, 9])
console.log(sortedArray);
function matrixRotation(n){
    //create the matrix
    //loop through the matrix using row/column system inserting a counter that will increase in each iteration

    //loop through matrix using column/row system with row starting at length-1
    //in each iteration assign to new matrix using two indexes to move in it in row/column system

    let matrix = new Array(n).fill().map( () => new Array(n).fill() );
    let rotatedMatrix = new Array(n).fill().map( () => new Array(n).fill() );
    let counter = 0;
    let indexRow = 0;
    let indexColumn = 0;

    for(let i=0; i<n; i++){ //filling the matrix
        for(let j=0; j<n; j++){
            counter++;
            matrix[i][j] = counter;
        }
    }

    for(let j=0; j<n; j++){ //movement on column
        for(let i=n-1; i>=0; i--){ //movement on rows (backwards)
            rotatedMatrix[indexRow][indexColumn] = matrix[i][j]; 
            indexColumn++; //column increases when shifted run increases row
        }
        indexColumn = 0; //column returns to zero waiting for a new row to start
        indexRow++; //row increases when shifted run increases column 
    }

    return rotatedMatrix;
    
}

console.log(matrixRotation(5))
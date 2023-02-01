function printPyramidA(levelsNumber){
    let charactersNumber;
    let i, j;
    
    for(i=1; i<=levelsNumber; i++){
        for(j=1; j<=levelsNumber-i; j++){
            process.stdout.write(" ");
        }
        charactersNumber = 1+((i-1)*2);
        for(j=1; j<=charactersNumber; j++){
            process.stdout.write("o");
        }
        for(j=1; j<=levelsNumber-i; j++){
            process.stdout.write(" ");
        }
        console.log();
    }
}

function pyramidPrintB(levelsNumber){
    let spacesArrayA = [];
    let charactersArray = [];
    let spacesArrayB = [];
    let charactersNumber;
    let i;
    
    for(i=1; i<=levelsNumber; i++){
        spacesArrayA = [];
        charactersArray = [];
        spacesArrayB = [];
        spacesArrayA = new Array(levelsNumber-i).fill(" ").join("");
        charactersNumber = 1+((i-1)*2);
        charactersArray = new Array(charactersNumber).fill("0").join("");
        spacesArrayB = new Array(levelsNumber-i).fill(" ").join("");
        console.log(spacesArrayA+charactersArray+spacesArrayB);
    }
}

function halfPyramid(levelsNumber){
    let i;
    let line = "o"

    console.log(line);

    for(i=2; i<=levelsNumber; i++){
        line += 'o'
        console.log(line);
    }

}

halfPyramid(10)
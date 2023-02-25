function zigZagArray(arr){
    const sortedArray = selectionSort(arr);
    const breakPoint = Math.round(sortedArray.length/2);
    const zig = sortedArray.slice(0, breakPoint);
    const zag =  selectionSortDesc(sortedArray.slice(breakPoint, sortedArray.length));
    const zigzag = zig.concat(zag);
    return zigzag;

}
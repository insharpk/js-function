function drop(array,size=1){
    if(size===0){
        return ([...array]);
    }
    if(size>=array.length){
        return [];
    }

    const droppedArray=[];

    for(let i=size;i<array.length;i++){
        droppedArray.push(array[i]);
    }

    return droppedArray;
}

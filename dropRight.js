function dropRight(array,size=1){
    if(size==0){
        return [...array];
    }

    if(array.length<=size){
        return [];
    }


    const droppedArray=[];
    for(let i=0; i<array.length-size;i++ ){
        droppedArray.push(array[i]);
    }
    
    return droppedArray;
}

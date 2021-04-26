function without(array,...values){
    const newArray=[];

    for(let i=0;i<array.length;i++){
        const candidateToPush=array[i];

        if(!values.includes(candidateToPush)){
            newArray.push(candidateToPush);
        }
    }

    return newArray;
}


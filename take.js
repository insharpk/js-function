function take(array,n=1){
    if(n===0){
        return [];
    }
    if(n>array.length){
        return [...array];
    }

    const takenarray=[];
    for(let i=0;i<n;i++){
        takenarray.push(array[i]);
    }
    
    return takenarray;
}
function tail(array){
    const tailArray=[];
    for(let i=1;i<array.length;i++){
        tailArray.push(array[i]);
    }

    return tailArray;
}



function last(array){

    return array[array.length-1];
}

function head(array){
    return array[0];
}

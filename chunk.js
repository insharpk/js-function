function chunk(array,size=1){
    const chunkedArray=[];

    while(array.length>0){
        const splicedValues=array.spliced(0,size);

        chunkedArray.push(splicedValues);
    }

    return chunkedArray;
}
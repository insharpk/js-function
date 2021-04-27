function fill(array,value,start=0,end=array.length){


    for(let i=0;i<array.length;i++){
        if(start<=i&&i<end){
            array[i]=value;
        }
    }
    return array;
}

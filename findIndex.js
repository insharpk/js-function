findIndex(array,predicate,fromIndex=0){
  for(let i=0;i<array.length;i++){
    const value =array[i]
    if(predicate(value)){
      return i;
    }
  }
  return -1;
}

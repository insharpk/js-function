function uniq(){
  const uniqArray=[];
  
  for(let i=0;i<array.length;i++){
    const value=array[i];
    
    if(!uniqArray.includes(value)){
      uniqArray.push(value);
    }
  }
  
  return uniqArray;
}

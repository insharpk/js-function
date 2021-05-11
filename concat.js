function concat(array,...values){
  const newArray=[...array];
  
  for(let i=0;i<values.length;i++)
  {
       const value=values[i];
    
       if(Array.isArray(value)){
           newArray.push(...value);    
       }else{
           newArray.push(value);
       }
    
  }
  
  return newArray;
}

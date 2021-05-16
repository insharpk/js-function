
function takeRight(array,n=1){
  if(n==0){
  return [];
  }
  if(n>array.length){
  return [...array];
  }
  const takenArray=[];
  
  for(let i=0;i<array.length;i++){
    const indexFromRight=array.length-(1+i);
    takenArray.unshift(array[indexFromRight]);
  }
  
  return takenArray;
}

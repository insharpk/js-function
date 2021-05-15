function fromPairs(pairs){
  const keyValuePair={};
  
  for(let i=0;i<pairs.length;i++){
    const [key,value]=pairs[i];
    keyValuePair[key]=value;
  }
  
  return keyValuePair;
}

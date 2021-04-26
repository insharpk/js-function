function zipObject(props=[],values=[]){
    const zippedObject={};

    for(let i=0;i<props.length;i++){
        const prop=props[i];
        const value=values[i];
        zippedObject[prop]=value;
    }

    return zippedObject;
}


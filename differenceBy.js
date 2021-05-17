
function differnceBy(targetValues,compareValues,iteratee)
{   
    const diffValues=[];

    const processedCompareValues=compareValues.map(v => iteratee(v));
    for(let i=0;i<targetValues.length;i++)
    {
        const target=targetValues[i];
        const processedTarget=iteratee(target);
        if(!processedCompareValues.includes(processedTarget)){
            diffValues.push(target);
        }
    }
    return diffValues;
}

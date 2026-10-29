

const score = function(fruits){
    let maxFruits = 0;
    let startWindow = 0;
    const fruitMap = new Map();
    for(let endWindow = 0; endWindow<fruits.length; endWindow++){
        fruitMap.set(fruits[endWindow], (fruitMap.get(fruits[endWindow])?? 0)+1)
        while(fruitMap.size>=3){
            fruitMap.set(fruits[startWindow], fruitMap.get(fruits[startWindow])-1);
            if(fruitMap.get(fruits[startWindow])<=0) fruitMap.delete(fruits[startWindow]);
            startWindow++;
        }
        maxFruits = Math.max(maxFruits, endWindow-startWindow+1);
        
    }
    return maxFruits;
}
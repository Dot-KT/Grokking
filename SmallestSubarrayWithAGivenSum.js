const smallestSubArray = function(arr, s){
    let minArray = Number.MAX_SAFE_INTEGER;
    let startWindow = 0;
    let sumCounter = 0;

    for(let endWindow = 0; endWindow < arr.length; endWindow++){
        sumCounter += arr[endWindow];
        if(sumCounter >= s){
            console.log(sumCounter + "  ++ "+ startWindow+ "  ++  "+ endWindow);
            minArray = Math.min(minArray, (endWindow - startWindow +1));
            console.log(minArray)
            sumCounter = sumCounter-arr[startWindow] - arr[endWindow];
            startWindow++;
            endWindow--;
        }
        console.log("=========")
    }
    return minArray;
}


console.log(smallestSubArray([2, 1, 5, 2, 8], 7));

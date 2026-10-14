function introToSlidingWindow(input, k){
    var currentSum = 0;
    var startIndex = 0;
    for(let i = 0; i<k; i++){
        currentSum+=input[i];
    }
    input[startIndex] = currentSum/k;
    
    for(let i=k; i<input.length; i++){
        currentSum = currentSum - input[startIndex]+input[i];
        input[startIndex++] = currentSum/k;
        
    }
    console.log(input);
}
introToSlidingWindow([1, 3, 2, 6, -1, 4, 1, 8, 2], 5);


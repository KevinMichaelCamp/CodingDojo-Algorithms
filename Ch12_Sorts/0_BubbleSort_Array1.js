function bubbleSort(arr){
  for(let i = 0; i < arr.length; i ++){
    for(let j = 0; j < arr.length-1-i; j ++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr
}

console.log(bubbleSort([2,7,1,9,3,4,6,5,8]));

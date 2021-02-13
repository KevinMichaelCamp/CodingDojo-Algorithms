function insertionSort(arr){
  for(var i = 0; i < arr.length; i ++){
    if(arr[i-1] < arr[i]){
      continue;
    }
    else{
      for(var j = i - 1; j >= 0; j --){
        var temp;
        if(arr[j+1] < arr[j]){
          temp = arr[j+1];
          arr[j+1] = arr[j];
          arr[j] = temp;
        }
        else {
          break;
        }
      }
    }
  }
  return arr;
}


console.log(insertionSort([2,3,5,1,4,6]));

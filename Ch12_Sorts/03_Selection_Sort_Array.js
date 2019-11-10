function selectionSort(arr){
  for(var i = 0; i < arr.length; i ++){
    var min = arr[i];
    var pos = i;
    for(var j = i + 1; j < arr.length; j ++){
      if(arr[j] < min){
        min = arr[j];
        pos = j;
      }
      if(min != arr[i]){
        arr[pos] = arr[i];
        arr[i] = min;
      }
    }
  }
  return arr;
}

 var arr = [5,3,8,1,9,7,6]
console.log(selectionSort(arr));

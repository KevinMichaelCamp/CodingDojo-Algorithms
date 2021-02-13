function balancePoint(arr){
  var right = 0;
  var left = 0;
  for(var i = 0; i < arr.length; i ++){
    left += arr[i];
    console.log('left', left)
    for(var j = i + 1; j < arr.length; j ++){
      right += arr[j];
      console.log('right', right)
    }
    if(left === right){
      return true
    }
    right = 0;
  }
  return false
}


console.log(balancePoint([1,2,3,4,10]))

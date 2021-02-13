*function binarySearch(arr, num){
  var temp =[];
  var middle = arr[Math.floor(arr.length/2)];
  if(middle == num){
    return true
  }
  else if (arr.length == 1 && arr[0] != num){
    return false
  }
  else if (middle < num) {
    for(var x = Math.floor(arr.length/2); x < arr.length; x++){
      temp.push(arr[x])
    }
    console.log(temp)
    return binarySearch(temp, num)
  }
  else if (middle > num) {
    for(var y = 0; y < Math.floor(arr.length/2); y++){
      temp.push(arr[y])
    }
    console.log(temp)
    return binarySearch(temp, num)
  }
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 3))
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 10))
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 1))

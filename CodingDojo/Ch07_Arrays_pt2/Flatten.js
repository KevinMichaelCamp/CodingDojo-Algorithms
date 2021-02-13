function flatten(arr){
  var newArr = []
  for(let i = 0; i < arr.length; i ++){
    if(arr[i][0]){
      for(let j = 0; j < arr[i].length; j++){
        newArr.push(arr[i][j])
      }
    }
    else {
      newArr.push(arr[i])
    }
  }
  return newArr
}

var myArr = [1,[2,3],4,[]]
console.log(flatten(myArr))

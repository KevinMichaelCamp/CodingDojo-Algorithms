/* Lovely Burbank has a breathtaking view of the Los Angeles skyline.  Let's say you are given an array with heights of consecutive buildings, starting closest to you and extending away.  Array [-1,7,3] would represent three buildings: first is actually out of view of street level, behind it is second at 7 stories high, and the third is 3 stories high (behind the 7-story).  You are situated at street level.  Return array containing heights of buildings you can see, in order.  Given [-1,1,1,7,3] return [1,7].  Given [0,4] return [4].  As always with challenges, do not use any built-in array functions such as unshift(). */

function arrayRemoveAt(arr, ind) {
  var temp = arr[ind];

  for (var i = ind; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }

  arr[arr.length - 1] = temp;
  return arr.pop();
}

function skylineHeights(arr) {
  var i = 0;
  var max = arr[0]

  while(i < arr.length) {
    console.log("i=" + i + " arr=" + arr);
    if(arr[i] <= 0) {
      arrayRemoveAt(arr, i);
      i--;
    }
    else if (arr[i] <= max) {
      arrayRemoveAt(arr, i);
      i--;
    }
    else if (arr[i] > max) {
      max = arr[i];
    }
    i++;
  }
  return arr;
}

//Test Cases
console.log("Test Case1");
console.log(skylineHeights([-1,1,1,7,3]))
console.log("******************");
console.log("Test Case2");
console.log(skylineHeights([0,4]))

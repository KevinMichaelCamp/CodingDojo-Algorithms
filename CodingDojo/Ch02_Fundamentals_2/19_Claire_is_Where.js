/*  On New Year's, have fun but don't forget your way home! For this challenge create four functions (reset, moveBy, xLocation, and yLocation) to track the travels of Claire, a wanderer.  Calling reset() moves Claire home to the origin (0,0).  The moveBy(xOffset, yOffset) function moves her by those amounts, in those directions.  Finally, xLocation() and yLocation() return how far Claire is from home, in X and Y directions respectively.  After the calls of reset(), moveBy(1,-2), and moveBy(3,1), subsequently calling xLocation() and yLocation() should return 4 and -1.

Second: Create function distFromHome().  Assuming she moves diagonally, reutrn her distance from home. */


function claireIsWhere() {
  var x;
  var y;

  function reset() {
    x = 0;
    y = 0;
  }

  function moveBy(xOffset, yOffset) {
    x = x + xOffset;
    y = y + yOffset;
  }

  function xLocation() {
    return x;
  }

  function yLocation() {
    return y;
  }

  function distFromHome() {
    var distance = Math.sqrt(Math.pow(xLocation(), 2) + Math.pow(yLocation(), 2))
    return distance;
  }

  reset();
  moveBy(1, -2);
  moveBy(3, 1);

  //log results
  console.log("Claire is located at x = " + xLocation() + ", y = " + yLocation() + ".");
  console.log("Claire's distance from home is " + distFromHome() + ".");
}


//Test Case
claireIsWhere();

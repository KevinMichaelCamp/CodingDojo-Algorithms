function node(val){
  this.val = val;
  this.next = null;
}

function queue(){
  this.head = null;
  this.tail = null;
  this.enqueue = function(val){
    var nn = new Node(val);
    if(this.head === null){
      this.head = nn;
      this.tail = nn;
    }
    else {
      this.tail.next = nn;
      this.tail = nn;
    }
    return this;
  }
  this.display = function(){
    var current = this.head
  }
}

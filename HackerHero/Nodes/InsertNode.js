// Node Constructor

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let node1 = new Node(3);
let node2 = new Node(5);
let node3 = new Node(7);

node1.next = node2;
node2.next = node3;
// insert
let node4 = new Node(10);
node4.next = node3;
node2.next = node4;
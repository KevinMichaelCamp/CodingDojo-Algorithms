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
let node4 = new Node(1);
let node5 = new Node(2);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
// remove
node1.next = node5;
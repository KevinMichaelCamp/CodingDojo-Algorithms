// Node Constructor

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Create and link two nodes

let node1 = new Node(5);
let node2 = new Node(7);
node1.next = node2;


class Node {
    constructor(value, next=null) {
        this.val = value;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Getters
    getFront() {
        if (!this.head) {
            return null
        } else {
            return this.head.val;
        }
    }

    getBack() {
        if (!this.tail) {
            return null
        } else {
            return this.tail.val;
        }
    }

    // Methods
    enQueue(value) {
        let newNode = new Node(value);

        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
    }

    deQueue() {
        if (this.head) {
            let front = this.head;
            this.head = this.head.next;
            return front;
        } else {
            return "Cannot dequeue - empty queue"
        }
    }

    contains(value) {
        if (!this.head) {
            return false
        } else {
            var runner = this.head;
            while (runner != null) {
                if(runner.val == value) {
                    return true;
                }
                runner = runner.next;
            }
        }
        return false;
    }

    isEmpty() {
        if(!this.head) {
            return true;
        } else {
            return false;
        }
    }

    size() {
        var counter = 0;
        if (!this.head) {
            return counter;
        } else {
            var runner = this.head;
            counter ++;
            while (runner.next != null) {
                counter ++;
                runner = runner.next;
            }
            return counter;
        }
    }

}

myQueue = new Queue();
console.log(myQueue);
myQueue.enQueue(1);
myQueue.enQueue(2);
myQueue.enQueue(3);
myQueue.enQueue(4);
myQueue.enQueue(5);
// console.log("*********************")
// console.log(myQueue);
// console.log("Front - " + myQueue.getFront())
// console.log("Back - " + myQueue.getBack())
// console.log(myQueue.deQueue());
console.log("*********************")
console.log(myQueue);
console.log("Front - " + myQueue.getFront())
console.log("Back - " + myQueue.getBack())
console.log(myQueue.contains(2));
console.log(myQueue.size());



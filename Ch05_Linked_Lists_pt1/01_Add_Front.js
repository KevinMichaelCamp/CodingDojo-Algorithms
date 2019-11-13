class Node {
    constructor(value, next=null) {
        this.val = value;
        this.next = next;
    }
}

class SSL {
    constructor() {
        this.head = null;
    }

    // Getters
    getHeadVal() {
        if (!this.head) {
            return null;
        } else {
            return this.head.val;       
        }
    }

    

    // Methods
    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    addFront(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return this.head;
    }

    removeFront() {
        if (!this.head) {
            console.log("Empty List - nothing to remove")
            return null;
        } else {
            this.head = this.head.next;
        }
        return this.head;
    }

    addBack(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let runner = this.head;
            while (runner.next != null) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
        return this.head;
    }

    removeBack() {
        if (!this.head) {
            console.log("Empty list - nothing to remove");
            return null;
        }
        if (!this.head.next) {
            this.head == null;
            return;
        }
        let previous = this.head;
        let runner = this.head.next;
        while (runner.next !== null) {
            previous = runner;
            runner = runner.next;
        }
        previous.next = null;
        return this.head;
    }

    insertAt(value, index) {
        if (!this.head) {
            this.head = new Node(value);
            return;
        }
        if (index === 0) {
            this.head = new Node(value, this.head);
            return;
        } else {
            const previous = this.getAt(index-1);
            let newNode = new Node(value);
            newNode.next = previous.next;
            previous.next = newNode;
            return this.head;
        }
    }

    removeAt(index) {
        if (!this.head) {
            console.log("Empty list - nothing to remove");
            return null;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        } else {
            const previous = this.getAt(index-1);
            if (!previous || !previous.next) {
                return;
            }
            previous.next = previous.next.next;
            return this.head;
        }
    }

    containsValue(value) {
        if (!this.head) {
            return false;
        }
        let runner = this.head;
        while (runner) {
            if (runner.val === value) {
                return true
            }
            runner = runner.next;
        }
        return false;
    }

    getLength() {
        let counter = 0;
        if (!this.head) {
            return counter;
        }
        let runner = this.head;
        while (runner) {
            counter++;
            runner = runner.next;
        }
        return counter;
    }

    findMax() {
        if (!this.head) {
            return null;
        }
        let max = this.head.val;
        let runner = this.head;
        while (runner) {
            if (runner.val > max) {
                max = runner.val;
            }
            runner = runner.next;
        }
        return max;
    }

    findMin() {
        if (!this.head) {
            return null;
        }
        let min = this.head.val;
        let runner = this.head;
        while (runner) {
            if (runner.val < min) {
                min = runner.val;
            }
            runner = runner.next;
        }
        return min;
    }

    findAvg() {
        if (!this.head) {
            return null;
        }
        let sum = 0;
        let counter = 0;
        let runner = this.head;
        while (runner) {
            sum += runner.val;
            counter++;
            runner = runner.next;
        }
        let avg = sum/counter;
        return avg;
    }

    printValues() {
        let runner = this.head;
        while (runner !== null) {
            console.log(runner.val);
            runner = runner.next;
        }
    }

    deleteList() {
        this.head = null;
        return;
    }

}


// Tests
mySSL = new SSL();
mySSL.addFront(5);
mySSL.addFront(7);
mySSL.addFront(-3);
mySSL.addFront(12);
mySSL.addFront(99);
mySSL.addFront(-4);
mySSL.addBack(2);
mySSL.insertAt(6,3);
mySSL.removeAt(4);
mySSL.printValues();
console.log(mySSL.containsValue(6));
console.log(mySSL.containsValue(0));
console.log(mySSL.getLength());
console.log(mySSL.findMax());
console.log(mySSL.findMin());
console.log(mySSL.findAvg());
mySSL.userList();
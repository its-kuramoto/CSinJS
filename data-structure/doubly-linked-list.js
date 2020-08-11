function Node(data) {
  this.data = data;
  this.next = null;
  this.previous = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.addNode = function(data) {
  const node = new Node(data)
  if (!this.head) {
    this.tail = node;
    this.head = node;
  } else {
    node.previouse = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
  this.length++;
}

DoublyLinkedList.prototype.insertAfter = function(data, toNodeData) {
  let current = this.head;
  while (current) {
    if (current.data === toNodeData) {
      const node = new Node(data);
      if (current === this.tail) {
        this.addNode(data);
      } else {
        current.next.previous = node;
        node.previous = current;
        node.next = current.next;
        current.next = node;
        this.length++;
      }
    }
    current = current.next;
  }
}

DoublyLinkedList.prototype.removeNode = function(data) {
  let current = this.head;
  while (current) {
    if (current.data === data) {
      if (current === this.head && current === this.tail) {
        this.head = null;
        this.tail = null;
      } else if (current === this.head) {
        this.head = this.head.next;
        this.head.previous = null;
      } else if (current === this.tail) {
        this.tail = this.tail.previous;
        this.tail.next = null;
      } else {
        current.precious.next = current.next;
        current.next.previous = current.precious;
      }
      this.length--;
    }
    current = current.next;
  }
}

const list = new DoublyLinkedList();

list.addNode(20);
list.addNode(50);
list.insertAfter(40, 20);
list.insertAfter(30, 20);
list.removeNode(20);
list.removeNode(50);

console.log(list);
/**
 * create Node instance.
 * @constructor
 * @param {number} data
 * @return void
*/
function Node(data) {
  /**
   * @type {string|number} data
   * @type {string|number} next
  */
  this.data = data;
  this.next = null;
}

/**
 * create singlyLinkedList instance.
 * @constructor
 * @return void
*/
function SinglyLinkedList() {
  /**
   * @type {Node} head
   * @type {Node} tail
  */
  this.head = null;
  this.tail = null;
}

/**
 * create singlyLinkedList instance.
 * @param {string|number} data
 * @return void
*/
SinglyLinkedList.prototype.addNode = function(data) {

  /**
   * new node
   * @type {Node} node
  */
  const node = new Node(data);

  if(!this.head) {
    this.tail = node;
	  this.head = node;
  } else {
    this.tail.next = node;
	  this.tail = node;
  }
} 

/**
 * insert a new node to the list at the specified location.
 * @param {string|numebr} data
 * @param {string|number} toNodeData
 * @return void
*/
SinglyLinkedList.prototype.insertAfter = function(data, toNodeData) {

  /**
   * set current position
   * @type {Node} current
  */
  let current = this.head;

  while (current) {
    if (current.data === toNodeData) {
      /**
       * new node
       * @type {Node} node
      */
      const node = new Node(data)
      if (current === this.tail) {
        this.tail.next = node;
        this.tail = node
      } else {
        node.next = current.next
        current.next = node
      }
    }
	current = current.next
  }
}

/**
 * remove a target node from the list.
 * @param {string|numebr} data
 * @return void
*/
SinglyLinkedList.prototype.removeNode = function(data) {

  /**
   * @type {Node} previous - set previous position
   * @type {Node} head - set head position
  */
  let previous = this.head;
  let current = this.head;

  while (current) {
    if (current.data === data) {
      if (current === this.head) {
        this.head = this.head.next;
      }
      if (current === this.tail) {
        this.tail = previous;
      }
      previous.next = current.next;
    } else {
      previous = current;
    }
    current = current.next;
  }
}

/**
 * @type {SinglyLinkedList} list - initialize list
*/
const list = new SinglyLinkedList();

list.addNode(32);
list.addNode(53);
list.insertAfter(45, 32);
list.insertAfter(48, 45);
list.removeNode(45);

console.log(list);

function Queue() {
  this.queue = [];
}

// push on the queue
Queue.prototype.enqueue = function(data) {
  // O(1)
  this.queue.push(data);
}

// shift from the queue
Queue.prototype.dequeue = function() {
  console.time("q");
  // O(n)
  this.queue.shift();
  console.timeEnd("q");
}

// instantiate the queue
const queue = new Queue();

// source string
const str = "c".repeat(100); // 0.076ms
// const str = "c".repeat(40000000); // 111.418ms

// convert string to array
Array.prototype.forEach.call(str, function(c) {
  queue.enqueue(c);
})

// shift from the queue
queue.dequeue();
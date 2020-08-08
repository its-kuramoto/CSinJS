// class declaration
function Stack() {
  this.stack = [];
}

// push on the stack
Stack.prototype.push = function(data) {
  // O(1)
  this.stack.push(data);
}

// pop from the stack
Stack.prototype.pop = function() {
  // O(1)
  this.stack.pop();
}

Stack.prototype.search = function(target) {
  // O(n)
  return this.stack.find(function(s) {
    console.log(s);
    return s == target;
  })
}

// instantiate the stack
const stack = new Stack();

// source string
const str = "Stack";

// push the source string
Array.prototype.forEach.call(str, function(s) {
  stack.push(s);
})

// search  from the stack
stack.search("a");

// pop from the stack
stack.pop();
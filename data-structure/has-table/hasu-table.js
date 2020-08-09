function HashTable() {
  this.values = {};
  this.length = 0;
  this.size = 0;
}

HashTable.prototype.calculateHash = function(key) {
  return key.toString().length % this.size;
}

HashTable.prototype.add = function(key, value) {
  const hash = this.calculateHash(key)
  if (!this.values.hasOwnProperty(hash)) {
    this.values[hash] = {}
  }
  if (!this.values[hash].hasOwnProperty(key)) {
    this.length++
  }
  this.values[hash][key] = value;
}

HashTable.prototype.search = function(key) {
  const hash = this.calculateHash(key);
  if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
    return this.values[hash][key];
  } else {
    return null;
  }
}

const source = {
  "lydia": "NL",
  "sarah": "US",
  "Emil": "SE",
  "Mara": "BN"
}

const hashTable = new HashTable();
hashTable.size = 5;

Object.keys(source).forEach(function(key){
  console.log(key)
  hashTable.add(key, source[key]);
})

console.log(hashTable);
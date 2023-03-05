const stack = {
  elements: [],
  top: -1, // is empty
  push: function(element) {
    this.top++;
    this.elements[this.top] = element;
  },
  pop: function() {
    if (this.top === -1) {
      return null;
    }
    delete this.elements[this.top]
    this.top--;
  }
}

module.exports = { stack }

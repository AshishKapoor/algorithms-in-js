const { LinkedList } = require("./src/linkedList");

const linkedList = new LinkedList();

linkedList.addToTail(12)
console.log('linkedList: add to tail', linkedList);

console.log(linkedList.getSize())

linkedList.removeFromTail(12)
console.log('linkedList: remove from tail', linkedList);

const { Queue } = require('./src/queue');

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue);

queue.dequeue();

console.log(queue);

const LinkedList = require('./linked-list-class');
const { display, size, isEmpty, findPrevious, findLast } = require('./linkedList-functions');



// Mystery program
// loops through the nodes and removes duplicate valuse
// O(n^2) because it uses nested loops.

// Reverse a list

function reverseList(list) {

  let currNode = list.head;
  let previousNode = null;
  let nextNode = list.head;

  while (currNode !== null) {
    nextNode = currNode.next;
    currNode.next = previousNode;
    previousNode = currNode;
    currNode = nextNode;
  }
  list.head = previousNode;
}

// Third from the end

function thirdFromEnd(list) {
  if (!list.head || !list.head.next.next) {
    return null;
  }

  let currNode = list.head;
  while (currNode.next.next.next !== null) {
    currNode = currNode.next;
  }
  console.log(`The third item from the end is ${currNode.value}`);
}






function main() {

  let SLL = new LinkedList();



  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');

  display(SLL);
  
  reverseList(SLL);
  display(SLL);
  thirdFromEnd(SLL);


  display(SLL);
}

main();
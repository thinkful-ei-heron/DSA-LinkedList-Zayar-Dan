class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  insertBefore(key, item) {
    let currNode = this.find(key)
    let tempNode = new _Node(currNode.value, currNode.next)
    currNode.value = item
    currNode.next = tempNode

  }

  insertAfter(key, item) {
    let currNode = this.find(key)
    let tempNode = new _Node(item, currNode.next)
    tempNode.next = currNode.next
    currNode.next = tempNode

  }

  insertAt(position, item) {
    let currNode = this.head
    for (let i = 0; i <= position; i++) {
      currNode = currNode.next
    }
    let tempNode = new _Node(currNode.value, currNode.next)
    currNode.value = item
    currNode.next = tempNode

  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}


function main() {
  let ll = new LinkedList();
  ll.insertFirst('Apollo');
  ll.insertLast('Boomer');
  ll.insertLast('Helo');
  ll.insertLast('Husker');
  ll.insertLast('Starbuck');
  ll.insertLast('Tauhida');

  ll.remove('squirrel');

  ll.insertBefore('Boomer', 'Athena');

  ll.insertAfter('Helo', 'Hotdog');

  ll.insertAt(3, 'Kat')

  ll.remove('Tauhida')
  display(ll)
  console.log(size(ll))
  console.log(isEmpty(ll));
  console.log(findPrevious(ll, 'Starbuck'));
  console.log(findPrevious(ll, 'does not exist'));
  console.log(findLast(ll));
}

function size(ll) {
  if (!ll.head) return 0
  let size = 0
  currNode = ll.head
  while (currNode.next !== null) {
    size += 1
    currNode = currNode.next
  }
  return size
}

function display(ll) {
  console.log('_________________Linked list:_____________________');
  let currNode = ll.head;
  while(currNode.next !== null){
    console.log(currNode.value);
    currNode = currNode.next;
  }
  console.log(currNode.value);
}

function isEmpty(ll) {
  return !ll.head;
}

function findPrevious(ll, item){
  let currNode = ll.head;
  while(currNode.next !== null && currNode.next.value !== item){
        currNode = currNode.next;

  }
  if(currNode.next === null) return false;
  else return currNode;
}

function findLast(ll) {
  let currNode = ll.head;
  while(currNode.next !== null) {
    currNode = currNode.next
  }
  return currNode;
}

main();
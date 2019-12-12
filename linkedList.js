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
  // display(ll)
  // console.log(size(ll))
  // console.log(isEmpty(ll));
  // console.log(findPrevious(ll, 'Starbuck'));
  // console.log(findPrevious(ll, 'does not exist'));
  // console.log(findLast(ll));
  // display(reverseList(ll));
  // console.log(find3rdLast(ll))
  // console.log(testMiddle(ll));
  // console.log(middleList(ll));

  const goodNode1 = new _Node('1', null)
  const badNode = new _Node('3', null)
  const goodNode2 = new _Node('2', null)

  let cyclicalList = new LinkedList()
  cyclicalList.head = goodNode1;
  goodNode1.next = goodNode2;
  goodNode2.next = goodNode1;

  console.log(checkCycle(ll));
  console.log(checkCycle(cyclicalList));
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

function recursiveReverse(ll, currNode) {
  let currNode = null
  if (!currNode) {
    let currNode = ll.head
  } else {
    let currNode = currNode
  }

}

function reverseList(ll) {
  let currNode = ll.head;
  while(currNode.next !== null) {
    let tempNode = currNode.next;
    currNode.next = currNode.next.next;
    tempNode.next = ll.head;
    ll.head = tempNode;
  }
  return ll;
}

function find3rdLast(ll) {
  let currNode = ll.head;
  while(currNode.next.next.next !== null) {
    currNode = currNode.next
  }
  return currNode;
}

function middleList(ll) {
  let currNode = ll.head
  let count = 1
  while (ahead !== null) {
    let ahead = currNode.next
    for (let i = 0; i < count; i++) {
      ahead = currNode.next
      count += 1
    }
  }
  return currNode

}

 function testMiddle(ll){
   let currNode = ll.head;
   let lookAhead=currNode;
   while(lookAhead.next !== null && lookAhead.next.next !== null ){
     currNode = currNode.next;
     lookAhead=lookAhead.next.next;
   }
   return currNode;
 }

 function checkCycle(ll) {
   let prevNodes = []
   let currNode = ll.head;
   while(currNode.next !== null){
     if(prevNodes.includes(currNode)) return true;
     prevNodes.push(currNode);
     currNode = currNode.next;
   }
   return false;
 }

main();

//4. Mystery program
// Goes through linked list and finds duplicates of all node's values and removes nodes with duplicate values. Polynomial O(n2)

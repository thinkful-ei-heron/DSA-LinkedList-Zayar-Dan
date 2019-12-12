class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head, null);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null, tempNode);
    }
  }

  insertBefore(key, item) {
    let currNode = this.find(key)
    let tempNode = new _Node(item, currNode, currNode.prev)
    currNode.prev.next = tempNode
    currNode.prev = tempNode;

  }

  insertAfter(key, item) {
    let currNode = this.find(key)
    let tempNode = new _Node(item, currNode.next, currNode)
    currNode.next.prev = tempNode
    currNode.next = tempNode;


  }

  insertAt(position, item) {
    let currNode = this.head
    for (let i = 0; i <= position; i++) {
      currNode = currNode.next
    }
    let tempNode = new _Node(item, currNode, currNode.prev)
    currNode.prev.next = tempNode
    currNode.prev = tempNode;

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



  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      this.head.prev = null;
      return;
    }
    // Start at the head
    let currNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    currNode.prev.next = currNode.next;
    currNode.next.prev = currNode.prev;
  }
}


function mainDll() {
  let dll = new DoublyLinkedList();
  dll.insertFirst('Aquaria');
  dll.insertLast('Caprica');
  dll.insertLast('Gemenon');
  dll.insertLast('Picon');
  dll.insertLast('Sagittaron');
  dll.insertLast('Tauron');
  dll.remove('Picon');
  display(dll)
  testReverseDLL(dll)
  display(dll)
}

function display(ll) {
  console.log('_________________Linked list:_____________________');
  let currNode = ll.head;
  while (currNode.next !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
  console.log(currNode.value);
}

function reverseDLL(ll) {
  let currNode = ll.head;
  while (currNode.next !== null) {
    let tempNode = currNode.next;
    if (currNode.next.next !== null) {
      currNode.next.next = currNode
      currNode.next.prev = currNode.next.next
    }



    currNode.next.prev = currNode;
    ll.head.prev = tempNode;
    tempNode.next = ll.head;
    tempNode.prev=null;
    ll.head = tempNode;
  }
  return ll;
}

function testReverseDLL(ll) {
  let currNode = ll.head;
  while (currNode.next !== null) {
    let tempNode = currNode.next;
    if (currNode.next.next !== null) {
      currNode.next.next.prev = currNode
      currNode.next = currNode.next.next
    }
    else currNode.next = null;

    tempNode.next = ll.head;
    tempNode.prev = null;
    ll.head.prev = tempNode;
    ll.head = tempNode;
  }
  return ll;
}

mainDll();
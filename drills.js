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
    }
    else {
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
        }
        else {
            // Otherwise, keep looking 
            currNode = currNode.next;
        }
    }
    // Found it
    return currNode;
  }

  remove(item){ 
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

    while ((currNode !== null) && (currNode.value !== item)) {
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
  insertBefore(newItem, oldItem) {
    // If the list is empty
    if (!oldItem) {
      return this.insertFirst(newItem);
    }
    let tempNode = this.head;
    let oldNode = this.find(oldItem)
    let newNode = new _Node(newItem, oldNode)
    while(tempNode.next !== null){
      if(tempNode.next.value === oldNode.value) {
        break;
      }
      tempNode = tempNode.next;
    }
    tempNode.next = newNode;
  }
  insertAfter(newItem, oldItem) {
    let oldNode = this.find(oldItem)
    let newNode = new _Node(newItem, oldNode.next)
    oldNode.next = newNode
  }
  insertAt(newItem, pos) {
    let tempNode = this.head;
    for(let i = 1; i<pos; i++){
      if(!tempNode){
        return 'Postion out of bounds'
      }
      tempNode = tempNode.next
    }
    this.insertBefore(newItem, tempNode.value)
  }
  loop(newItem) {
    let tempNode = this.head;
    while (tempNode.next !== null) {
        tempNode = tempNode.next;
    }
    tempNode.next = new _Node(newItem, this.head);
  }
}

function display(list){
  let tempNode = list.head
  while(tempNode !== null) {
    console.log(tempNode)
    tempNode = tempNode.next
  }
}

function size(list) {
  let tempNode = list.head
  let counter = 0
  while(tempNode !== null) {
    counter++
    tempNode = tempNode.next
  }
  return counter
}

function isEmpty(list) {
  if(!list.head) {
    return true
  }
  else return false
}

function findPrevious(list, string) {
  let tempNode = list.head;
  while(tempNode.next !== null){
    if(tempNode.next.value === string) {
      return tempNode
    }
    tempNode = tempNode.next;
  }
}

function findLast(list) {
  let tempNode = list.head;
  while(tempNode.next !== null){
    tempNode = tempNode.next;
  }
  return tempNode
}

function main() {
  const SLL = new LinkedList();
  const list = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');
  SLL.insertFirst('Tauhida');
  SLL.insertBefore('taylor', 'Husker');
  SLL.insertAfter('jaye', 'Boomer');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');
  display(SLL)
  console.log(size(SLL))
  console.log(isEmpty(SLL))
  console.log(isEmpty(list))
  console.log(findPrevious(SLL, 'jaye'))
  console.log(findLast(SLL))
}

//main();

/**
 * 4. Mystery Program - This function 'rotates' the list one data point forward. time complexity O(n^2)
 * 
 * function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
 * 5. Reverse a list
   input: 1-2-3
   output: 3-2-1

   method: 
   declare previous =this.head
           current=this.head
   use while(current.next !== null)
   inside: previous.value = current.next.value
   end of while loop: previous = current, current = current.next

  const reverseList = (list) => {
  if(list.head.next === null) {
    return list.head;
  }
  let tempNode = list.head


  return reverseList() + tempNode
}

6. 3rd from the end - while(tempNode.next.next !== null) return tempNode
  func thirdFromEnd(list){
    let tempNode = list.head
    while(tempNode.next.next !== null) {
      tempNode = tempNode.next
    }
    return tempNode;
  }

  7. Middle of List - run a while loop to count the entries in list = x, counter = Math.floor(x/2), run while( tempNode<=counter){tempNode = tempNode.next} afterwards return tempNode;


  8. while loop for every value
     current node = list.head
        while loop for every other value except current
          if newNode.value = currentNode.value return true
          new node = new node .next
      current node = current node .next

     return false
 */

 function cycle(list) {
   let current = list.head
   while(current !== null) {
      let newNode = current.next
      while(newNode !== null){
        if(newNode === current){ 
            return true
        }
        newNode = newNode.next
      }
      current = current.next
   }
   return false
 }

 function main2() {
   const link = new LinkedList()
   link.insertFirst('3')
   link.insertFirst('2')
   link.insertFirst('1')
   link.loop('4')
   console.log(cycle(link))
 }
 //main2()

 class _Node2 {
  constructor(previous, value, next) {
      this.value = value;
      this.next = next;
      this.previous = previous;
  }
}

 class DoubleLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  insertFirst(item) {
    this.head = new _Node2(null, item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
        this.insertFirst(item);
    }
    else {
        let tempNode = this.head;
        while (tempNode.next !== null) {
            tempNode = tempNode.next;
        }
        tempNode.next = new _Node2(tempNode, item, null);
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
        }
        else {
            // Otherwise, keep looking 
            currNode = currNode.next;
        }
    }
    // Found it
    return currNode;
  }

  remove(item){ 
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

    while ((currNode !== null) && (currNode.value !== item)) {
        currNode = currNode.next;
    }
    if (currNode === null) {
        console.log('Item not found');
        return;
    }
    let previousNode = currNode.previous;
    currNode.next.previous = previousNode
    previousNode.next = currNode.next
    
    
  }

  insertBefore(newItem, oldItem) {
    // If the list is empty
    if (!oldItem) {
      return this.insertFirst(newItem);
    }
    let tempNode = this.head;
    let oldNode = this.find(oldItem)
    let newNode = new _Node2(oldNode.previous, newItem, oldNode)
    while(tempNode.next !== null){
      if(tempNode.next.value === oldNode.value) {
        break;
      }
      tempNode = tempNode.next;
    }
    tempNode.next = newNode;
    oldNode.previous = newNode;
  }

  insertAfter(newItem, oldItem) {
    let oldNode = this.find(oldItem)
    let newNode = new _Node2(oldNode, newItem, oldNode.next)
    oldNode.next.previous = newNode
    oldNode.next = newNode
  }

  insertAt(newItem, pos) {
    let tempNode = this.head;
    for(let i = 1; i<pos; i++){
      if(!tempNode){
        return 'Postion out of bounds'
      }
      tempNode = tempNode.next
    }
    this.insertBefore(newItem, tempNode.value)
  }
}

function main3() {
  const DLL = new DoubleLinkedList()
  DLL.insertLast('Aquarius')
  DLL.insertLast('Capricorn')
  DLL.insertLast('Leo')
  DLL.remove('Capricorn')
  display(DLL)
}

main3()
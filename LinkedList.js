class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head')
  }

  findByValue(item) {
    let currentNode = this.head.next
    // head 是一个哨兵
    while (currentNode.element !== item && currentNode !== null) {
      currentNode = currentNode.next
    }
    
    return currentNode ? currentNode.element : -1
  }

  findByIndex(index) {
    let pos = 0
    let currentNode = this.head.next
    while (index !== pos && currentNode) {
      currentNode = currentNode.next
      pos++
    }
    return currentNode ? currentNode.element : -1
  }

  append(newElement) {
    const newNode = new Node(newElement)
    let currentNode = this.head

    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode
  }
}

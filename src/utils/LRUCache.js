// Define a node class for the doubly linked list
class Node {
  constructor(id, name) {
    this.id = id
    this.name = name
    this.prev = null
    this.next = null
  }
}

let instance

// Define a LRU cache class
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity // The maximum number of items in the cache
    this.map = new Map() // The hash map to store the id-name pairs
    this.head = null // The head of the doubly linked list
    this.tail = null // The tail of the doubly linked list
    if (instance) {
      throw new Error('You can only create one instance!')
    }
    instance = this
  }

  // Get the name of a id from the cache
  get(id) {
    // If the id is not in the map, return -1
    if (!this.map.has(id)) {
      return -1
    }

    // Get the node from the map
    let node = this.map.get(id)

    // If the node is not the head, move it to the front of the list
    if (node !== this.head) {
      this.removeNode(node) // Remove the node from its current position
      this.addNode(node) // Add the node to the front of the list
    }

    // Return the name of the node
    return node.name
  }

  // Put a id-name pair into the cache
  put(id, name) {
    console.log('this.map:', this.map)
    // If the id is already in the map, update its name and move it to the front of the list
    if (this.map.has(id)) {
      let node = this.map.get(id)
      node.name = name
      if (node !== this.head) {
        this.removeNode(node) // Remove the node from its current position
        this.addNode(node) // Add the node to the front of the list
      }
    } else {
      // If the id is not in the map, create a new node and add it to the front of the list
      let node = new Node(id, name)
      this.map.set(id, node) // Add the id-name pair to the map
      this.addNode(node) // Add the node to the front of the list
      console.log('this.map:', this.map)

      // If the cache is full, remove the least recently used item from the tail of the list and delete it from the map
      if (this.map.size > this.capacity) {
        let tail = this.tail
        this.removeNode(tail) // Remove the tail node from the list
        this.map.delete(tail.id) // Delete the id-name pair from the map
      }
    }
  }

  // Helper method to remove a node from the doubly linked list
  removeNode(node) {
    // If the node is the head, update the head pointer
    if (node === this.head) {
      this.head = node.next
    }

    // If the node is the tail, update the tail pointer
    if (node === this.tail) {
      this.tail = node.prev
    }

    // If the node has a previous node, update its next pointer
    if (node.prev) {
      node.prev.next = node.next
    }

    // If the node has a next node, update its prev pointer
    if (node.next) {
      node.next.prev = node.prev
    }
  }

  // Helper method to add a node to the front of the doubly linked list
  addNode(node) {
    // If the list is empty, set the node as the head and the tail
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      // If the list is not empty, insert the node before the head and update the head pointer
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
  }
}

// const LRU = Object.freeze(new LRUCache())
const LRU = new LRUCache(3)
export default LRU

// LRU cache with capacity 3
//   const lru = new LRUCache(3)
//   lru.put(1, 'A')
//   lru.put(2, 'B')
//   lru.put(3, 'C')
//   lru.put(4, 'D')
//   console.log(lru.get(1))
//   console.log(lru.get(4))
//   console.log(lru.map)

/* Output: 
  -1 
  D
  */

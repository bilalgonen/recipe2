// Define a node class for the doubly linked list
class Node {
  constructor(id, name) {
    this.id = id
    this.name = name
    this.prev = null
    this.next = null
  }
}

// Define a LRU cache class
export class LRUCache {
  constructor(capacity) {
    this.capacity = capacity // The maximum number of items in the cache
    this.map = new Map() // The hash map to store the key-value pairs
    this.head = null // The head of the doubly linked list
    this.tail = null // The tail of the doubly linked list
  }

  // Get the value of a key from the cache
  get(key) {
    // If the key is not in the map, return -1
    if (!this.map.has(key)) {
      return -1
    }

    // Get the node from the map
    let node = this.map.get(key)

    // If the node is not the head, move it to the front of the list
    if (node !== this.head) {
      this.removeNode(node) // Remove the node from its current position
      this.addNode(node) // Add the node to the front of the list
    }

    // Return the value of the node
    return node.value
  }

  // Put a key-value pair into the cache
  put(key, value) {
    // If the key is already in the map, update its value and move it to the front of the list
    if (this.map.has(key)) {
      let node = this.map.get(key)
      node.value = value
      if (node !== this.head) {
        this.removeNode(node) // Remove the node from its current position
        this.addNode(node) // Add the node to the front of the list
      }
    } else {
      // If the key is not in the map, create a new node and add it to the front of the list
      let node = new Node(key, value)
      this.map.set(key, node) // Add the key-value pair to the map
      this.addNode(node) // Add the node to the front of the list

      // If the cache is full, remove the least recently used item from the tail of the list and delete it from the map
      if (this.map.size > this.capacity) {
        let tail = this.tail
        this.removeNode(tail) // Remove the tail node from the list
        this.map.delete(tail.key) // Delete the key-value pair from the map
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

class Node {
  constructor(number) {
    this.value = number
    this.left = null
    this.right = null
  }

  addChildren = node => {
    if (this.value == node.value) {
      this.right = node
      return
    }

    if (node.value < this.value) {
      if (this.left == null) {
        this.left = node
      } else {
        this.left.addChildren(node)
      }
    } else if (node.value > this.value) {
      if (this.right == null) {
        this.right = node
      } else {
        this.right.addChildren(node)
      }
    }
  }
}

class BST {
  constructor() {
    this.root = null
  }

  addNode = value => {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
    } else {
      this.root.addChildren(newNode)
    }
  }
}

const Tree = new BST()
// root node
Tree.addNode(10)
// left and right
Tree.addNode(5)
Tree.addNode(15)
// right side nodes
Tree.addNode(13)
Tree.addNode(22)
Tree.addNode(14)
// left side nodes
Tree.addNode(2)
Tree.addNode(5)
Tree.addNode(1)

module.exports = Tree

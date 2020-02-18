const Tree = require('./Tree')
console.log({ Tree })

// Iterative solution
// Average: O(log(n)) time | O(1) space
// Worse: O(n) time | O(1) space
function findClosestValue(tree, target, closest) {
  cirrentNode = tree

  while (cirrentNode) {
    if (Math.abs(target - closest) > Math.abs(target - cirrentNode.value)) {
      closest = cirrentNode.value
    }
    if (target < cirrentNode.value) {
      cirrentNode = cirrentNode.left
    } else if (target > cirrentNode.value) {
      cirrentNode = cirrentNode.right
    } else {
      break
    }
  }

  return closest
}

console.log(findClosestValue(Tree.root, 12, Tree.root.value))

// Recursive solution
// Average: O(log(n)) time | O(log(n)) space
// Worse: O(n) time | O(n) space
// function traverseTreeHelper(tree, target, closest) {
//   if (!tree) {
//     return closest
//   }

//   if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
//     closest = tree.value
//   }
//   if (target < tree.value) {
//     return traverseTreeHelper(tree.left, target, closest)
//   } else if (target > tree.value) {
//     return traverseTreeHelper(tree.right, target, closest)
//   }

//   return closest
// }

// function findClosestValue(tree, target) {
//   return traverseTreeHelper(tree.root, target, tree.root.value)
// }

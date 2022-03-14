class TreeNode {
  left: TreeNode;
  right: TreeNode;
  value;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  private root: TreeNode;

  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (current) {
      if (value === current.value) return;

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }

        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }

        current = current.right;
      }
    }
  }

  find(value): TreeNode {
    if (!this.root) return;
    let current = this.root;
    let found = null;

    while (current && !found) {
      if (value === current.value) {
        found = current;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return found;
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  private removeNode(current, value) {
    if (current === null) return current;

    if (value === current.value) {
      if (current.left === null && current.right === null) {
        return null;
      } else if (current.left === null) {
        return current.right;
      } else if (current.right === null) {
        return current.left;
      } else {
        let tempNode = this.kthSmallestNode(current.right);
        current.value = tempNode.value;
        current.right = this.removeNode(current.right, tempNode.value);
        return current;
      }
    } else if (value < current.value) {
      current.left = this.removeNode(current.left, value);
      return current;
    } else {
      current.right = this.removeNode(current.right, value);
      return current;
    }
  }

  kthSmallestNode(node): TreeNode {
    while (!node.left === null) node = node.left;

    return node;
  }
}

const binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(2).insert(1).insert(3).insert(4);

console.log(binarySearchTree);

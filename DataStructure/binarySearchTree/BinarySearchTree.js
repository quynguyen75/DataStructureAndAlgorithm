var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.insert = function (value) {
        var newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (current) {
            if (value === current.value)
                return;
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
            else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    };
    BinarySearchTree.prototype.find = function (value) {
        if (!this.root)
            return;
        var current = this.root;
        var found = null;
        while (current && !found) {
            if (value === current.value) {
                found = current;
            }
            else if (value < current.value) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        return found;
    };
    BinarySearchTree.prototype.remove = function (value) {
        this.root = this.removeNode(this.root, value);
    };
    BinarySearchTree.prototype.removeNode = function (current, value) {
        if (current === null)
            return current;
        if (value === current.value) {
            if (current.left === null && current.right === null) {
                return null;
            }
            else if (current.left === null) {
                return current.right;
            }
            else if (current.right === null) {
                return current.left;
            }
            else {
                var tempNode = this.kthSmallestNode(current.right);
                current.value = tempNode.value;
                current.right = this.removeNode(current.right, tempNode.value);
                return current;
            }
        }
        else if (value < current.value) {
            current.left = this.removeNode(current.left, value);
            return current;
        }
        else {
            current.right = this.removeNode(current.right, value);
            return current;
        }
    };
    BinarySearchTree.prototype.kthSmallestNode = function (node) {
        while (!node.left === null)
            node = node.left;
        return node;
    };
    return BinarySearchTree;
}());
var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(2).insert(1).insert(3).insert(4);
console.log(binarySearchTree);

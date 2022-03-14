var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return LinkedListNode;
}());
export { LinkedListNode };
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
    }
    LinkedList.prototype.prepend = function (value) {
        var newNode = new LinkedListNode(value);
        newNode.next = this.head;
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        return this;
    };
    LinkedList.prototype.append = function (value) {
        var newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    };
    LinkedList.prototype.insert = function (value, index) {
        if (index === 0) {
            return this.prepend(value);
        }
        else if (value < 0) {
            throw new Error("Index must >= 0");
        }
        var currentIndex = 1;
        var currentNode = this.head;
        var newNode = new LinkedListNode(value);
        while (currentNode) {
            if (currentIndex === index)
                break;
            currentIndex++;
            currentNode = currentNode.next;
        }
        if (currentNode) {
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
        return this;
    };
    LinkedList.prototype["delete"] = function (value) {
        if (!this.head) {
            return null;
        }
        // check head
        if (this.head.value === value) {
            this.head = this.head.next;
            return this.head;
        }
        var deletedNode = null;
        var currentNode = this.head;
        while (currentNode) {
            if (currentNode.next.value === value) {
                deletedNode = currentNode.next;
                currentNode.next = deletedNode.next;
                break;
            }
            currentNode = currentNode.next;
        }
        // checl tail
        if (this.tail.value === value) {
            this.tail = currentNode;
        }
        return deletedNode;
    };
    LinkedList.prototype.find = function (_a) {
        var _b = _a.value, value = _b === void 0 ? undefined : _b, _c = _a.callback, callback = _c === void 0 ? undefined : _c;
        if (!this.head) {
            return null;
        }
        var currentNode = this.head;
        while (currentNode) {
            if (callback && callback(currentNode.value)) {
                return currentNode;
            }
            if (value !== undefined && currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    };
    LinkedList.prototype.toArray = function () {
        var array = [];
        var currentNode = this.head;
        while (currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    };
    LinkedList.prototype.toString = function () {
        return this.toArray().toString();
    };
    return LinkedList;
}());
export { LinkedList };
var list = new LinkedList();
list.append(1).append(2).append(3);
console.log(list.toString()); // 1,2,3

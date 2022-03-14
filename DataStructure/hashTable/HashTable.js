import { LinkedList, LinkedListNode } from "../linkedList/LinkedList.js";
var HashTable = /** @class */ (function () {
    function HashTable(bucketSize) {
        this.buckets = Array(bucketSize)
            .fill(null)
            .map(function (item) { return new LinkedList(); });
    }
    HashTable.prototype.hash = function (key) {
        var hashIndex = Array.from(key).reduce(function (hashAccumulator, keySymbol) { return hashAccumulator + keySymbol.charCodeAt(0); }, 0);
        return hashIndex % this.buckets.length;
    };
    HashTable.prototype.set = function (key, value) {
        var keyHash = this.hash(key);
        var bucketLinkedList = this.buckets[keyHash];
        var node = new LinkedListNode({
            key: key,
            value: value
        });
        bucketLinkedList.append(node);
    };
    HashTable.prototype.get = function (key) {
        var bucketLinkedList = this.buckets[this.hash(key)];
        var node = bucketLinkedList.find({
            callback: function (nodeValue) { return nodeValue.key === key; }
        });
        return node ? node.value.value : undefined;
    };
    HashTable.prototype["delete"] = function (key) {
        var hash = this.hash(key);
        var bucketLinkedList = this.buckets[hash];
        var node = bucketLinkedList.find({
            callback: function (nodeValue) { return nodeValue.key === key; }
        });
        if (node) {
            return bucketLinkedList["delete"](node.value);
        }
        return null;
    };
    return HashTable;
}());
var hashTable = new HashTable(32);
hashTable.set("A", 10);
hashTable.set("B", 20);
hashTable.set("C", 30);
console.log(hashTable);

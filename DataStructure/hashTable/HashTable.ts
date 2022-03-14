import { LinkedList, LinkedListNode } from "../linkedList/LinkedList.js";

class HashTable {
  private buckets: LinkedList[];

  constructor(bucketSize: number) {
    this.buckets = Array(bucketSize)
      .fill(null)
      .map((item) => new LinkedList());
  }

  private hash(key: string) {
    const hashIndex = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
      0
    );

    return hashIndex % this.buckets.length;
  }

  set(key: string, value) {
    const keyHash = this.hash(key);
    const bucketLinkedList = this.buckets[keyHash];

    const node = new LinkedListNode({
      key,
      value,
    });

    bucketLinkedList.append(node);
  }

  get(key: string) {
    const bucketLinkedList = this.buckets[this.hash(key)];

    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    return node ? node.value.value : undefined;
  }

  delete(key) {
    const hash = this.hash(key);
    const bucketLinkedList = this.buckets[hash];
    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    if (node) {
      return bucketLinkedList.delete(node.value);
    }

    return null;
  }
}

const hashTable = new HashTable(32);

hashTable.set("A", 10);
hashTable.set("B", 20);
hashTable.set("C", 30);

console.log(hashTable);

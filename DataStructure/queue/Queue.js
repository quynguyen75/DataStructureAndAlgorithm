var Queue = /** @class */ (function () {
    function Queue() {
        this.elements = [];
    }
    Queue.prototype.enqueue = function (value) {
        this.elements.push(value);
        return this;
    };
    Queue.prototype.dequeue = function () {
        if (this.elements.length > 0) {
            this.elements.shift();
        }
        return this;
    };
    Queue.prototype.peek = function () {
        return this.elements[0];
    };
    Queue.prototype.toString = function () {
        return this.elements;
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue(1).enqueue(2).enqueue(3).dequeue();
console.log(queue.toString());

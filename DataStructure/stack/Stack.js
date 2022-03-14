var Stack = /** @class */ (function () {
    function Stack() {
        this.elements = [];
    }
    Stack.prototype.push = function (value) {
        this.elements.push(value);
        return this;
    };
    Stack.prototype.pop = function () {
        this.elements.pop();
        return this;
    };
    Stack.prototype.peek = function () {
        return this.elements[this.elements.length - 1];
    };
    Stack.prototype.toString = function () {
        return this.elements;
    };
    return Stack;
}());
var stack = new Stack();
stack.push(1).push(2).push(3).pop();
console.log(stack.toString());

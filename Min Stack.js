var MinStack = function() {
    this.stack = [];
    this.mini;

};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.stack.length == 0) {
        this.stack.unshift(val);
        this.mini = val;

    } else if(val < this.mini) {
        this.stack.unshift(2*val - this.mini);
        this.mini = val;

    } else {
        this.stack.unshift(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length == 0) {
        return -1;
    }

    let k = this.stack[0];
    this.stack.shift();

    if(k < this.mini) {
        this.mini = (2*this.mini - k);
        return this.mini;
    } else {
        return k;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let k = this.stack[0];
    if(k < this.mini) {
        return this.mini;

    } else {
        return k;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.stack.lenth == 0) {
        return -1;
    }
    return this.mini;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
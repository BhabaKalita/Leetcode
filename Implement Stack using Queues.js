var MyStack = function() {
    this.q1 = [];
    this.q2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {

    while(this.q1.length > 0) {
        this.q2.push(this.q1.shift());
    }

    this.q1.push(x);

    while(this.q2.length > 0) {
        this.q1.push(this.q2.shift());
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(this.q1.length == 0) {
        return -1;
    }
    let ans = this.q1[0];
    this.q1.shift();
    return ans;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let tp = this.q1[0];
    return tp;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length == 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
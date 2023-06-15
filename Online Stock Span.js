var StockSpanner = function() {
    this.price = [];
    this.span = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    
    let span = 1;
    let i = this.price.length - 1;

    while(i >=0 && price >= this.price[i]) {
        span += this.span[i];
        i -= this.span[i];
    }
    this.price.push(price);
    this.span.push(span);

    return span;
};



const stockSpanner = new StockSpanner();

console.log(stockSpanner.next(100)); // returns 1
console.log(stockSpanner.next(80)); // returns 1
console.log(stockSpanner.next(60)); // returns 1
console.log(stockSpanner.next(70)); // returns 2
console.log(stockSpanner.next(60)); // returns 1
console.log(stockSpanner.next(75)); // returns 4
console.log(stockSpanner.next(85)); // returns 6
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let deficit = 0;
    let capacity = 0;
    let start = 0;

    for(let i=0; i<gas.length; i++) {
        capacity += gas[i] - cost[i];

        if(capacity < 0) {
            deficit += capacity;
            start = i+1;
            capacity = 0;
        }

    }
    return (capacity + deficit >= 0 ? start : -1);
};

// let gas = [1,2,3,4,5], cost = [3,4,5,1,2];
let gas = [2,3,4], cost = [3,4,3]

console.log(canCompleteCircuit(gas, cost));
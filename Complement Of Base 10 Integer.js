// let num = 5;
// let ans = 0;
// for (let i = 0; num > 0; i++) {
//     // console.log("Num "+num)
//     ans += Math.pow(2, i) * (!(num % 2));
//     console.log("Answer "+i+"->"+ans + "->"+!(num % 2));
//     num = Math.floor(num / 2);
// }

var findComplement = function (num) {
    if (num <= 1) return 1 - num;             
  
    let y;
    // console.log('y0->'+y)
    for (y = 1; y <= num; y *= 2);   
    console.log('y->'+y, num);        
    y--;                                     
    // console.log('y2->'+y);
    return y ^ num;                           
  };
  console.log(findComplement(10));
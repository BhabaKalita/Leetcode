/**
 * Given an integer n, return the number of prime numbers that are strictly less than n.
 * Input: n = 10
    Output: 4
    Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 */

function countPrimes(n) {
  // using sieve of erastosrthenes

  let arr = new Array(n).fill(true);

  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (arr[i]) {
      for (let j = i * i; j < n; j += i) { // 2*2 -> +2 < n(36)
        arr[j] = false;
      }
    }
  }
  let count = 0;
  for (let k = 0; k < arr.length; k++) {
    if (arr[k]) {
      count++;
    }
  }
  return count;
}
// console.log(countPrimes(30));

/**
 * SEGMENTED SEIVE
 */
    
// function segmentedSieve(lower_limit, upper_limit, segment_size) {
//   // Step 1: generate primes up to the square root of upper limit
//   const sqrt_upper_limit = Math.ceil(Math.sqrt(upper_limit));
//   const primes = simpleSieve(sqrt_upper_limit);

//   // Step 2: create an empty list to store prime numbers
//   const primesInRange = [];

//   // Step 3: divide the range into segments
//   for (let low = lower_limit; low <= upper_limit; low += segment_size) {
//     const high = Math.min(low + segment_size - 1, upper_limit);

//     // Step 4: initialize all numbers in the current segment to true
//     const segment = new Array(high - low + 1).fill(true);

//     // Step 5: sieve the segment using primes from step 1
//     for (let i = 0; i < primes.length; i++) {
//       const p = primes[i];
//       if (p * p > high) break;

//       let j = Math.ceil(low / p) * p - low;
//       if (j < 0) j += p;
//       for (; j < segment.length; j += p) {
//         segment[j] = false;
//       }
//     }

//     // Step 6: add prime numbers in the current segment to the list
//     for (let i = 0; i < segment.length; i++) {
//       if (segment[i]) {
//         primesInRange.push(low + i);
//       }
//     }
//   }

//   // Step 7: return the list of prime numbers in the range
//   return primesInRange;
// }

// function simpleSieve(limit) {
//   const primes = new Array(limit + 1).fill(true);
//   primes[0] = primes[1] = false;

//   for (let i = 2; i <= Math.sqrt(limit); i++) {
//     if (primes[i]) {
//       for (let j = i * i; j <= limit; j += i) {
//         primes[j] = false;
//       }
//     }
//   }

//   return primes
//     .map((value, index) => value && index)
//     .filter((value) => value !== false);
// }
function sieveOfEratosthenes(a, b) {
  // Initialize the sieve array with true values
  let sieve = new Array(b - a + 1).fill(true);

  // Mark 0 and 1 as not prime
  if (a <= 1) {
    sieve[0] = false;
    if (a <= 0) {
      sieve[1 - a] = false;
    }
  }

  // Iterate through all numbers up to the square root of b
  for (let i = 2; i * i <= b; i++) {
    // If i is prime, mark all its multiples as not prime
    if (isPrime(i)) {
      for (let j = Math.ceil(a / i) * i; j <= b; j += i) {
        if (j >= a) {
          sieve[j - a] = false;
        }
      }
    }
  }

  // Print all the prime numbers
  for (let i = 0; i < sieve.length; i++) {
    if (sieve[i]) {
      console.log(i + a);
    }
  }
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}


const lower_limit = 22;
const upper_limit = 51;
const segment_size = 100;
const prime = sieveOfEratosthenes(lower_limit, upper_limit, segment_size);
console.log(prime);
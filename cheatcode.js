const A = [1, 2, 2, 3, 4]
new Set(A) /** [1,2,3,4] **/

const A = [1, 2, 2, 3, 4]
// reduce compare first literation to next, and ^  is xor
console.log(A.reduce((a, b) => a ^ b));  /** return [1, 3, 4] because odd/ganjil will not try break each other because, if event/genap like 2 will be break each other **/
  
// instanceof check type of varibale
const a = "Aku string"
console.log(a instanceof String) /** return true **/

const iterable = "Aku"   
console.log([...iterable]) /** ["A","k", "u"] **/

const arra = [1,2,3,4,5,2,6]
// slice(index, howmany)
arra.slice(2, 3) /** return [3,5,4] **/

// to find first index of array
arra.indexOf(2) /** return 1 **/
// to find first index of array
array.lastIndexOf(2) /** return 5 **/ 


function solution(number){
  // convert the number to a roman numeral
  const romanMap = [
    [1000, 'M'],
    [900,  'CM'],
    [500,  'D'],
    [400,  'CD'],
    [100,  'C'],
    [90,   'XC'],
    [50,   'L'],
    [40,   'XL'],
    [10,   'X'],
    [9,    'IX'],
    [5,    'V'],
    [4,    'IV'],
    [1,    'I'],
  ];

  let result = '';
  for (const [value, symbol] of romanMap) {
    while (number >= value) {
      result += symbol;
      number -= value;
    }
  }
  return result;
}

// replace non aphabetic 
const string = "some text"
string.replaceAll(/[^A-Za-z]/g, "")

// pairs number
function sumPairs(ints, s) {
  const seen = new Set();
  for (const num of ints) {
    const complement = s - num;
    if (seen.has(complement)) {
      return [complement, num];
    }
    seen.add(num);
  }
  return undefined;
}

//shuffle array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]];   // Swap elements
  }
  return array;
}

function nextBigger(n) {
  let digits = n.toString().split('').map(Number);

  // Step 1: Find pivot
  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }

  if (i < 0) return -1; // already the biggest permutation

  // Step 2: Find successor
  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j--;
  }

  // Step 3: Swap
  [digits[i], digits[j]] = [digits[j], digits[i]];

  // Step 4: Reverse the suffix
  const result = digits.slice(0, i + 1).concat(digits.slice(i + 1).reverse());

  return parseInt(result.join(''), 10);
}

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

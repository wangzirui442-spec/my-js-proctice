//the operator precedence without parenytheses
console.log(2 + 3 * 4);
console.log(10 - 2 +3);
console.log(20 / 5 * 3);
//with parenytheses
console.log((2 + 3 ) * 4);
console.log(10 - (2 + 3));
console.log(20 / (5 * 2));
//Right-to-left (exponentiation)
console.log(4 ** 3 ** 2);
console.log((2 ** 1) ** 5);  //2*2*2*2*2
//  {} and [] are not involved in calculation
const arr = [10, 20 , 30];
console.log(arr[1] + 5);
const obj = { x: 2 };
console.log(obj.x * 3);

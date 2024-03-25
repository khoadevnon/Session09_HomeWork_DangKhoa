let a = parseInt(prompt("Nhập vào số nguyên a: "));
let b = parseInt(prompt("Nhập vào số nguyên b: "));
let result = 1;
for (let i = 1; i <= b; i++) {
  result *= a;
}
console.log(result);

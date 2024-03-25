let a = parseInt(prompt("Nhập vào số nguyên a: "));
let b = parseInt(prompt("Nhập vào số nguyên b: "));
let c = parseInt(prompt("Nhập vào số nguyên c: "));
let d = parseInt(prompt("Nhập vào số nguyên d: "));
let max = Math.min(a, b, c, d);
for (let i = max; i > 0; i--) {
  if (a % i == 0 && b % i == 0 && c % i == 0 && d % i == 0) {
    console.log(i);
    break;
  }
}

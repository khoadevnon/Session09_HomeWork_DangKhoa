let n = parseInt(prompt("Nhập vào một số nguyên dương: "));
let isPrime = true;
if (n < 2) {
  isPrime = false;
}
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i == 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime);

let n = parseInt(prompt("Nhập vào một số nguyên dương: "));
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += 1 / Math.pow(i, 3);
}
console.log(sum.toFixed(5));

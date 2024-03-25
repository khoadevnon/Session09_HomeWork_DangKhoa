let n = parseInt(prompt("Nhập vào một số nguyên dương: "));
let sum = 0;
for (let i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    sum += i * i;
    if (sum > n) {
      break;
    }
    console.log(i * i);
  }
}

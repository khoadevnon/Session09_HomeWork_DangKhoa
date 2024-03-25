let n = parseInt(prompt("Nhập vào một số nguyên dương: "));
let count = 0;
let i = 2;
while (count < n) {
  let isPrime = true;
  if (i < 2) {
    isPrime = false;
  }
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
    count++;
  }
  i++;
}

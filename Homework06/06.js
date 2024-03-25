/* Viết chương trình yêu cầu người dùng nhập vào một số nguyên dương n bất kỳ, in ra số đảo ngược của số vừa nhập lên màn hình console.
 */
let n = parseInt(prompt("Nhập vào một số nguyên dương: "));
let reverse = 0;
while (n > 0) {
  reverse = reverse * 10 + (n % 10);
  n = Math.floor(n / 10);
}
console.log(reverse);

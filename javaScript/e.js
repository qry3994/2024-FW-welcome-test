let year = Number(prompt('연도 입력'));
let month = Number(prompt('월 입력'));
let day = 0;
if (month === 4 || month === 6 || month === 9 || month === 11) {
  day = 30;
} else if (month === 2) {
  if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    day = 29;
  } else {
    day = 28;
  }
} else {
  day = 31;
}
console.log(day);
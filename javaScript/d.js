let set = 0;
let sum = 0;
while (set === 0) {
  let num = Number(prompt('입력'));
  if (num <= 0) {
    console.log('X');
  } else {
    for (let i = num; i >= 1 ; i--)
      sum += i;
    console.log(sum);
    set = 1;
  }
}
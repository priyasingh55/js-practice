let arr = [1, 2, 10, 30, 45, 0, 12, 9, 5, 6];

export default function middleElementofArray(a) {
  let index = a.length / 2;

  if (a.length % 2 == 0) {
    index = index - 1;
  } else {
    index = parseInt(index);
  }
  return a[index];

}


const x = middleElementofArray([10, 20, 30, 2]);
console.log(x);

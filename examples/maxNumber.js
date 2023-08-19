export default function maxNumber(a) {
  let mx = a[0];

  for (let i = 0; i < a.length; i++) {
    const e = a[i];

    if (e > mx) {
      mx = e;
    }
  }

  return mx;
}

const x = maxNumber([10, 20, 30, 2]);
console.log(x);

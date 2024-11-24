function fibs(params) {
  const arr = [0, 1];
  let flag1 = 0;
  let flag2 = 1;
  if (params === 0) {
    return [];
  }
  if (params === 1) {
    return [0];
  }
  if (params === 2) {
    return arr;
  }
  for (let i = 2; i < params; i++) {
    arr.push(arr[flag1] + arr[flag2]);
    flag1++;
    flag2++;
  }
  return arr;
}

console.log(fibs(1));

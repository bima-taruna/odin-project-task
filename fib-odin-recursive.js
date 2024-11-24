function fibs(params) {
  if (params === 0) return [];

  if (params === 1) return [0];

  if (params === 2) return [0, 1];

  const arr = fibs(params - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}

console.log(fibs(8));

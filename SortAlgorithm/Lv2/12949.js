function solution(arr1, arr2) {
  return arr1.map((arr) => arr2[0].map((_, j) => arr.reduce((acc, num, i) => acc + num * arr2[i][j], 0)));
}
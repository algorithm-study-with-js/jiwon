// 최댓값과 최솟값
function solution(n)  {
  let answer = n.split(' ').map(Number);
  return Math.min(...answer) + ' ' + Math.max(...answer);
}
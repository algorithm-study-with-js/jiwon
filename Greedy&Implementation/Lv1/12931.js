// 자리수 구하기
function solution(n) {
  return n.toString().split('').reduce((acc, cur) => acc + parseInt(cur), 0);
}
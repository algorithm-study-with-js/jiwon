// JadenCase 문자열 만들기
function solution(s) {
  return s.split(' ').map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(' ');
}
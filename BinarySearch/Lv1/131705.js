function solution(number) {
  let answer = 0;

  function dfs(i, cnt, sum) {
    if (i > number.length) return;
    if (cnt === 3) {
      if (sum === 0) answer++;
      return;
    }
    dfs(i + 1, cnt + 1, sum - number[i]);
    dfs(i + 1, cnt, sum);
  }

  dfs(0, 0, 0);
  return answer;
}

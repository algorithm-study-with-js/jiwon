function solution(brown, yellow) {
    let answer = [];
    let total = brown + yellow;
    for (let i = 3; i <= total / i; i++) {
        let x = Math.floor(total / i);
        if((x - 2) * (i - 2) === yellow) {
            answer = [x, i];
            break;
        }
    }
    return answer;
}
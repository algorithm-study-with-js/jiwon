function solution(x) {
    let sum = 0;
    x.toString().split('').forEach((v) => sum += parseInt(v));
    return x % sum === 0;
}
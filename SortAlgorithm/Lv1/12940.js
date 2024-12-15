function solution(n, m) {
    const gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a % b);
    }

    return [gcd(n, m), n * m / gcd(n, m)];
}
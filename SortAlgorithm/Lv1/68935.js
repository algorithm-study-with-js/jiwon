function solution(n) {
    let ternary = [];
    let reversed = 0;
      while (n !== 0) {
          ternary.push(n % 3);
          n = Math.floor(n / 3);
      };
      ternary.reverse().forEach((num, i) => {
          reversed += num * Math.pow(3, i);
      });
      return reversed;
  }
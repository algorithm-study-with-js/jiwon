function solution(cacheSize, cities) {
    let cache = [];
    let time = 0;
    cities.forEach(city => {
        city = city.toLowerCase();
        if (cache.includes(city)) {
            time += 1;
            cache.splice(cache.indexOf(city), 1);
            cache.push(city);
        } else {
            time += 5;
            cache.push(city);
            if (cache.length > cacheSize) {
                cache.shift();
            }
        }
    });
    return time;
}
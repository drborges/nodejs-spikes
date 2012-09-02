var mapped = [1, 2, 3, 4, 5].map(function(item) { return item * item; });
console.log('Arrays.map(func): ' + mapped);

var reduced = mapped.reduce(function(count, item) { return count + item; }, 0);
console.log('Arrays.reduce(func[, initial_value]): ' + reduced);

var even_numbers = mapped.filter(function(item) { return item % 2 == 0; });
console.log('Arrays.filter(func): ' + even_numbers);
---
path: fizzbuzz-menggunakan-javascript
date: 2020-07-15T08:04:52.316Z
title: Implementasi FizzBuzz menggunakan JavaScript
description: "*FizzBuzz* merupakan sebuah programming task yang cukup populer
  dikalangan developer"
---
![FizzBuzz](../assets/fizzbuzz2.jpg "FizzBuzz")

*FizzBuzz* merupakan sebuah programming task yang cukup populer dikalangan developer dan biasanya sering dijadikan pertanyaan saat interviews untuk software developer

**Tipikalnya FizzBuzz seperti ini:**

```
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, 
Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, 
Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...
```

**Implementasi dalam JavaScript:**

```javascript
const fizzBuzz = () => {
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("FizzBuzz");
		} else if (i % 3 === 0) {
			console.log("Fizz");
		} else if (i % 5 === 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
}

fizzBuzz();
```

**Versi pendeknya:**

```javascript
while (i <= 100) {
  console.log(i % 15 ? (i % 5 ? (i % 3 ? i : 'fizz') : 'buzz') : 'fizzbuzz');
  i = i + 1;
}
```
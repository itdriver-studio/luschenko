let a = new Set();
// a.push(2);// no
a.add(1);
a.add(2);
a.add('hi');
a.add('1');
console.log(a);
console.log(a[0]); //undefined
console.log(a.length); //undefined
console.log(a.size); //amount
// a.clear();
// a.delete(2);
console.log(a.has(1));
console.log(a.has(10));
console.log(a);
for (const item of a) {
    console.log(item);
}

let arr = [1, 2, 3, 4, 5, 1, 7, 6, 7, 8, 9];

let b = new Set(arr);
console.log(b);
console.log(b.size);

let bArr = Array.from(b);
console.log(bArr);
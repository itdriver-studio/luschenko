let d1 = document.querySelector('.d1');
const a = {
    "a": 5,
    "b": "hello",
    "z2": "hi",
    "y43": 1999,
};
a.yyyy = 555;
a.b = 'uuu';

console.log(a);
console.log(a.z2);
let k = 'y43';
console.log(a[k]);

// d1.innerHTML = a;

let = 'out';

for (let key in a) {
    d1.innerHTML += key + ' ';
}
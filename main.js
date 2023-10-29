let d1 = document.querySelector('.d1');
const a = {
    "a": 5,
    "b": "hello",
    "z2": "hi",
    "y43": 1999,
};
a.yyyy = 555; // new elem
a.b = 'uuu';

console.log(a);
console.log(a.z2);
let k = 'y43';
console.log(a[k]);

// d1.innerHTML = a;

let out = '';

for (let key in a) {
    out += key + '---' + a[key] + '<br>';
}

d1.innerHTML = out;

delete a.a;
console.log(a);
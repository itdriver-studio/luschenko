let d1 = document.querySelector('.d1');


let a = [2, 3, 5, 3, 69, 75, 2, 1, 56, 32, 76, 3];
let max = a[0];

for (let i = 0; i < a.length; i++) {
    if (a[i] < a[i + 1])
        max = a[i + 1];
}

console.log(max);
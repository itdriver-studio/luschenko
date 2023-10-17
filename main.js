let d1 = document.querySelector('.d1');
let b1 = document.querySelector('.b1');
let liters = document.querySelector('.liters')
let gasAll = document.querySelectorAll('.gas');


d1.style.width = '150px';
d1.style.paddingBottom = '150px';
// d1.style.backgroundColor = '#000';
d1.classList.add('two');
// d1.classList.remove('three');

b1.onclick = function () {
    d1.classList.toggle('three');
    this.classList.toggle('three');
}

console.log(d1.getAttribute('data'));
console.log(document.querySelectorAll('link')[3].getAttribute('href'));

d1.setAttribute('data-num', 6);
for (let i = 0; i < gasAll.length; i++) {
    gasAll[i].onclick = function () {
        console.log(this.getAttribute('data') * liters.value);
    }
}

let a = document.createElement('div');
a.innerHTML = 'hi';
a.classList.add('three');
a.onclick = () => {
    alert('!');
}
console.log(a);
document.querySelector('.test').appendChild(a);
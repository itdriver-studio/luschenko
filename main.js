let i1 = document.querySelector('.i1');
let t1 = document.querySelector('.t1');
let i2 = document.querySelector('.i2');
let b1 = document.querySelector('.b1');
let b2 = document.querySelector('.b2');
let span = document.querySelector('span');

b1.onclick = () => {
    console.log(i1.max);
}

i1.oninput = () => {
    span.innerHTML = i1.value;
}

b2.onclick = () => {
    console.log(`${i2.value} ${i2.checked}`);
}
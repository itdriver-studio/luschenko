let i1 = document.querySelector('.i1');
let b1 = document.querySelector('.b1');

b1.onclick = () => {
    console.log(+i1.value);
    console.log(parseInt(i1.value));
    i1.value = '';
}
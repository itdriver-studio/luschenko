let i1 = document.querySelector('.i1');
let b1 = document.querySelector('.b1');

b1.onclick = () => {
    console.log(+i1.value + 10);
    i1.value = '';
}
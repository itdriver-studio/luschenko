let i1 = document.querySelector('.i1');
let b1 = document.querySelector('.b1');

b1.onclick = () => {
    if (+i1.value >= 16) {
        console.log('welcome');
    } else if (+i1.value == 0) {
        console.log('wow');
    } else {
        console.log('no');
    }
}
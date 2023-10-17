let d1 = document.querySelector('.d1');
let c = 0;
let res = '';
let counter = 3;
while (c < 4) {
    let s = 0;
    while (s < 4) {
        if (counter > s) {
            res += '-';
        } else {
            res += '*';
        }
        s++;
    }
    res += '<br>';
    counter--;
    c++;
}

d1.innerHTML = res;
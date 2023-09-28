// khoi tao cac thong so
let btn1 = document.querySelector('#btn1');
let img = document.querySelector('#img');
let btn2 = document.querySelector('#btn2');

// functions nut bam 
//khi bấm nút btn1 thì thực hiện mở tấm ảnh và cập nhật giá trị đèn =1 lên firebase
btn1.addEventListener('click', ()=>{
    img.src = 'image/denon1.png'; 
    firebase.database().ref("thietbi").update({den: 1}) //update data onto firebase
})

btn2.addEventListener('click', ()=>{
    img.src = 'image/den1.png';
    firebase.database().ref("thietbi").update({den: 0})
})

// khoi tao cac thong so
let btn3 = document.querySelector('#btn3');
let img1 = document.querySelector('#img1');
let btn4 = document.querySelector('#btn4');

// functions nut bam
btn3.addEventListener('click', ()=>{
    img1.src = 'image/fan_running.gif'; 
    firebase.database().ref("thietbi").update({quat: 1})
})

btn4.addEventListener('click', ()=>{
    img1.src = 'image/fan_off.png';
    firebase.database().ref("thietbi").update({quat: 0})
})

let btn5 = document.querySelector('#btn5');
let img2 = document.querySelector('#img2');
let btn6 = document.querySelector('#btn6');

// functions nut bam
btn5.addEventListener('click', ()=>{
    img2.src = 'image/bell_on.png'; 
    firebase.database().ref("thietbi").update({call: 1})
})

btn6.addEventListener('click', ()=>{
    img2.src = 'image/bell_off.png';
    firebase.database().ref("thietbi").update({call: 0})
})



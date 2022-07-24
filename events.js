const btn = document.querySelector("#btn");
btn.onclick = () => alert("hello world");

const botn = document.querySelector('#botn');
botn.addEventListener('click', function(e){
    e.target.style.background = 'blue';
});

// const butts = document.querySelectorAll('button');
//  butts.forEach((press) => {
//     press.addEventListener('click', () => {
//         alert(press.id)
//     });
//  });
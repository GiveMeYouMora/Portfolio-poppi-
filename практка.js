// let lived = document.getElementsByTagName('div')[0]
// console.log(lived);
// let loved = document.querySelector('.block')
// console.log(loved);
// let luved = document.getElementById('blockid')
// console.log(luved);
// lived.style.height = '200px'
// lived.style.width = '50px'
// lived.style.borderRadius = '10px'
// lived.style.backgroundColor = '#5671a6'
// loved.style.height = '200px'
// loved.style.width = '50px'
// loved.style.borderRadius = '10px'
// loved.style.backgroundColor = '#383838'
// luved.style.height = '200px'
// luved.style.width = '50px'
// luved.style.borderRadius = '10px'
// luved.style.backgroundColor = '#6d8093'

// console.log(lived.classList);
// lived.classList.add('--active')
// loved.classList.remove('fgfdg')
let block = document.querySelector('.block');
let button = document.getElementById('btn');
let laved = false;

button.onclick = function () {
    console.log(block);
if (laved) {
    block.style.display = 'none';
    laved = false;
}
else {    
block.style.display = 'block';
laved = true;
}   
};
var btns = document.querySelectorAll/*estudar */('.btn');

btn.onmousemove = function(e){
    var x = e.pageX - btn.offsetLeft/*estudar */;
    var y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--eixoX', x + 'px');
    btn.style.setProperty('--eixoY', y + 'px');
}

let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList/*estudar */.toggle('dark')
})
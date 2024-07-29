document.getElementById('btn-cadastrar-vaga').addEventListener('click', function (event) {
    const cadastrar_vaga = document.querySelector('.cadastrar-vaga');
    const overlay = document.querySelector('.overlay')

    overlay.classList.add('show')
    cadastrar_vaga.classList.add('show')
});

document.querySelector('#fechar').addEventListener('click', function (event) {
    const cadastrar_vaga = document.querySelector('.cadastrar-vaga');
    const overlay = document.querySelector('.overlay')

    overlay.classList.remove('show')
    cadastrar_vaga.classList.remove('show')
});

document.querySelector('.cadastrar-vaga').addEventListener('submit', function (event) {
    const cadastrar_vaga = document.querySelector('.cadastrar-vaga');
    const overlay = document.querySelector('.overlay')

    overlay.classList.remove('show')
    cadastrar_vaga.classList.remove('show')
    
    alert('Vaga cadastrada com sucesso!')
});
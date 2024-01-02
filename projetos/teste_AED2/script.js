function ativar_funcao (elemento) {
    var seta = elemento.querySelector('.seta')
    var funcoes = elemento.querySelector('.funcoes');
    var oculto = elemento.querySelector('.oculto');

    oculto.classList.toggle('exposto');
    seta.classList.toggle('exposto');
    funcoes.classList.toggle('exposto')
    
}
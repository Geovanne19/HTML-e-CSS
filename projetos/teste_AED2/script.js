function ativar_funcao (elemento) {
    var seta = elemento.querySelector('.seta')
    var oculto = elemento.querySelector('.oculto');
    var cabecalho_funcao = elemento.querySelector('cabecalho-funcao')

    oculto.classList.toggle('exposto');
    seta.classList.toggle('exposto');
    cabecalho_funcao.classList.toggle('exposto')
    
}

// ltblpg,v
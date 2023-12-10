function sidebar() {
    const btn = document.getElementById('btn-hamb')
    const sidebar = document.getElementById('sidebar')

    btn.classList.toggle('ativar')
    sidebar.classList.toggle('ativar')
    /*<div id="sidebar"></div>;
    #sidebar {
        background - color: rgb(34, 34, 34);
        box - shadow: 0px 0px 15px black;
        position: fixed;
        height: 100 %;
        width: 0;
        z - index: 2;
        transition: 0.3s;
    }*/
}

function alternarTema() {
    var root = document.documentElement;
    root.classList.toggle('tema-claro');
}
const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

const tabClicked = (tab) => {
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('show'));

    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);

    content.classList.add('show');
}

const currentActiveTab = document.querySelector('.tab-btn.active');
tabClicked(currentActiveTab);

document.getElementById('empresa').addEventListener('submit', function (event) {
    event.preventDefault();

    const passwordInput = document.getElementById('senha');
    const confirmPasswordInput = document.getElementById('confirma-senha');

    if (passwordInput.value !== confirmPasswordInput.value) {
        alert('As senhas não coincidem. Por favor, tente novamente.')
        passwordInput.value = ''
        confirmPasswordInput.value = ''
        confirmPasswordInput.focus();
    } else {
        alert('Conta criada com sucesso!');
    }
});

document.getElementById('candidato').addEventListener('submit', function (event) {
    event.preventDefault();

    const passwordInput = document.getElementById('senha');
    const confirmPasswordInput = document.getElementById('confirma-senha');

    if (passwordInput.value !== confirmPasswordInput.value) {
        alert('As senhas não coincidem. Por favor, tente novamente.')
        passwordInput.value =''
        confirmPasswordInput.value = ''
        confirmPasswordInput.focus();
    } else {
        alert('Conta criada com sucesso!');
    }
});

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


const validateForm = (formId) => {
    const errors = [];
    const form = document.getElementById(formId);

    const nome = form.querySelector('#nome') || form.querySelector('#nome-fantasia');
    const email = form.querySelector('#email') || form.querySelector('#email-coorporativo');
    const cpf = form.querySelector('#cpf');
    const cep = form.querySelector('#cep');
    const senha = form.querySelector('#senha');
    const confirmaSenha = form.querySelector('#confirma-senha');
    const fileInputs = form.querySelectorAll('input[type="file"]');

    // Validate Nome or Nome Fantasia
    if (nome && (nome.value.length < 10 || /\d/.test(nome.value))) {
        errors.push('* Nome deve ter pelo menos 10 letras.');
    }

    // Validate Email or E-mail Corporativo
    if (email && (email.value.length < 10 || !/@/.test(email.value) || (email.value.match(/\d/g) || []).length > 2)) {
        errors.push('* E-mail inválido.');
    }

    // Validate CPF
    if (cpf && (/\D/.test(cpf.value) || cpf.value.length > 11)) {
        errors.push('* CPF inválido.');
    }

    // Validate CEP
    if (cep && (/\D/.test(cep.value) || cep.value.length > 8)) {
        errors.push('* CEP inválido.');
    }

    // Validate Senhas
    const senhaPattern = /^(?=.*\d.*\d.*\d.*\d.*\d.*\d)(?=.*[a-zA-Z].*[a-zA-Z])(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,./?]).{9,12}$/;
    if (!senhaPattern.test(senha.value)) {
        errors.push('* A senha deve ter de 9-12 dígitos, com pelo menos 6 números, 2 letras e 1 caractere especial.');
    }
    if (senha.value !== confirmaSenha.value) {
        errors.push('* As senhas não são iguais.');
    }

    return errors;
}

const showErrorMessages = (errors) => {
    const errorMessageDiv = document.getElementById('error-message');
    const errorList = document.getElementById('error-list');

    errorList.innerHTML = errors.map(error => `<li>${error}</li>`).join('');
    errorMessageDiv.style.display = 'block';

    // Hide error message when clicking anywhere on the screen
    document.addEventListener('click', () => {
        errorMessageDiv.style.display = 'none';
        document.getElementById('candidato').reset();
        document.getElementById('empresa').reset();
    }, { once: true });
}

document.getElementById('candidato').addEventListener('submit', function (event) {
    event.preventDefault();

    const errors = validateForm('candidato');

    if (errors.length > 0) {
        showErrorMessages(errors);
    } else {
        alert('Conta criada com sucesso!');
        form.submit();
    }
});

document.getElementById('empresa').addEventListener('submit', function (event) {
    event.preventDefault();

    const errors = validateForm('empresa');

    if (errors.length > 0) {
        showErrorMessages(errors);
    } else {
        alert('Conta criada com sucesso!');
        form.submit();
    }
});

// Função para atualizar a cor do label com base na seleção do arquivo
const updateLabelColor = (input) => {
    const label = document.querySelector(`label[for="${input.id}"]`);
    if (input.files.length > 0) {
        label.style.backgroundColor = '#d4edda'; // Cor de fundo verde claro para indicar que um arquivo foi selecionado
        label.style.borderColor = '#c3e6cb'; // Cor da borda verde claro
    } else {
        label.style.backgroundColor = 'white'; // Cor de fundo padrão
        label.style.borderColor = 'var(--roxo)'; // Cor da borda padrão
    }
}

// Adiciona evento de mudança para os inputs de tipo file
document.querySelectorAll('input[type="file"]').forEach(input => {
    input.addEventListener('change', () => updateLabelColor(input));
});

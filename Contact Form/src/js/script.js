document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter os valores do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validação simples do e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // Exibindo os dados do formulário preenchido
    const displayArea = document.getElementById('displayData');
    displayArea.innerHTML = `
        <h2>Dados do Formulário:</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
    `;
    // Limpar o formulário após a submissão
    document.getElementById('contactForm').reset();
});


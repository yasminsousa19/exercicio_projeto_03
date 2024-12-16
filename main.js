    // Função para formatar o número de telefone
function formatTelefone(telefone) {
    return telefone.replace(/\D/g, '') // Remove todos os caracteres não numéricos
                    .replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3'); // Aplica o formato (00) 00000-0000
    }

    // Função de validação do formulário
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para validar

        // Obtendo os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var mensagem = document.getElementById('mensagem').value;

        // Validação dos campos obrigatórios
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

        // Validar e formatar o número de telefone
    if (telefone) {
        telefone = formatTelefone(telefone);
        document.getElementById('telefone').value = telefone; // Atualiza o campo com a formatação correta
    }

        // Se tudo estiver correto, enviar o formulário
    alert('Formulário enviado com sucesso!');
        // Aqui você pode adicionar código para realmente enviar o formulário, como AJAX, ou permitir o envio padrão.
});

    // Adicionar máscara ao telefone enquanto o usuário digita
document.getElementById('telefone').addEventListener('input', function() {
    this.value = formatTelefone(this.value);
});
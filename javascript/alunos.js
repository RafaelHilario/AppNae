function editarAluno() {
    // Redirecionar para a página de edição do aluno com a matrícula como parâmetro
    window.location.href = "/pages/editar-aluno.html?matricula=12345678";
}

function excluirAluno() {
    var confirmacao = confirm("Tem certeza que deseja excluir este aluno?");
    if (confirmacao) {
        // Lógica para excluir o aluno (pode ser uma requisição para o servidor)
        alert("Aluno excluído com sucesso!");
    }
}
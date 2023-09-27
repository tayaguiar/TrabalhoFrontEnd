function cadastrar() {
    let Usuarios = JSON.parse(localStorage.getItem('Usuarios') || '[]');

    Usuarios.push({
        nome: nome.value,
        senha: senha.value
    });

    localStorage.setItem('Usuarios', JSON.stringify(Usuarios));
    window.location.href = "/trabalhoFinalGrupo3/login.html";
}

function login() {
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;

    // Recuperar os usuários do Local Storage
    let Usuarios = JSON.parse(localStorage.getItem('Usuarios') || '[]');

    console.log(Usuarios);
    // Iterar sobre os usuários para verificar o login
    let usuarioEncontrado = false;

    for (const user of Usuarios) {
        if (user.nome === nome && user.senha === senha) {
            console.log('Login bem-sucedido!');
            window.location.href = "/trabalhoFinalGrupo3/src/html/buscaEndereco.html";
            usuarioEncontrado = true;
            break; // Encerrar o loop, pois o usuário foi encontrado
        }
    }

    if (!usuarioEncontrado) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuário ou Senha incorreta!',
            footer: 'tente novamente'
        });
    }
}

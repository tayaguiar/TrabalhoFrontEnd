function login() {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
  
    // Recuperar os usuários do Local Storage
    let Usuarios = JSON.parse(localStorage.getItem("Usuarios") || "[]");
  
    // Iterar sobre os usuários para verificar o login
    let usuarioEncontrado = false;
  
    for (const user of Usuarios) {
      if (user.nome === name && user.senha === password) {
        console.log("Login bem-sucedido!");
        window.location.href = "./src/html/buscaEndereco.html";
        usuarioEncontrado = true;
        break;
      }
    }
  
    if (!usuarioEncontrado) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuário ou Senha incorreta!",
        footer: "tente novamente",
      });
    }
  }
  
let nome = document.getElementById("nome");
let validNome = false;

let senha = document.getElementById("senha");
let validSenha = false;

let confsenha = document.getElementById("confsenha");
let validConfSenha = false;

nome.addEventListener("keyup", () => {
  if (nome.value.length <= 2) {
    nome.style.border = "2px solid red";
    validNome = false;
  } else {
    validNome = true;
    nome.style.border = "2px solid green";
  }
});

senha.addEventListener("keyup", () => {
  if (senha.value.length <= 3) {
    senha.style.border = "2px solid red";
    validSenha = false;
  } else {
    validSenha = true;
    senha.style.border = "2px solid green";
  }
});

confsenha.addEventListener("keyup", () => {
  if (senha.value != confsenha.value) {
    confsenha.style.border = "2px solid red";
    validConfSenha = false;
  } else {
    validConfSenha = true;
    confsenha.style.border = "2px solid green";
  }
});

function cadastrar() {
  if (validNome && validSenha && validConfSenha) {
    let Usuarios = JSON.parse(localStorage.getItem("Usuarios") || "[]");

    for (const user of Usuarios) {
      if (user.nome === nome) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Usuário ja cadastrado!",
          footer: "tente novamente",
        });
        return;
      }
    }

    Usuarios.push({
      nome: nome.value,
      senha: senha.value,
    });
    localStorage.setItem("Usuarios", JSON.stringify(Usuarios));
    window.location.href = "../../login.html";
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Dados inválidos!",
      footer: "tente novamente",
    });
  }
}


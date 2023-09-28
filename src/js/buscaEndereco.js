function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById("logradouro").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("uf").value = "";
  document.getElementById("ibge").value = "";
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById("logradouro").value = conteudo.logradouro;
    document.getElementById("bairro").value = conteudo.bairro;
    document.getElementById("cidade").value = conteudo.localidade;
    document.getElementById("uf").value = conteudo.uf;
    document.getElementById("ibge").value = conteudo.ibge;
  } else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "CEP não encontrado!",
      footer: "tente novamente",
    });
  }
}

function pesquisacep() {
  const valor = document.getElementsByName("cep")[0].value;
  //Nova variável "cep" somente com dígitos.
  var cep = valor.replace(/\D/g, "");

  //Verifica se campo cep possui valor informado.
  if (cep != "") {
    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {
      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById("logradouro").value = "...";
      document.getElementById("bairro").value = "...";
      document.getElementById("cidade").value = "...";
      document.getElementById("uf").value = "...";
      document.getElementById("ibge").value = "...";

      //Cria um elemento javascript.
      var script = document.createElement("script");

      //Sincroniza com o callback.
      script.src =
        "https://viacep.com.br/ws/" + cep + "/json/?callback=meu_callback";

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);
    } else {
      //cep é inválido.
      limpa_formulário_cep();
      Swal.fire("Formato inválido.", "Confira o CEP digitado", "warning");
    }
    return false;
  } else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
    return true;
  }
}

function pesquisacep() {
  const valor = document.getElementsByName("cep")[0].value;
  //Nova letiável "cep" somente com dígitos.
  let cep = valor.replace(/\D/g, "");

  //Verifica se campo cep possui valor informado.
  if (cep != "") {
    //Expressão regular para validar o CEP.
    let validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {
      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById("logradouro").value = "...";
      document.getElementById("bairro").value = "...";
      document.getElementById("cidade").value = "...";
      document.getElementById("uf").value = "...";
      document.getElementById("ibge").value = "...";

      //Cria um elemento javascript.
      let script = document.createElement("script");

      //Sincroniza com o callback.
      script.src =
        "https://viacep.com.br/ws/" + cep + "/json/?callback=meu_callback";

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);
    } else {
      //cep é inválido.
      limpa_formulário_cep();
      Swal.fire("Formato inválido.", "Confira o CEP digitado", "info");
    }
    return false;
  } else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
    return true;
  }
}
function formatarCEP(cep) {
  cep = cep.replace(/\D/g, "");

  cep = cep.replace(/^(\d{5})(\d{3})$/, "$1-$2");

  return cep;
}

function atualizarCEP(event) {
  let inputCEP = document.getElementById("cep");
  let valorCEP = inputCEP.value;
  let digitosRestantes = 8 - valorCEP.length;
  event.target.setCustomValidity(
    `O Cep deve conter mais ${digitosRestantes} dígitos`
  );
  if (valorCEP.length < 8) {
    event.target.classList.add("error");
    inputCEP.innerHTML = "O Cep deve conter 8 dígitos";
  } else {
    inputCEP.innerHTML = "";
    event.target.setCustomValidity("");
    event.target.classList.remove("error");
    event.target.classList.remove("success");
    event.target.classList.add("success");
  }

  let cepFormatado = formatarCEP(valorCEP);

  inputCEP.value = cepFormatado;
}

let inputCEP = document.getElementById("cep");
inputCEP.addEventListener("input", atualizarCEP);

function pagLogin(){
  window.location.href = "../../login.html";
}
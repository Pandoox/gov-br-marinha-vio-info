// ------------------------------
// USUÁRIOS CADASTRADOS MANUALMENTE
// ------------------------------
const usuarios = [
  {
    cpf: "12345678900",
    senha: "12345678900",
    imagens: [
      "https://i.ibb.co/0y1pjTrn/Captura-de-tela-2025-12-06-022334.png", // RG 1
      "https://i.ibb.co/tpmNt8r2/Captura-de-tela-2025-12-06-022341.png", // RG 2
      "https://i.ibb.co/VW6ZKCF3/base-RGAPP3.png"  // RG 3
    ]
  },
  {
    cpf: "11122233344",
    senha: "456",
    imagens: [
      "https://i.imgur.com/DDDDD.png",
      "https://i.imgur.com/EEEEE.png",
      "https://i.imgur.com/FFFFF.png"
    ]
  },
  
];


// ------------------------------
// LOGIN — Agora usando CPF
// ------------------------------
function fazerLogin() {
  const cpfInput = document.getElementById("usuario").value;  // campo CPF
  const senhaInput = document.getElementById("senha").value;

  const user = usuarios.find(u => u.cpf === cpfInput && u.senha === senhaInput);

  if (!user) {
    alert("CPF ou senha incorretos.");
    return;
  }

  // Salva o usuário logado no localStorage
  localStorage.setItem("usuarioLogado", JSON.stringify(user));

  // Vai para a página do RG
  window.location.href = "index_rg.html";
}

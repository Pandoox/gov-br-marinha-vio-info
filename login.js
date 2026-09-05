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
    cpf: "10367068699",
    senha: "10367068699",
    imagens: [
      "https://i.ibb.co/Pz3sH4b7/10367068699-parte-1.png",
      "https://i.ibb.co/5gNxTS0p/10367068699-parte-2.png",
      "https://i.ibb.co/b5NY75Qp/10367068699-parte-3.png"
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

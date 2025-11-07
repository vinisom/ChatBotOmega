
document.addEventListener("DOMContentLoaded", function () {
  const chatBtn = document.getElementById("chat-btn");
  const chatWindow = document.getElementById("chat-window");
  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");
  const chatMessages = document.getElementById("chat-messages");
  const closeBtn = document.getElementById("chat-close-btn");

  chatBtn.addEventListener("click", () => {
    chatWindow.style.display = "flex";
    if (chatMessages.children.length === 0) iniciarConversa();
  });

  closeBtn.addEventListener("click", () => {
    chatWindow.style.display = "none";
  });

  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const mensagem = chatInput.value.trim();
    if (mensagem !== "") {
      adicionarMensagemUsuario(mensagem);
      processarMensagem(mensagem);
      chatInput.value = "";
    }
  });

  function iniciarConversa() {
    adicionarMensagemBot("Olá! 👋 Sou o chatbot de suporte Omega. Vamos começar seu atendimento.");
    setTimeout(() => adicionarMensagemBot("Como posso te ajudar hoje?", [
      "Problema com entrega",
      "Produto com defeito",
      "Quero cancelar meu pedido",
      "Outro assunto"
    ]), 800);
  }

  function adicionarMensagemUsuario(mensagem) {
    const msgDiv = document.createElement("div");
    msgDiv.className = "user-message";
    msgDiv.innerHTML = mensagem;
    chatMessages.appendChild(msgDiv);
    rolarChat();
  }

  function adicionarMensagemBot(texto, opcoes = []) {
    const msgDiv = document.createElement("div");
    msgDiv.className = "bot-message";
    msgDiv.innerHTML = texto;
    chatMessages.appendChild(msgDiv);

    if (opcoes.length > 0) {
      const botoesDiv = document.createElement("div");
      botoesDiv.className = "quick-reply";

      opcoes.forEach(opcao => {
        const btn = document.createElement("button");
        btn.textContent = opcao;
        btn.addEventListener("click", () => {
          botoesDiv.remove();
          adicionarMensagemUsuario(opcao);
          processarMensagem(opcao);
        });
        botoesDiv.appendChild(btn);
      });

      chatMessages.appendChild(botoesDiv);
    }

    rolarChat();
  }

  function processarMensagem(mensagem) {
    const msg = mensagem.toLowerCase();

    if (msg.includes("entrega")) {
      setTimeout(() => adicionarMensagemBot("Por favor, digite o número do seu pedido:"), 500);
    } else if (msg.includes("defeito")) {
      setTimeout(() => adicionarMensagemBot("Sinto muito pelo transtorno. Informe o número do pedido e uma breve descrição do defeito."), 500);
    } else if (msg.includes("cancelar")) {
      setTimeout(() => adicionarMensagemBot("Você deseja cancelar o pedido inteiro ou apenas alguns produtos?"), 500);
    } else if (msg.includes("outro")) {
      setTimeout(() => adicionarMensagemBot("Descreva com mais detalhes sua solicitação para que eu possa te ajudar melhor."), 500);
    } else {
      setTimeout(() => adicionarMensagemBot("Obrigado. Em breve nossa equipe analisará sua solicitação."), 500);
    }
  }

  function rolarChat() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

});

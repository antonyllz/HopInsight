// Função para exibir o card de feedback
function showFeedback(message, type) {
    const feedbackCard = document.getElementById("feedback-card");
    feedbackCard.textContent = message;

    // Define a classe de estilo com base no tipo (success ou error)
    feedbackCard.className = `feedback-card ${type}`;
    feedbackCard.classList.remove("d-none");

    // Remove o card após 3 segundos
    setTimeout(() => {
      feedbackCard.classList.add("d-none");
    }, 3000);
  }

// Seleciona o formulário de login
const loginForm = document.querySelector(".form");

// Adiciona o evento de envio ao formulário
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Exibe o card de sucesso
      showFeedback(`Bem-vindo, ${user.username}!`, "success");
      window.location.href = "../html/index.html";
    } else {
      // Exibe o card de erro
      showFeedback("Usuário ou senha incorretos. Tente novamente.", "error");
    }
  } catch (err) {
    console.error("Erro ao conectar-se à API:", err);
    showFeedback("Erro ao validar o login. Verifique sua conexão.", "error");
  }
});

// Função para inicializar eventos no formulário de cadastro
function initRegisterForm() {
  // Seleciona o formulário pelo ID
  const form = document.getElementById("register-form");

  if (!form) {
    console.error("Formulário de cadastro não encontrado.");
    return;
  }

  // Adiciona um evento para capturar o envio do formulário
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Evita o envio padrão do formulário

    // Captura os valores dos campos
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const birthdate = document.getElementById("birthdate").value;

    // Valida se o usuário já existe
    try {
      // Faz um GET para buscar todos os usuários
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();

      // Verifica se o nome de usuário já existe
      const userExists = users.some((user) => user.username === username);

      if (userExists) {
        alert("Nome de usuário já está em uso. Por favor, escolha outro.");
        return; // Interrompe o processo de cadastro
      }

      // Cria o objeto para enviar
      const newUser = {
        username,
        password,
        birthdate,
      };

      // Faz o POST para cadastrar o novo usuário
      const postResponse = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (postResponse.ok) {
        alert("Usuário cadastrado com sucesso!");
        window.location.href = '../html/auth.html';
        form.reset(); // Limpa o formulário
      } else {
        alert("Ocorreu um erro ao cadastrar o usuário.");
      }
    } catch (err) {
      console.error("Erro ao conectar-se à API:", err);
      alert("Não foi possível conectar-se ao servidor.");
    }
  });
}


// function sendInputValue() {
//   const inputValue = document.getElementById('mtr-value').value;
//   console.log(inputValue)

//   if (!inputValue) {
//     alert("Por favor, insira um valor no campo.");
//     return;
//   }

//   fetch('/mtr-api/MTR.js', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ url: inputValue })
//   })
//   .then(response => response.json())
//   .then(data => {
//     alert('Resultado salvo com sucesso!');
//   })
//   .catch(error => {
//     console.error('Erro ao enviar dados:', error);
//     alert('Erro ao enviar dados');
//   });
// }
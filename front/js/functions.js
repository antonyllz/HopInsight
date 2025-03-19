// mtr

import mtrPostRequest from "../../back/mtr-api/mtr";

const btn_get = document.querySelector('#btn_get');
const mtr_value = document.querySelector('#mtr_value');

btn_get.addEventListener('click', addIp);
document
  .querySelector('#inputIpAddress')
  .addEventListener('keypress', function (e) {
    let key = e.which || e.keyCode;
    if (key == 13) {
      mtrPostRequest(addIp);
    }
  });


// Função para exibir o card de feedback
function showFeedback(message, type) {
    const feedbackCard = document.getElementById("feedback-card");
    feedbackCard.textContent = message;

    feedbackCard.className = `feedback-card ${type}`;
    feedbackCard.classList.remove("d-none");

    setTimeout(() => {
      feedbackCard.classList.add("d-none");
    }, 3000);
  }

// Seleciona o formulário de login
const loginForm = document.querySelector(".form");

// Adiciona o evento de envio ao formulário
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:3300/users");
    const users = await response.json();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      showFeedback(`Bem-vindo, ${user.email}!`, "success");
      window.location.href = "../html/index.html";
    } else {
      showFeedback("Usuário ou senha incorretos. Tente novamente.", "error");
    }
  } catch (err) {
    console.error("Erro ao conectar-se à API:", err);
    showFeedback("Erro ao validar o login. Verifique sua conexão.", "error");
  }
});

// Função para inicializar eventos no formulário de cadastro
function initRegisterForm() {
  const form = document.getElementById("register-form");

  if (!form) {
    console.error("Formulário de cadastro não encontrado.");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const birthdate = document.getElementById("birthdate").value;

    try {
      const response = await fetch("http://localhost:3300/users");
      const users = await response.json();

      const userExists = users.some((user) => user.email === email);

      if (userExists) {
        alert("E-mail já está em uso. Por favor, escolha outro.");
        return; 
      }

      const newUser = {
        email,
        password,
        birthdate,
      };

      // Faz o POST para cadastrar o novo usuário
      const postResponse = await fetch("http://localhost:3300/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (postResponse.ok) {
        alert("Usuário cadastrado com sucesso!");
        window.location.href = '../html/auth.html';
        form.reset();
      } else {
        alert("Ocorreu um erro ao cadastrar o usuário.");
      }
    } catch (err) {
      console.error("Erro ao conectar-se à API:", err);
      alert("Não foi possível conectar-se ao servidor.");
    }
  });
}


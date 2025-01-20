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
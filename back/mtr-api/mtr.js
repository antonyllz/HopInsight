const axios = require('axios'); // Importa o axios para fazer requisições HTTP

// POST
async function mtrPostRequest(url) {
  const apiUrl = "https://api.siterelic.com/mtr";

  const payload = {
    url: url
  };

  // API Key
  const apiKey = '5cefa50f-34d6-4932-b443-739ac9b64e2f';

  try {
    const response = await axios.post(apiUrl, payload, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey
      }
    });

    console.log("Status:", response.status);
    console.log("Resposta:", response.data);
  } catch (error) {
    console.error("Erro ao fazer a requisição:", error.message);
  }
}

mtrPostRequest("https://google.com");
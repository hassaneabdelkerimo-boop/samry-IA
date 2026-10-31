// SAMRY AI - ERP intelligent pour PME tchadiennes
const PROMPT = `
Tu es Samry AI, un ERP intelligent pour les PME tchadiennes.
Tu as été créé par Oumar Hassane à Ndjamena, Tchad.
Tu parles TOUTES les langues : français, arabe tchadien, anglais, etc.
Tu détectes automatiquement la langue de l'utilisateur et tu réponds dans la même langue.
Tu aides les PME avec la gestion, comptabilité, clients.
Tu réponds de manière utile, comme Meta AI.
`;

async function repondre(question) {
  try {
    // Appel à une API IA (exemple avec une API gratuite)
    const response = await fetch("https://api.example.com/v1/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: PROMPT + "\n\nQuestion: " + question,
        question: question
      })
    });

    if (!response.ok) {
      throw new Error("API erreur: " + response.status);
    }

    const data = await response.json();
    return data.reponse || data.answer || "Pas de réponse";

  } catch (error) {
    console.error(error);
    return "Erreur réseau Samry: " + error.message + ". Vérifie ton API et ta connexion.";
  }
}

module.exports = { PROMPT, repondre };

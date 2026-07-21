require("dotenv").config();

const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

const MODELS = [
  "google/gemma-4-31b-it:free",
  "google/gemma-4-26b-a4b-it:free",
  "poolside/laguna-xs-2.1:free",
];

async function createCompletion(messages, temperature = 0.3) {
  let lastError;

  for (const model of MODELS) {
    console.log(`Trying model: ${model}`);

    try {
      const completion = await client.chat.completions.create({
        model,
        messages,
        temperature,
      });

      console.log(`Success with ${model}`);
      return completion;

    } catch (err) {
      lastError = err;

      console.log(`Failed with ${model}`);

      if (err.status !== 429) {
        throw err;
      }

      console.log("Trying next model...");
    }
  }

  throw lastError;
}

module.exports = {
  createCompletion,
};
const express = require("express");
const { API_KEY } = require("./config/index");
const app = express();
const { GoogleGenerativeAI } = require("@google/generative-ai");
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

const setupAndStartServer =
  (3000,
  async () => {
    console.log(`started at PORT ${3000}`);
    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
    });
    const prompt = "difference between chatgpt and gemini";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  });
setupAndStartServer();

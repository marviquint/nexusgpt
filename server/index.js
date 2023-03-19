const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const configuration = new Configuration({
  apiKey: "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",
});

const openAi = new OpenAIApi(configuration);
const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3001;

//get chat related data
app.post("/", async (req, res) => {
  const { body } = req;
  const { query } = body;
  const response = await openAi.createCompletion({
    model: "text-davinci-003",
    prompt: query,
    max_tokens: 1000,
    temperature: 0,
  });

  res.json({
    data: response.data.choices[0].text,
  });
});

//get image related data
app.post("/createimage", async (req, res) => {
  const { body } = req;
  const { query } = body;
  const response = await openAi.createImage({
    prompt: query,
    n: 1,
    size: "1024x1024",
  });

  res.json({
    data: response.data.data[0].url,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

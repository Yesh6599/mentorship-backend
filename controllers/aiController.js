const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

exports.summarizeText = async (req, res) => {
  try {

    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    if (text.length < 50) {
      return res.status(400).json({ error: "Text must be at least 50 characters" });
    }

    if (text.length > 10000) {
      return res.status(413).json({ error: "Text too large" });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Summarize the text into 3-6 bullet points under 120 words."
        },
        {
          role: "user",
          content: text
        }
      ]
    });

    res.json({
      summary: response.choices[0].message.content,
      model: "gpt-4o-mini"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to generate summary"
    });
  }
};
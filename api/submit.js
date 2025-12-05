export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return res.status(500).json({
      error:
        "Telegram is not configured. Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in Vercel environment variables."
    });
  }

  const { type, bookTitle, unitTitle, message, scoreText } = req.body || {};

  const lines = [];
  lines.push("📘 ELS – English Through Reading");
  if (bookTitle) lines.push(`Book: ${bookTitle}`);
  if (unitTitle) lines.push(`Unit: ${unitTitle}`);

  if (type === "writing") {
    lines.push("Type: ✍️ Writing Task");
  } else if (type === "quiz") {
    lines.push("Type: ✅ Quiz Result");
  } else {
    lines.push("Type: General submission");
  }

  if (scoreText) {
    lines.push(`Score: ${scoreText}`);
  }

  if (message && String(message).trim()) {
    lines.push("");
    lines.push(String(message));
  }

  const text = lines.join("\n");

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    const tgRes = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text
      })
    });

    const tgData = await tgRes.json();

    if (!tgRes.ok || !tgData.ok) {
      console.error("Telegram error:", tgData);
      return res
        .status(500)
        .json({ error: "Failed to send message to Telegram." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Telegram request failed:", err);
    return res
      .status(500)
      .json({ error: "Failed to send message to Telegram." });
  }
}

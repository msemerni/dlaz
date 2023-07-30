const TOKEN = "6355286962:AAGIDCcGUBliNTUGofPF3lcimGxeWF-ZywE";
const CHAT_ID = "-1001881908840";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.querySelector("#tg").addEventListener("submit", sendMsgToTelegram);

async function sendMsgToTelegram(e) {
  e.preventDefault();

  let message = `<tg-emoji emoji-id="5368324170671202286">👍👍👍👍👍👍👍</tg-emoji>\n`
  message += `<code>D-Laz feedback</code>\n`;
  message += `<i>Name: </i><b>${this.tg_name.value}</b>\n`;
  message += `<i>Email: </i><b>${this.tg_email.value}</b>\n`;
  message += `<i>Phone: </i><b>${this.tg_phone.value}</b>\n`;
  message += `<i>Message: </i><b>${this.tg_msg.value}</b>\n`;

  let response = await fetch(URL_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
  });

  if (response.ok) {
    this.tg_name.value = "";
    this.tg_email.value = "";
    this.tg_phone.value = "";
    this.tg_msg.value = "";

  } else {
    alert("Error HTTP: " + response.status);
  }
};

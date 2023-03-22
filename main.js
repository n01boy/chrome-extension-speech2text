SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = 'ja-JP';

recognition.onresult = (event) => {
  const num = event.results.length;
  const txt = event.results[num - 1][0].transcript;
  console.log(txt);
  document.querySelector("textarea[placeholder=参加者全員にメッセージを送信]").value = txt;
  const btn = document.querySelector('button[aria-label=参加者全員にメッセージを送信]')
  btn.removeAttribute('disabled');
  btn.click();
}

recognition.onend = (event) => {
  recognition.start();
}

recognition.start();

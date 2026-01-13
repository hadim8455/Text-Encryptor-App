const inputText = document.getElementById("inputText");
const keyInput = document.getElementById("keyInput");
const outputText = document.getElementById("outputText");


document.getElementById("aesEncryptBtn").addEventListener("click", () => {
  const text = inputText.value.trim();
  const key = keyInput.value.trim();
  if (!text || !key) return alert("Enter text & key!");
  const encrypted = CryptoJS.AES.encrypt(text, key).toString();
  outputText.value = encrypted;
  alert("AES Encrypted!");
});

document.getElementById("aesDecryptBtn").addEventListener("click", () => {
  const encrypted = inputText.value.trim();
  const key = keyInput.value.trim();
  if (!encrypted || !key) return alert("Enter encrypted text & key!");
  
  try
  {
    const bytes = CryptoJS.AES.decrypt(encrypted, key);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    if (!decrypted) throw new Error();
    outputText.value = decrypted;
    alert("AES Decrypted!");
  }

  catch
  {
    alert("Wrong key or invalid AES text!");
  }
});


document.getElementById("clearBtn").addEventListener("click", () =>
{
  inputText.value = "";
  keyInput.value = "";
  outputText.value = "";
});


document.getElementById("copyBtn").addEventListener("click", () =>
{
  navigator.clipboard.writeText(outputText.value);
  alert("📋 Result copied!");
});


const inputText = document.getElementById("inputText");
const keyInput = document.getElementById("keyInput");
const outputText = document.getElementById("outputText");

document.getElementById("encryptBtn").addEventListener("click", () => {
  const text = inputText.value.trim();
  const key = keyInput.value.trim();

  if (!text || !key) {
    alert("Please enter both text and key!");
    return;
  }

  const encrypted = CryptoJS.AES.encrypt(text, key).toString();
  outputText.value = encrypted;
  alert("✅ Text encrypted successfully!");
});

document.getElementById("decryptBtn").addEventListener("click", () => {
  const encryptedText = inputText.value.trim();
  const key = keyInput.value.trim();

  if (!encryptedText || !key) {
    alert("Please enter both encrypted text and key!");
    return;
  }

  try {
    const bytes = CryptoJS.AES.decrypt(encryptedText, key);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    if (!decrypted) throw new Error("Invalid key or corrupted text!");
    outputText.value = decrypted;
    alert("🔓 Text decrypted successfully!");
  } catch (err) {
    alert("❌ Wrong key or invalid encrypted text!");
  }
});

document.getElementById("clearBtn").addEventListener("click", () => {
  inputText.value = "";
  keyInput.value = "";
  outputText.value = "";
});

document.getElementById("copyBtn").addEventListener("click", () => {
  navigator.clipboard.writeText(outputText.value);
  alert("📋 Result copied to clipboard!");
});

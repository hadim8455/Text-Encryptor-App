// const inputText = document.getElementById("inputText");
// const keyInput = document.getElementById("keyInput");
// const outputText = document.getElementById("outputText");

// document.getElementById("encryptBtn").addEventListener("click", () => {
//   const text = inputText.value.trim();
//   const key = keyInput.value.trim();

//   if (!text || !key) {
//     alert("Please enter both text and key!");
//     return;
//   }

//   const encrypted = CryptoJS.AES.encrypt(text, key).toString();
//   outputText.value = encrypted;
//   alert("✅ Text encrypted successfully!");
// });

// document.getElementById("decryptBtn").addEventListener("click", () => {
//   const encryptedText = inputText.value.trim();
//   const key = keyInput.value.trim();

//   if (!encryptedText || !key) {
//     alert("Please enter both encrypted text and key!");
//     return;
//   }

//   try {
//     const bytes = CryptoJS.AES.decrypt(encryptedText, key);
//     const decrypted = bytes.toString(CryptoJS.enc.Utf8);

//     if (!decrypted) throw new Error("Invalid key or corrupted text!");
//     outputText.value = decrypted;
//     alert("🔓 Text decrypted successfully!");
//   } catch (err) {
//     alert("❌ Wrong key or invalid encrypted text!");
//   }
// });

// document.getElementById("clearBtn").addEventListener("click", () => {
//   inputText.value = "";
//   keyInput.value = "";
//   outputText.value = "";
// });

// document.getElementById("copyBtn").addEventListener("click", () => {
//   navigator.clipboard.writeText(outputText.value);
//   alert("📋 Result copied to clipboard!");
// });













const inputText = document.getElementById("inputText");
const keyInput = document.getElementById("keyInput");
const outputText = document.getElementById("outputText");

// ----------- AES ----------------
document.getElementById("aesEncryptBtn").addEventListener("click", () => {
  const text = inputText.value.trim();
  const key = keyInput.value.trim();
  if (!text || !key) return alert("Enter text & key!");
  const encrypted = CryptoJS.AES.encrypt(text, key).toString();
  outputText.value = encrypted;
  alert("✅ AES Encrypted!");
});

document.getElementById("aesDecryptBtn").addEventListener("click", () => {
  const encrypted = inputText.value.trim();
  const key = keyInput.value.trim();
  if (!encrypted || !key) return alert("Enter encrypted text & key!");
  try {
    const bytes = CryptoJS.AES.decrypt(encrypted, key);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    if (!decrypted) throw new Error();
    outputText.value = decrypted;
    alert("🔓 AES Decrypted!");
  } catch {
    alert("❌ Wrong key or invalid AES text!");
  }
});

// ----------- ChaCha20 (simulated with AES) ----------------
document.getElementById("chachaEncryptBtn").addEventListener("click", () => {
  const text = inputText.value.trim();
  const key = keyInput.value.trim();
  if (!text || !key) return alert("Enter text & key!");
  const encrypted = CryptoJS.AES.encrypt(text, key + "chacha").toString();
  outputText.value = encrypted;
  alert("✅ ChaCha20-style Encrypted!");
});

document.getElementById("chachaDecryptBtn").addEventListener("click", () => {
  const encrypted = inputText.value.trim();
  const key = keyInput.value.trim();
  if (!encrypted || !key) return alert("Enter encrypted text & key!");
  try {
    const bytes = CryptoJS.AES.decrypt(encrypted, key + "chacha");
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    if (!decrypted) throw new Error();
    outputText.value = decrypted;
    alert("🔓 ChaCha20-style Decrypted!");
  } catch {
    alert("❌ Wrong key or invalid ChaCha20 text!");
  }
});

// ----------- Go to RSA Page ----------------

document.getElementById("goToRSA").addEventListener("click", () => {
  window.location.href = "rsa.html"; // <-- yahan apna RSA page ka link do
});

// ----------- Clear ----------------
document.getElementById("clearBtn").addEventListener("click", () => {
  inputText.value = "";
  keyInput.value = "";
  outputText.value = "";
});

// ----------- Copy ----------------
document.getElementById("copyBtn").addEventListener("click", () => {
  navigator.clipboard.writeText(outputText.value);
  alert("📋 Result copied!");
});


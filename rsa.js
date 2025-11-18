// Step 1: Get the references of HTML elements
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const publicKeyField = document.getElementById("publicKey");
const privateKeyField = document.getElementById("privateKey");

const generateBtn = document.getElementById("generateKeys");
const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const clearBtn = document.getElementById("clearBtn");

const copyOutputBtn = document.getElementById("copyOutput");
const copyPublicBtn = document.getElementById("copyPublic");
const copyPrivateBtn = document.getElementById("copyPrivate");

// -------- Step 2: Generate RSA Keys --------
generateBtn.onclick = function () {
  // 1. Create a new RSA object
  const rsa = new JSEncrypt({ default_key_size: 1024 });

  // 2. Generate the keys
  rsa.getKey();

  // 3. Get the public key and remove headers
  const pubKey = rsa.getPublicKey();
  const cleanPubKey = pubKey.replace(/-----.*-----/g, "").trim();

  // 4. Get the private key and remove headers
  const privKey = rsa.getPrivateKey();
  const cleanPrivKey = privKey.replace(/-----.*-----/g, "").trim();

  // 5. Show keys in the UI
  publicKeyField.value = cleanPubKey;
  privateKeyField.value = cleanPrivKey;

  // 6. Alert user
  alert("✅ Keys Generated Successfully!");
};

// -------- Step 3: Encrypt Text --------
encryptBtn.onclick = function () {
  // 1. Read the text to encrypt
  const text = inputText.value;

  // 2. Read the public key
  const pubKey = publicKeyField.value;

  // 3. Create RSA object
  const rsa = new JSEncrypt();

  // 4. Set the public key (with headers)
  const formattedPubKey =
    "-----BEGIN PUBLIC KEY-----\n" + pubKey + "\n-----END PUBLIC KEY-----";
  rsa.setPublicKey(formattedPubKey);

  // 5. Encrypt the text
  const encryptedText = rsa.encrypt(text);

  // 6. Show encrypted text in output
  outputText.value = encryptedText;

  // 7. Alert user
  alert("🔒 Text Encrypted!");
};

// -------- Step 4: Decrypt Text --------
decryptBtn.onclick = function () {
  // 1. Read the encrypted text
  const encryptedText = inputText.value;

  // 2. Read the private key
  const privKey = privateKeyField.value;

  // 3. Create RSA object
  const rsa = new JSEncrypt();

  // 4. Set the private key (with headers)
  const formattedPrivKey =
    "-----BEGIN PRIVATE KEY-----\n" + privKey + "\n-----END PRIVATE KEY-----";
  rsa.setPrivateKey(formattedPrivKey);

  // 5. Decrypt the text
  const decryptedText = rsa.decrypt(encryptedText);

  // 6. Show decrypted text in output
  outputText.value = decryptedText;

  // 7. Alert user
  alert("🔓 Text Decrypted!");
};

// -------- Step 5: Clear All Fields --------
clearBtn.onclick = function () {
  inputText.value = "";
  outputText.value = "";
  publicKeyField.value = "";
  privateKeyField.value = "";
};

// -------- Copy Buttons --------
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-copy");
    const target = document.getElementById(targetId);
    target.select();
    target.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("📋 Copied!");
  });
});

// -------- Back to AES --------

document.getElementById("backToAES").addEventListener("click", function () {
  window.location.href = "index.html"; // <-- yahan AES page ka link do
});

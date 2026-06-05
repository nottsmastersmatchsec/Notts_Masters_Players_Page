// ===============================
// SECURE SHA-256 PASSWORD CHECK
// ===============================

// Replace this with your SHA-256 hash
const PASSWORD_HASH = "3d9f1f5f8baf0da8223790fb70d137e75a4e5c2c8f3c6f0d5d1e3e6f4f8a1b9c";

// Hash function
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  return [...new Uint8Array(hashBuffer)]
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

// Validate login
async function validatePassword() {
  const input = document.getElementById("password").value.trim();
  const hash = await sha256(input);

  if (hash === PASSWORD_HASH) {
    localStorage.setItem("auth", "true");
    window.location.href = "../index.html";
  } else {
    alert("Incorrect password");
  }
}

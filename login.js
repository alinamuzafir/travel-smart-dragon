document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = this.username.value.trim();
  const password = this.password.value.trim();

  // Get stored values from signup
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    alert("✅ Login successful! Redirecting to home page...");
    window.location.href = "index.html"; // Redirect to homepage
  } else {
    alert("❌ Invalid username or password. Please try again.");
  }
});
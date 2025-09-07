document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const username = this.username.value.trim();
  const password = this.password.value.trim();

  if (name && email && username && password) {
    // Save user data in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("🎉 Welcome " + name + "! Signup successful. Redirecting to home page...");
    window.location.href = "index.html"; // Redirect to homepage
  } else {
    alert("⚠️ Please fill in all fields.");
  }
});
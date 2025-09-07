document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop refresh
  alert("✅ Thanks for your feedback!");
  this.reset(); // clear form after submit
});

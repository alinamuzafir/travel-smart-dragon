document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent refresh

  // simple success popup
  alert("✅ Thank you! Your message has been sent.");

  this.reset(); // clear form
});

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Example login validation (replace this with your actual login logic)
  if (username === "user" && password === "password") {
    // Successful login
    alert("Login successful!");
    // Redirect or perform other actions after successful login
  } else {
    // Failed login
    const errorMessage = document.getElementById("error-message");
    errorMessage.innerText = "Usuário ou senha incorretos.";
  }
});

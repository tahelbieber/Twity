const loginUsernameInput = document.getElementById("login-username");
const loginPasswordInput = document.getElementById("login-password");
const registerUsernameInput = document.getElementById("register-username");
const registerPasswordInput = document.getElementById("register-password");
const loginContainer = document.getElementById("login-container");
const registerContainer = document.getElementById("register-container");
const homeContainer = document.getElementById("home-container");
const tweetsContainer = document.getElementById("tweets-container");
const tweetTextInput = document.getElementById("tweet-text");

function login() {
  const username = loginUsernameInput.value;
  const password = loginPasswordInput.value;

  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    loginContainer.style.display = "none";
    registerContainer.style.display = "none";
    homeContainer.style.display = "block";
  } else {
    alert("שם משתמש או סיסמה שגויים");
  }
}

function register() {
  const username = registerUsernameInput.value;
  const password = registerPasswordInput.value;

  if (username === "dana") {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    loginContainer.style.display = "none";
    registerContainer.style.display = "none";
    homeContainer.style.display = "block";
  } else {
    alert("שם משתמש שגוי");
  }
}

function showLoginForm() {
  showForm(loginContainer);
}

function showRegisterForm() {
  showForm(registerContainer);
}

function showForm(formContainer) {
  loginContainer.style.display = "none";
  registerContainer.style.display = "none";
  homeContainer.style.display = "none";
  formContainer.style.display = "block";
}

function addTweet() {
  const tweetText = tweetTextInput.value;
  const currentDatetime = new Date().toLocaleString();

  if (tweetText.trim() !== "") {
    const tweetDiv = document.createElement("div");
    tweetDiv.className = "tweet";
    tweetDiv.innerHTML = "<p>" + tweetText + "</p><span>" + currentDatetime + "</span>";

    tweetsContainer.appendChild(tweetDiv);

    tweetTextInput.value = "";
  }
}
















  
  
  
  







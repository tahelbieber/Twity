
function login() {
  var username = document.getElementById("login-username").value;
  var password = document.getElementById("login-password").value;

 
  if (username === "dana" && password === "סיסמה") {
      document.getElementById("login-container").style.display = "none";
      document.getElementById("register-container").style.display = "none";
      document.getElementById("home-container").style.display = "block";
  } else {
      alert("שם משתמש או סיסמה שגויים");
  }
}
function register() {
  var username = document.getElementById("register-username").value;
  var password = document.getElementById("register-password").value;

  
  if (username === "dana") {
      
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      document.getElementById("login-container").style.display = "none";
      document.getElementById("register-container").style.display = "none";
      document.getElementById("home-container").style.display = "block";
  } else {
      alert("שם משתמש שגוי");
  }
}
function showLoginForm() {
  document.getElementById("login-container").style.display = "block";
  document.getElementById("register-container").style.display = "none";
  document.getElementById("home-container").style.display = "none";
}

function showRegisterForm() {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("register-container").style.display = "block";
  document.getElementById("home-container").style.display = "none";
}

function addTweet() {
  var tweetText = document.getElementById("tweet-text").value;
  var currentDatetime = new Date().toLocaleString();
  if (tweetText.trim() !== "") {

      var tweetDiv = document.createElement("div");
      tweetDiv.className = "tweet";
      tweetDiv.innerHTML = "<p>" + tweetText + "</p><span>" + currentDatetime + "</span>";

      document.getElementById("tweets-container").appendChild(tweetDiv);

      document.getElementById("tweet-text").value = "";
  }
}















  
  
  
  







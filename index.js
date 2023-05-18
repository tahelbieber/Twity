// CR MAJOR [conventions]: don't use "document.getElementById()" each time,
// use it once and save the element in a global constant.
// getting element from the document takes a lot of time & resources
// and should be avoided when possible

// CR minor [syntax]: use "let" or "const" instead of "var"

function login() {
	// CR minor [clean code]: this code is repeatative, consider moving this to a function
	var username = document.getElementById("login-username").value;
	var password = document.getElementById("login-password").value;

	// CR MAJOR [logic]: you are not using the credential that where configured in register() function,
	// get the credantials from local storage and check with them
	if (username === "dana" && password === "סיסמה") {
		// CR MAJOR [clean code]: this code is repeatative,
		// you already implemented method for this logic
		document.getElementById("login-container").style.display = "none";
		document.getElementById("register-container").style.display = "none";
		document.getElementById("home-container").style.display = "block";
	} else {
		alert("שם משתמש או סיסמה שגויים");
	}
}
function register() {
	// CR minor [clean code]: this code is repeatative, consider moving this to a function
	// CR minor [conventions]: use a constant instance of the element and retrieve the value from it
	var username = document.getElementById("register-username").value;
	var password = document.getElementById("register-password").value;

	// CR MAJOR [logic]: the name has to be dana?
	if (username === "dana") {
		// CR MAJOR [logic]: get the value of the password from local storage by
		// the username, support multi-user access
		// CR minor [clean code]: move this logic to a function
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
		// CR MAJOR [clean code]: this code is repeatative,
		// you already implemented method for this logic
		document.getElementById("login-container").style.display = "none";
		document.getElementById("register-container").style.display = "none";
		document.getElementById("home-container").style.display = "block";
	} else {
		alert("שם משתמש שגוי");
	}
}

function showLoginForm() {
	// CR MAJOR [clean code]: make this function more generic,
	// instead of using "block" and "none" differently each time,
	// just pass the relevant state values to the function
	document.getElementById("login-container").style.display = "block";
	document.getElementById("register-container").style.display = "none";
	document.getElementById("home-container").style.display = "none";
}

function showRegisterForm() {
	// CR minor [clean code]: this function is a duplicate of showLoginForm(),
	// consider merging the logic
	document.getElementById("login-container").style.display = "none";
	document.getElementById("register-container").style.display = "block";
	document.getElementById("home-container").style.display = "none";
}

function addTweet() {
	// CR MAJOR [logic]: shouldn't you save the tweets in local storage too?
	var tweetText = document.getElementById("tweet-text").value;
	var currentDatetime = new Date().toLocaleString();
	// CR minor [clearity]: make this condition more clear for reading,
	// ethier by adding a comment or put the condition in a properly named flag
	if (tweetText.trim() !== "") {
		var tweetDiv = document.createElement("div");
		tweetDiv.className = "tweet";
		// CR MAJOR [conventions]: do not inject HTML elements directly, use "document.createElement()"
		// CR minor [clean code]: move this logic to a function
		tweetDiv.innerHTML =
			"<p>" + tweetText + "</p><span>" + currentDatetime + "</span>";

		document.getElementById("tweets-container").appendChild(tweetDiv);

		document.getElementById("tweet-text").value = "";
	}
}

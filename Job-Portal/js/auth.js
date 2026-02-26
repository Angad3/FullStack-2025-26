function signup(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(!user || !pass){
        alert("Fill all fields");
        return;
    }

    localStorage.setItem(user, pass);
    alert("Account created!");
    window.location.href = "login.html";
}

function login(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let stored = localStorage.getItem(user);

    if(stored === pass){
        localStorage.setItem("loggedIn", user);
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials");
    }
}

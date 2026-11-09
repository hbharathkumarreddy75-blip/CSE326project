function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "" || password === "") {
        alert("Please enter Username and Password");
    } else {
        window.location.href = "course.html";
    }
}
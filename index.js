function registerButton() {
    document.getElementById("login-block").innerHTML = "";
    document.getElementById("signup-block").innerHTML = `
    <div>
        <form>
            <input placeholder="Name" type="text"/>
            <input placeholder="Email" type="email"/>
            <input placeholder="Password" type="password"/>
            <button type="submit"><a>Register</button>
        </form>
    </div>`;
}

function loginUser() {
    // you can validate credentials here if needed
    window.location.href = "home.html";
}

function registerUser() {
    // maybe store user data in localStorage or validate first
    window.location.href = "home.html";
}
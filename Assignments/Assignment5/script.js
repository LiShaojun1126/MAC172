"use strict";
// script.js
const users = {}; // Object to store users
// Sign Up function
function signup() {
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const username = document.getElementById("signupUsername").value.trim();
    const password = document.getElementById("signupPassword").value;
    if (!name || !email || !username || !password) {
        showMessage("Please fill in all fields.");
        return;
    }
    if (users[username]) {
        showMessage("Username already exists.");
        return;
    }
    // Create new user
    users[username] = { name, email, password };
    showMessage("User registered successfully!");
    console.log(users);
}
// Login function
function login() {
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;
    if (users[username] && users[username].password === password) {
        showMessage(`Welcome back, ${users[username].name}!`);
    } else {
        showMessage("Invalid username or password.");
    }
}
// Display messages
function showMessage(msg) {
    document.getElementById("message").textContent = msg;
}

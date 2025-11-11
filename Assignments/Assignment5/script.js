"use strict";
// script.js
let users = {}; // Object to store users
// Sign Up function
function signup() {
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const username = document.getElementById("signupUsername").value.trim();
    const password = document.getElementById("signupPassword").value;
    const currentUsers = JSON.parse(localStorage.getItem("users"));
    if (!name || !email || !username || !password) {
        showMessage("Please fill in all fields.");
        return;
    }
    if (currentUsers[username]) {
        showMessage("Username already exists.");
        return;
    }
    // Create new user
    users[username] = { name, email, password };
    localStorage.setItem("users", JSON.stringify(users));
    showMessage("User registered successfully!");
    console.log(users);
}
// Login function
function login() {
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;
    const usersString = localStorage.getItem("users");

    users = JSON.parse(usersString);
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

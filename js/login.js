const loginInput = document.getElementById("loginInput");
const loginButton = document.getElementById("loginButton");
const loginForm = document.getElementById("loginForm");
const greetingArea = document.getElementById("greetingArea");
const greeting = document.getElementById("greeting");
//const todoArea = document.getElementById("toDoArea");

const USERNAME_KEY = "userName";
const HIDDEN_KEY = "hidden";

function loginSubmit(e){
   // e.preventDefault();  
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY,userName);
}

    const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName===null){
    //show login form
    loginForm.classList.remove(HIDDEN_KEY);
    loginButton.addEventListener('click',loginSubmit);
}else{
    //show greetingArea
    loginForm.classList.add(HIDDEN_KEY);
   // todoArea.classList.remove(HIDDEN_KEY);
    greetingArea.classList.remove(HIDDEN_KEY);
    greeting.append(`HI ${savedUserName} WELCOME :) `)
}


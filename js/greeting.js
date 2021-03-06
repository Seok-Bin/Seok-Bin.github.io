const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const LOGOUT = document.querySelector("#button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onsubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username){
 greeting.innerText = `Wellcome ${username}`;
 greeting.classList.remove(HIDDEN_CLASSNAME);
 LOGOUT.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onsubmit);
} else{
  paintGreetings(savedUsername);
}



function logout(){
  localStorage.removeItem(USERNAME_KEY);
}

LOGOUT.addEventListener("click", logout);
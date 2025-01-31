const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//첫줄 지우고 const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; //반복되는 string은 변수 지정해놓기!

function onLoginSubmit(event) {
   event.preventDefault();  //preventDefault: 어떤 function에 대해서 브라우저가 기본적으로 수행하는 동작을 막아주는 함수수
     loginForm.classList.add(HIDDEN_CLASSNAME);
     const username = loginInput.value;
     localStorage.setItem(USERNAME_KEY, username);
   /* greeting.innerText = "Hello " + username; //greeting,innerText = `Hello ${username}`;, Not '' or ""
    greeting.classList.remove(HIDDEN_CLASSNAME);*/
    paintGreetings(username);
    }

function paintGreetings(username){
   greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); 
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    
    paintGreetings(savedUsername);
}


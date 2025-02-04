const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//첫줄 지우고 const loginInput = document.querySelector("#login-form input");
const welcome = document.querySelector("#welcome");
const greeting = document.querySelector("#greeting");
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const clock = document.getElementById("clock");
const quote = document.getElementById("quote");
const weather = document.getElementById("weather");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; //반복되는 string은 변수 지정해놓기!

function showAppElements() {
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.remove(HIDDEN_CLASSNAME);
    clock.classList.remove(HIDDEN_CLASSNAME);
    quote.classList.remove(HIDDEN_CLASSNAME);
    weather.classList.remove(HIDDEN_CLASSNAME);
    };

function onLoginSubmit(event) {
    event.preventDefault();  //preventDefault: 어떤 function에 대해서 브라우저가 기본적으로 수행하는 동작을 막아주는 함수수
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
   /* greeting.innerText = "Hello " + username; //greeting,innerText = `Hello ${username}`;, Not '' or ""
    greeting.classList.remove(HIDDEN_CLASSNAME);*/
    paintGreetings(username);
    showAppElements();
    
    };
    
    function paintGreetings(username){

        greeting.innerText = `Hello, ${username}`;
        greeting.classList.remove(HIDDEN_CLASSNAME); 
   
        document.getElementById("login-form").style.display = "none";
        document.getElementById("welcome").style.display = "none";
        
    };

    loginInput.style.width = `${loginInput.placeholder.length}ch`;

    const savedUsername = localStorage.getItem(USERNAME_KEY);

    if(savedUsername === null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);

    } else {

        paintGreetings(savedUsername);
        showAppElements();
       
    };
    
    


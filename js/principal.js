
function clickedLike(){
    document.querySelector(".client-container").style.display = "none";
    document.querySelector(".main-content").style.display = "grid";
    
}
function clickedShow(){
    document.querySelector(".client-container").style.display = "flex";
    document.querySelector(".main-content").style.display = "none";
    document.getElementById("listClients").style.display = "none";
}

function listClick(){
    document.getElementById("listClients").style.display = "inline";
    document.querySelector(".main-content").style.display = "none";
    document.querySelector(".client-container").style.display = "none";
}

var nome = document.getElementById("nome");
var email = document.getElementById("email");
var tel = document.getElementById("tel");
var data = document.getElementById("data");
var type = document.getElementById("type");
var bairro = document.getElementById("bairro");

function saveData(){
    nome.value ="";
    email.value ="";
    tel.value ="";
    data.value ="";
    type.value ="";
    bairro.value ="";
}
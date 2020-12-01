/*
var nome = "Gustavo Tavares";
var idade = 19;

alert(nome + " tem " + idade + "Anos");

console.log()

nome.toLowerCase()
nome.toUpperCase()
nome.replace("Tavares", "Santos")
*/


// Array =====================

/*
var lista = ["Gustavo", "Bruno", "Gabriela"];
lista.push("Samanta");
lista.pop();

console.log(lista);
console.log(lista.length)
console.log(lista.reverse())
console.log(lista.toString())
console.log(lista.join(" - "));
*/

// Dicionario ==================

/*
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas)
console.log(frutas[0].nome)
*/

// Condicionais ===================

/*
var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

// laços de repetição ===================

/*
var count = 0;
while(count <= 5){
    console.log(count);
    alert(count)
    count ++;
};
*/

/*
var count = 0;
for(count=0; count <=5; count++){
    alert(count);
};

*/

// Date ===================

/*
var d = new Date();
alert(d.getDay())
*/

// Funcoes =================

/* 
function soma(n1, n2){
    return n1 + n2;
};

alert(soma(10, 10));
*/


function clique() {
    // document.getElementById("agradecimento").innerHTML = "obrigado por clicar";   
    document.getElementById("agradecimento").innerHTML = "<b>obrigado por clicar</b>";
    //alert("Obrigado!")
};

function Redirecionar() {
    //Abrir em outra aba
    window.open("https://github.com/Tavares264/")
    
    //Abrir na mesma aba
    //window.location.href = "https://github.com/Tavares264/"
};

function trocar(elemento) {
    elemento.innerHTML = "obrigado";
    //alert("trocar texto")
};

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
};

function load() {
    alert("Pagina carregada");
};

function change(elemento) {
    console.log(elemento.value);
};
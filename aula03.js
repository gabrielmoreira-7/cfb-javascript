"use strict"

function teste(){
	let nome = "Gabriel"
	//var nome = "Gabriel"
	if(true){
		console.log("dentro do IF do este: " + nome) //dentro do escopo
	}

	console.log("dentro do teste: " + nome) // dentro do escopo
}

teste()
//console.log("fora do teste" + nome) // fora do escopo // terminal: nome is not defined

// uma variável "let" só é acessível dentro do seu escopo
// uma variável "var" é acessível fora do escopo em que foi criada

let texto = "10"
texto = "CFB cursos"
console.log(texto)

const curso = "Javascript" 
//curso = "html"  // o valor de uma variável const não pode ser alterado
console.log(curso)


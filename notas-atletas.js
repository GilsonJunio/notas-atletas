let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

//console.log(atletas)

function DeterminarNotaMaisAlta(arrayDeNotas){
  console.log(arrayDeNotas)
  arrayDeNotas.map((v,i,a)=>{
    console.log("Array atual: "+ arrayDeNotas)
    console.log("valor do index atual: " + arrayDeNotas[i])
    console.log("valor atual: "+ v)
    console.log(i)
    i++
    if(i<arrayDeNotas.length){
	    console.log(v + " é maior que " + arrayDeNotas[i] + "?")
	    console.log(v > a[i])
	    console.log("\n")
	    return v
    }
    else{
    	console.log("Encerrado")
    	console.log("\n")
    }
  })
}
function NotaMaisBaixa(arrayDeNotas){
  
}

function CalcularMedia(atletas){
  const notaMaisAlta = '';
  for(let i = 0; i<atletas.length;i++){
  	const notas =atletas[i].notas
  	//console.log(notas)
  	DeterminarNotaMaisAlta(notas)
  }
  //console.log(notaMaisAlta)
  
}
CalcularMedia(atletas)
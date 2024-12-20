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
  arrayDeNotas.map((v,i)=>{
    console.log(v)
    console.log(v > i)
  })
}
function NotaMaisBaixa(arrayDeNotas){
  
}

function CalcularMedia(atletas){
  const notas =[] 
  for(let i = 0; i<atletas.length;i++){
    notas.push(atletas[i].notas)
  }
  const notaMaisAlta = DeterminarNotaMaisAlta(notas)
  //console.log(notaMaisAlta)
  
}
CalcularMedia(atletas)
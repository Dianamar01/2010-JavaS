const entrada = document.getElementById("entradapar")
const btn = document.getElementById("btnpar")
const salida = document.getElementById("salida")

let numero
entrada.addEventListener("input",(evento)=>{
    console.log(evento.target.value)
    let numero = evento.target.value
})

btn.addEventListener("click"),()=>{
    if (numero%2==0) {
        
    } else {
        
    }
    console.log(evento.target.value)
    numero = evento.target.value
}
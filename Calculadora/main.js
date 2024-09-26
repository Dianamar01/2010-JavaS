const botones = document.querySelectorAll(".btn")
const pantalla = document.querySelectorAll(".pantalla)

botones.forEach(boton>={
    boton.addEventListener("click",()=>{
        const botonApretado = boton.textContent
        pantalla.textContent = botonApretado
    })
})

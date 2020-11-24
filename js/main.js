let menuaberto = false
let charscontador = 250
function ativarburger(){
    let navbar = document.querySelector('.navbar')
    navbar.style.setProperty('display', 'block')
    if(menuaberto==false){
        navbar.style.setProperty('display', 'block')
        menuaberto = true
    }else{
        navbar.style.setProperty('display', 'none')
        menuaberto = false
    }
}
function contador(){
    let contadordiv = document.getElementById('contador')
    let mensagemarea = document.getElementById('mensagem')
    let limite = mensagemarea.value.length
    if(26>(charscontador-limite)){
        contadordiv.style.setProperty('color', 'red')
        if(11>(charscontador-limite)){
            contadordiv.style.setProperty('font-size','4rem')
        }else{
            contadordiv.style.setProperty('font-size','2rem')
        }
        if((charscontador-limite)==0){
            contadordiv.style.setProperty('display','none')
        }else{
            contadordiv.style.setProperty('display','block')
        }
    }
    else{
        contadordiv.style.setProperty('color','rgb(241,202,45)')
        contadordiv.style.setProperty('font-size','1.5rem')
    }
    contadordiv.innerText = `${charscontador-limite}`
}
//Alto contraste 
if(localStorage.aux==undefined){
    localStorage.setItem('aux', 0)
}
const root = document.documentElement
document.querySelector('[value="Alto Contraste"]').addEventListener('click', () => {
    if(localStorage.aux>0){
        root.style.setProperty("--bg-color", "rgb(45,45,45)")
        root.style.setProperty("--main-color", "rgb(241,202,45)")
        root.style.setProperty('--text-color', "#eee");
        document.querySelector('.burger span').style.setProperty('color', 'var(--main-color)')
        localStorage.setItem('aux', 0)
    }else{
        localStorage.setItem('aux', 1)
        root.style.setProperty("--bg-color", "rgb(255,255,255")
        root.style.setProperty("--main-color", "rgb(20, 20, 20)")
        root.style.setProperty("--text-color", "rgb(0, 0, 0)")
        document.querySelector('.burger span').style.setProperty('color', '#fff')
    }
})
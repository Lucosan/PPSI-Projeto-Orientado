let menuaberto = false
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

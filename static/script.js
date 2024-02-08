/*Esta funcao do js vai fazer o abre e fecha do menu lateral*/

const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", () => {
    menuMobile.classList.contains("bi-list")
        ? menuMobile.classList.replace("bi-list", "bi-x")
        : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active");    
})

/*Fecha meu nav-menu quando clicar em algum item*/

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener('click', () => {
        if (body.classList.contains('menu-nav-active')) {
            body.classList.remove('menu-nav-active')
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    });
});

//Animar todos os itens que tenha todo o meu aributo data-anime

const item = document.querySelectorAll("[data-anime]");

const animeScrool = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;
    
    item.forEach((element) => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    });
};

window.addEventListener("scroll", ()=>{
    animeScrool();
})

//Troca os botao de carregamento ao enviar o formulario de contato

const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoader = document.querySelector('#btn-enviar-loader')

btnEnviar.addEventListener("click", ()=> {
    btnEnviarLoader.style.display = "block";
    btnEnviar.style.display = "none"
})

// Tira o alerta da mensagem enviada

setTimeout(() => {
    document.querySelector('#alerta').style.display = 'none';
}, 5000)


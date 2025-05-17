//DECLARANDO AS VARIAVEIS COM DOM
const sanduiche = document.querySelector('.sanduiche');
const headerMenu = document.querySelector('.header-menu');


//CRIANDO A FUNÇÃO 

function toggleMenu(){
    //Pega o elemento e adiciona na classe do css, ou remove se existir
    sanduiche.classList.toggle('active');
    headerMenu.classList.toggle('active');
}
    //CRIAR UM EVENTO QUE AO CLICAR EXECUTA FUNÇÃO TOGGLE
    sanduiche.addEventListener('click', toggleMenu);
    headerMenu.addEventListener('click', (e)=>{
        if(e.target.classList.contains('item-menu')){
            toggleMenu();
        }
    })





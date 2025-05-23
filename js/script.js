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


//DECLARANDO UM ARRAY DE IMAGENS 
let imagens = [
    'images/index/banner.jpg',
    'images/index/energia1.jpg',
    'images/index/energia2.jpg',
    'images/index/energia3.jpg',
];

//DECLARANDO AS VARIAVEIS
let i = 0;
let tempo = 3000;
const hero = document.querySelector('.hero');

//CRIANDO A FUNÇÂO DO SLIDESHOW
function slideShow(){
    if(hero){
        hero.style.backgroundImage= `var(--gradient), url('${imagens[i]}')`
    }
    i++;
    if(i == imagens.length){
        i=0;
    }
    setTimeout('slideShow()',tempo);
}

slideShow();


//EVENTO QUE CARREGA A PAGINA ANTES DE SER ANALISADO PELO CSS
document.addEventListener('DOMContentLoaded', ()=>{
    const gridItems = document.querySelectorAll('.energy-grid-item');
    const modalContainer = document.getElementById('modal-container');
    const modalImage = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');
    const closeButton = document.querySelector('.close-button');

    gridItems.forEach(item=>{
        const link = item.querySelector('a');
        link?.addEventListener('click',(e)=>{
            e.preventDefault() //Impedir que o link navegue antes de executar
            const img = item.querySelector('img');
            const text = item.querySelector('p');
            if(img && text){
                modalImage.src = img.src;
                modalImage.alt = img.alt;
                modalText.textContent = text.textContent;
                modalContainer.style.display = 'flex'; //Mostra o modal na tela
            }
        });
    });
    const closeModal=()=>{
        modalContainer.style.display = 'none' //Esconde a modal
    };
    //FECHAR A MODAL AO CLICAR FORA
    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click',(e)=>{
        if(e.target === modalContainer){
            closeModal();
        }
    });
});

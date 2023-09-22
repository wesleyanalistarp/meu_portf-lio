
function escrevendoLetra(){
    function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((Letra, i) => {
           setTimeout(()=>{
               elemento.innerHTML += Letra;
           }, 75 * i)
       
        })
       }

       const titulo = document.querySelector('.digitando');
       ativaLetra(titulo);
}
escrevendoLetra();

function menuMobol(){
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria')

    ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x');
    navMenu.classList.toggle('ativado');
  });
}
menuMobol();

function SobreMim(){

const divexperience = document.querySelectorAll('.experience_contenct div');
const liexperience = document.querySelectorAll('.experience_contenct ul li');
const diveducacao = document.querySelectorAll('.educacao_contenct div');
const lieducacao = document.querySelectorAll('.educacao_contenct ul li');

divexperience[0].classList.add('ativo')
diveducacao[0].classList.add('ativo')
liexperience[0].classList.add('ativo')
lieducacao[0].classList.add('ativo')


function slideShow(index){
        divexperience.forEach((div)=>{
        div.classList.remove('ativo');
    });
        liexperience.forEach((botao)=>{
        botao.classList.remove('ativo');
       });
       divexperience[index].classList.add('ativo');
       liexperience[index].classList.add('ativo');
}

function slideShow2(index){
    diveducacao.forEach((div)=>{
    div.classList.remove('ativo');
    });

    lieducacao.forEach((botao)=>{
    botao.classList.remove('ativo');
    });
        diveducacao[index].classList.add('ativo');
        lieducacao[index].classList.add('ativo');
    }

    liexperience.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index)
        });
     });

     lieducacao.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow2(index)
        });
     });
    }
    SobreMim();

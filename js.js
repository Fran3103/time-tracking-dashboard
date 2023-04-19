const diaBtn = document.querySelector('#daily');
const mesBtn = document.querySelector('#monthly');
const semanaBtn = document.querySelector('#weekly');
const menu = document.querySelectorAll('.menu');
const card = document.querySelector('.seccion2');
import datos from './data.json' assert {type : 'json'}
console.log(datos)

menu.forEach( boton => {
    boton.addEventListener('click', (e) =>{
        menuclick(e);
        
        
    });
    
    
})

actual()

diaBtn.addEventListener('click', ()=>{
    card.innerHTML = '';
    datos.forEach(Element=>{
        
        card.innerHTML += 
        `
        <div id=" ${Element.title}" class="cards ">
        <div class="img_encabezado ${Element.title} ">
        <img src="/images/icon-$${Element.title}.svg " alt="${Element.title}">
        </div>


        <div class = "sec">
        <div class="encabezado  ">
            <p>${Element.title}</p>
            <p class="mas">...</p>
        </div>
        <div class="date">
            <p class="horas socialHora">${Element.timeframes.daily.current}hrs</p>
            <p class="last socialLast">Previous ${Element.timeframes.daily.previous}-hrs</p>
        </div>
        </div>
        
        </div>
    `
    })
})

semanaBtn.addEventListener('click', ()=>{
    card.innerHTML = '';
    datos.forEach(Element=>{
        
        card.innerHTML += 
        `
        <div id=" ${Element.title}" class="cards ">
        <div class="img_encabezado ${Element.title} ">
        <img src="/images/icon-$${Element.title}.svg" alt="$${Element.title}}">
        </div>


        <div class = "sec">
        <div class="encabezado  ">
            <p>${Element.title}</p>
            <p class="mas">...</p>
        </div>
        <div class="date">
            <p class="horas socialHora">${Element.timeframes.weekly.current}hrs</p>
            <p class="last socialLast">Previous ${Element.timeframes.weekly.previous}-hrs</p>
        </div>
        </div>
        
        </div>
    `
    })
})

mesBtn.addEventListener('click', ()=>{
    card.innerHTML = '';
    datos.forEach(Element=>{
        
        card.innerHTML += 
        `
        <div id=" ${Element.title}" class="cards">
        <div class="img_encabezado ${Element.title} ">
        <img src="/images/icon-$${Element.title}.svg" alt="$${Element.title}}">
        </div>


        <div class = "sec">
        <div class="encabezado  ">
            <p>${Element.title}</p>
            <p class="mas">...</p>
        </div>
        <div class="date">
            <p class="horas socialHora">${Element.timeframes.monthly.current}hrs</p>
            <p class="last socialLast">Previous ${Element.timeframes.monthly.previous}-hrs</p>
        </div>
        </div>
        
        </div>
    `
    })
})


function actual(){

    actual=  datos.forEach(Element=>{
        
        card.innerHTML += 
        `
        <div id=" ${Element.title}" class="cards">
        <div class="img_encabezado ${Element.title} ">
        <img src="/images/icon-$${Element.title}.svg" alt="$${Element.title}}">
        </div>


        <div class = "sec">
        <div class="encabezado  ">
            <p>${Element.title}</p>
            <p class="mas">...</p>
        </div>
        <div class="date">
            <p class="horas socialHora">${Element.timeframes.monthly.current}hrs</p>
            <p class="last socialLast">Previous ${Element.timeframes.monthly.previous}-hrs</p>
        </div>
        </div>
        
        </div>
    `
    })
    
}




function menuclick(e) {

    
    
        menu.forEach(menu=> {
            menu.classList.remove('menu-activo');
    
        }),
    
        e.target.classList.add('menu-activo');
    
        
    
    }
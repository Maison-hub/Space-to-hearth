loader = document.querySelector('.loader');

body = document.querySelector('body')

window.addEventListener('load', ()=>{
  loader.style.display = 'none'
  body.style.overflowY = 'scroll'
})

let startInfo = document.querySelector('.start-info')

let clickInfo = document.querySelector('.click-info')
let clickInfoDisplay = document.querySelector('.Clickinfodisplay')

window.addEventListener('scroll', () =>{
  const {scrollTop, clientHeight} = document.documentElement;
  if(scrollTop > 20){
      startInfo.classList.add('disapear');
      startInfo.addEventListener('animationend', ()=>{
      startInfo.style.display = 'none';
    })
  if (startInfo.classList.contains('disapear') && clickInfoToggle == true){
    clickInfo.classList.remove('dis-none');
    clickInfoDisplay.classList.add('dis-block')
    }
  }
})

let infoBtn = document.querySelector('.info-btn')

window.addEventListener('scroll', () =>{
  let {scrollTop, clientHeight} = document.documentElement;
  console.log(scrollTop)
  if(scrollTop > 20){
    infoBtn.classList.add('info-btn-low')
    infoBtn.innerHTML = `<img src="./images/info.png" alt="information">`
  }
  else if(scrollTop < 20){
    infoBtn.classList.remove('info-btn-low')
    infoBtn.innerHTML = `<p>Informations</p>`
  }

})

let down = document.querySelector('.down')

function pageScroll() {
  window.scroll({ 
    top: 200, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });
}

down.onclick = pageScroll

function star(){
    let container = document.querySelector('.star-container')
    let n = 203
    let i = 0
    while(i<n){
        let cree = document.createElement('i')

        let size = Math.random()*3
        let posX =  Math.floor(Math.random() * (95 - 5)) + 5;
        let posY = Math.floor(Math.random() * (98 - 2)) + 2;
        let index = Math.floor(Math.random() * 3)


        cree.style.width = 2 + size + 'px'
        cree.style.height = 2 + size + 'px'
        cree.style.left = posX + '%'
        cree.style.top = posY + '%'
        cree.style.zIndex = index
        container.appendChild(cree);
        i++
    }
}
star()


let spaceTitle = document.querySelector('.space .title')
let sat = document.querySelector('.space img')
let spacePopup = document.querySelector('.spacePopup')


window.addEventListener('scroll', () =>{
    const {scrollTop, clientHeight} = document.documentElement;
    spaceTitle.style.top = `${clientHeight/2 - scrollTop/3}px`;
    sat.style.top = `calc(${40}% + ${scrollTop/8}px`
    clickInfo.style.top = `calc(${40}% + ${scrollTop/8}px`
})

let spacePopupDiv = document.querySelector('.spacePopupDiv')





let cloud1 = document.querySelector('.sky img:nth-child(1)')
let cloud2 = document.querySelector('.sky img:nth-child(2)')
let sky = document.querySelector('.sky .title')
let info = document.querySelector('.info-btn')

window.addEventListener('scroll', () =>{
    const {scrollTop, clientHeight} = document.documentElement;
    cloud1.style.top = `calc(${5}% + ${(scrollTop-325)/8}px`
    cloud2.style.top = `calc(${80}% - ${(scrollTop-325)/6}px`
    sky.style.top = `${clientHeight/1.5 + (scrollTop-325)/5}px`;
})

let wave1 = document.getElementById('wave1')
let wave2 = document.getElementById('wave2')
let wave3 = document.getElementById('wave3')
let wave4 = document.getElementById('wave4')

let sea = document.querySelector('.ground .title')


window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    
    wave1.style.backgroundPositionX = 400 + value * 2.5 + 'px'
    wave2.style.backgroundPositionX = 300 + value * -2  + 'px'
    wave3.style.backgroundPositionX = 200 + value * 1.5 + 'px'
    wave4.style.backgroundPositionX = 100 + value * -1.8 + 'px'
    if (window.innerWidth < 850 ){
      sea.style.top = `calc(150% - ${(scrollY- 1000)/2}px)`
    } else{
      sea.style.top = `calc(200% - ${(scrollY- 2000)/2}px)`
    }

})

/* popUp */

let infoPopup =  document.querySelector('.info-popup') 

infoBtn.onclick = function(){
  infoPopup.classList.toggle("show");
  let close = document.querySelector('.info-popup .btn-close')
  close.onclick = function(){
    infoPopup.classList.remove("show")
  }
}

display = document.querySelector('.display')

let clickInfoToggle = true

sat.onclick = function(){
  spacePopup.classList.toggle("show");
  let close = document.querySelector('.spacePopup .btn-close')
  close.onclick = function(){
    spacePopup.classList.remove("show")
  }

  clickInfoToggle = false

  clickInfo.classList.add('disapear');

  clickInfo.addEventListener('animationend', ()=>{
    clickInfo.classList.add('dis-none');
  })
  clickInfoDisplay.classList.add('disapear');
  
  clickInfoDisplay.addEventListener('animationend', ()=>{
    clickInfoDisplay.classList.remove('dis-block')
  })
}

plane1 = document.querySelector('.plane img:nth-child(1)')
plane2 = document.querySelector('.plane img:nth-child(2)')

plane1.onclick = function(){
  skyPopup = document.querySelector('.skyPopup')
  skyPopup.classList.toggle("show");
  let close = document.querySelector('.skyPopup .btn-close')
  close.onclick = function(){
    skyPopup.classList.remove("show")
  }
}

plane2.onclick = function(){
  skyPopup2 = document.querySelector('.skyPopup2')
  skyPopup2.classList.toggle("show");
  let close = document.querySelector('.skyPopup2 .btn-close')
  close.onclick = function(){
    skyPopup2.classList.remove("show")
  }
}


let bottle = document.querySelector('.bottle1')

bottle.onclick = function(){
  bottleAnime = document.querySelector('.bottleAnime')
  bottlePopup = document.querySelector('.bottlePopup')
  bottlePopup.classList.toggle("show");
  bottleAnime.classList.toggle("showBottle")
  let close = document.querySelector('.bottlePopup .btn-close')
  close.onclick = function(){
  bottlePopup.classList.remove("show");
  bottleAnime.classList.remove("showBottle")
  }
}


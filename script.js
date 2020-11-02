const burgerMenu = document.querySelector('.js-burger')
const nav = document.querySelector('.js-nav')


let burgerTogle = -1

burgerMenu.addEventListener('click', () => {
    if (burgerTogle < 0){
       burgerMenu.classList.add('active')
   //     open.classList.remove('active')
        nav.classList.add('active')
    } else {
      burgerMenu.classList.remove('active')
    //    open.classList.add('active')
        nav.classList.remove('active')
    }
    burgerTogle = burgerTogle * -1
})

const links = document.querySelectorAll(".js-main-nav")
console.log(links)

links.forEach(link => link.addEventListener("Click", clickHandler));
console.log("1")

function clickHandler(e){
    console.log("2")
    e.preventDefault();
    console.log("3")
    const href = this.getAttribute("href");
    console.log(href)
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
        top:offsetTop +60,
        behavior:"smooth"
    })
}


var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

const scrollToPosition = (scrollToCoords) => {
    scroll({
      top: scrollToCoords,
      behavior: 'smooth'
    })
  }

mybutton.addEventListener('click', (e) => {
    let topScr = document.documentElement.scrollTop = 0;
    
    e.preventDefault()
  
    scrollToPosition(topScr.offset)
  
   
})
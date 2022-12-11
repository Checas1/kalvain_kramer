const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav_button')
const navBtnImg = document.querySelector('#nav_button-img')

navBtn.onclick = () => {
  if(nav.classList.toggle('open')){
    navBtnImg.src = './img/nav_close.svg';
  }else {
    navBtnImg.src = './img/nav.svg';
  }
}

AOS.init()
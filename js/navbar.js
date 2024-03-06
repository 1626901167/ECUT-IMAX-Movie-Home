const sec = document.querySelector('.sec')
var but = document.querySelector('.navbar-toggler');
const search = document.querySelector('.search')
const bts = document.querySelector('.bts')
const more = document.querySelector('.more')
const bgc = document.querySelector('.bgc')
const linkSearch = document.querySelector('.nav-link-search') 
const linkMore = document.querySelector('.nav-link-more') 
const linkClose = document.querySelectorAll('.nav-link-close') 
const linkClose1 = document.querySelectorAll('.nav-link-close1') 
var flag = 0;
var flag1 = 0;
sec.addEventListener('click', function () {
  if (!search.classList.contains('show')) {
    search.classList.add('show')
    more.classList.remove('show')
    linkMore.style.display = 'block'
    linkClose1[0].style.display = 'none'
    linkClose1[0].style.color = 'black'
    flag1=0;
  } else {
    search.classList.remove('show')
  }
  if (!sec.classList.contains('bgc')) {
    sec.classList.add('bgc')
    bts.classList.remove('bgc')
  } else {
    sec.classList.remove('bgc')
  }
  
  
  flag = flag + 1;
  if(flag % 2 == 0){
    linkSearch.style.display = 'block'
    linkClose[0].style.display = 'none'
    linkClose[0].style.color = 'black'
    }
    else{
    linkSearch.style.display = 'none'
    linkClose[0].style.display = 'block'   
    linkClose[0].style.color = 'white'
  }
})



bts.addEventListener('click', function () {
  if (!more.classList.contains('show')) {
    more.classList.add('show')
    search.classList.remove('show')
    linkSearch.style.display = 'block'
    linkClose[0].style.display = 'none'
    linkClose[0].style.color = 'black'
    flag=0;
  } else {
    more.classList.remove('show')
  }
  if (!bts.classList.contains('bgc')) {
    bts.classList.add('bgc')
    sec.classList.remove('bgc')
  } else {
    bts.classList.remove('bgc')
  }


  flag1 = flag1 + 1;
  if(flag1 % 2 == 0){
    linkMore.style.display = 'block'
    linkClose1[0].style.display = 'none'
    }
    else{
    linkMore.style.display = 'none'
    linkClose1[0].style.display = 'block'
    linkClose1[0].style.color = 'white'
  }
})
if (window.screen < 992) {
  but.classList.add('.disapp')
}
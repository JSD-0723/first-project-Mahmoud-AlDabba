const darkBtn = document.getElementsByClassName('dark-mode')[0];
const favBtn=document.querySelector('.fav')
const button =document.querySelectorAll('.btn')
const contentBody = document.getElementsByClassName('content-body')[0];
const nav = document.getElementsByTagName('nav')[0];
const triangle = document.getElementsByClassName('triangle ')[0];
const welcomeContent = document.getElementsByClassName('welcome-content')[0];
const welcomePhara = document.getElementsByClassName('welcome-p')[0];
const searchBox = document.getElementsByClassName('search-box')[0];
const input = document.getElementsByTagName('input')[0];
const selector = document.querySelectorAll('.select')[0];
const selector2 = document.querySelectorAll('.select')[1];
const topicNO = document.getElementsByClassName('no-topic')[0];
const cardText =document.querySelectorAll('.card-text')
const favContainer =document.querySelector('.fav-container')
const favHeader =document.querySelector('.fav-header')

console.log(favBtn)
darkBtn.addEventListener('click', () => {
  contentBody.style.background = '#282828';
  nav.style.background = '#1A1A1A';
  welcomeContent.style.background = '#1A1A1A';
  triangle.style.background = '#1A1A1A';
  welcomePhara.style.color = '#ffffff';
  searchBox.style.background = '#1A1A1A';
  searchBox.style.color = '#ffffff';
  input.style.background = '#1A1A1A';
  selector.style.background = '#1A1A1A';
  selector.style.color = '#ffffff';
  selector2.style.background = '#1A1A1A';
  selector2.style.color = '#ffffff';
  topicNO.style.color = '#ffffff';
  favContainer.style.background = '#1A1A1A';
  favHeader.style.color = '#ffffff';
  for(let i=0;i<cardText.length;i++){
    cardText[i].style.background = '#1A1A1A';
    cardText[i].style.color = '#ffffff';
  }
  for(let i=0;i<button.length;i++){
    button[i].style.background = '#1A1A1A';
    button[i].style.color = '#ffffff';
  }
 
 
});

favBtn.addEventListener('click',()=>{
    favContainer.style.display='block'
})
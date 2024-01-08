//parallax header

    let text = document.getElementById('text');
    let smok1 = document.getElementById('smok1');
    let smok2 = document.getElementById('smok2');
    let rakieta1 = document.getElementById('rakieta');
    let btn = document.getElementById('btn');
    let skaly1 = document.getElementById('skaly');
    let las1 = document.getElementById('las');
    
    let woda1 = document.getElementById('woda');
    let header = document.getElementById('header');


window.addEventListener('scroll', function(){
    let value = window.scrollY;

    text.style.top = 40 + value * -0.1 + '%'
    smok1.style.top = value * -1.2 + 'px';
    smok1.style.left = value * -1.20 + 'px';
    smok2.style.top = value * -1 + 'px';
    smok2.style.left = value * 2 + 'px';
    btn.style.marginTop = value * 0.5 + 'px';
    rakieta.style.top = 2 + value * -0.04 + '%';
    skaly1.style.top = value * -0.13 + 'px';
    las1.style.top = value * 0.25 + 'px';
    header.style.top = value * 0.1 + 'px';

    });






//mobile hamburger menu

window.onload = function () {

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');



    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');

    });

    //closing menu
    mobile_menu.addEventListener('click', function (){
    mobile_menu.classList.remove('is-active');
    menu_btn.classList.toggle('is-active');
    });

};






//back to top icon

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 400) {
      toTop.classList.add("active");  
    }else {
        toTop.classList.remove("active");
    }
});

//back to top buy now icon

const toTopBuyNow = document.querySelector(".to-top-buy-now");

window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 400) {
      toTopBuyNow.classList.add("active");  
    }else {
        toTopBuyNow.classList.remove("active");
    }
})

var nav = document.querySelector('nav');
var navBrand = document.getElementsByClassName('navbar-brand')[0];
var navLink = document.getElementsByClassName('nav-link');



    window.addEventListener('scroll',function(){
      if(window.pageYOffset > 10){
        
        nav.classList.add('bg-light','shadow');
        navBrand.style.color = "#064635";
        document.querySelector('.navbar-toggler').classList.add('bg-success');
        for(i=0;i<5;i++){
        navLink[i].style.color = "#064635";
        navLink[i].classList.remove('customNavLink');
      }
      }


      else{
        nav.classList.remove('bg-light','shadow');
        navBrand.style.color = "white";
        document.querySelector('.navbar-toggler').classList.remove('bg-success');
        for(i=0;i<5;i++){
        navLink[i].removeAttribute("style");
        navLink[i].classList.add('customNavLink');
      }
      }
    })
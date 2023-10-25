
const nav_links=document.querySelectorAll('.nav__item-link');
const sub_links=document.querySelectorAll('.sub_link');
// const d_none=document.querySelectorAll('.d-none');

function collapse_nav(head, toggler, sidenav, resultClass,main_box,bohor) {
    const header = document.getElementById(head);
    const nav_toggler = document.getElementById(toggler);
    const nav = document.getElementById(sidenav);
    const Main_box = document.getElementById(main_box);
    const Bohor = document.getElementById(bohor);
    const results = document.getElementsByClassName(resultClass);
  
    nav_toggler.addEventListener('click', function() {
      this.classList.toggle('fa-times');
      nav.classList.toggle('collapse');
      Main_box.classList.toggle('main_box');
      header.classList.toggle('collapse-header');
      Bohor.classList.toggle('bohor');
      
      // Toggle the class for each element with the specified class
      for (let i = 0; i < results.length; i++) {
        results[i].classList.toggle('result_collapse');
      }
    });
  }
  

 collapse_nav("header","nav-toggler","nav","result","main_box","Bohor");

nav_links.forEach(link =>{
    link.addEventListener('click',function(){
        nav_links.forEach(I=>{
           
        if(I.classList.contains('active')){
       I.classList.remove('active')
        }
        
          
         } )
        this.classList.toggle('active');

        const sub_menu=this.nextElementSibling;
        if(sub_menu){
            sub_menu.classList.toggle('d-none')
        }
    });
});

sub_links.forEach(link => {
    link.addEventListener('click',()=>{
        sub_links.forEach(l =>l.classList.remove('active-sub-link'));
    
       
        link.classList.toggle('active-sub-link');
    });
});


// global $ , alert , console 
$(function(){

'use strict';

var userErrors=true,
    
    mailErrors=true,

    phoneErrors=true;

// function echeckErrors() {

//     if(userErrors===true||mailErrors===true||phoneErrors===true){

//       console.log('there\'s Error in form');

//     }else{

//         console.log('Form is valid ');
//     }
// }
// echeckErrors();

$('.username').blur(function(){

    if($(this).val().length<3){

     $(this).css('border','1px solid red')  ;

     $(this).parent().find('.custom-alert').fadeIn(200).

     end().find('.asterisx').fadeIn(100);

        userErrors=true;

    }else{

     $(this).css('border','1px solid green').parent().find('.custom-alert').fadeOut(200)

    .end().find('.asterisx').fadeOut(100);

          userErrors=false;

    }
    // echeckErrors();
});

    $('.mail').blur(function(){
    
        if($(this).val()===''){
    
         $(this).css('border','1px solid red')   ;
    
         $(this).parent().find('.custom-alert').fadeIn(200);
    
         $(this).parent().find('.asterisx').fadeIn(100);

         mailErrors=true;
    
        }else{
    
         $(this).css('border','1px solid green')   ;
    
         $(this).parent().find('.custom-alert').fadeOut(200);
    
         $(this).parent().find('.asterisx').fadeOut(100);

         mailErrors=false;
    
        }
        // echeckErrors();
    });
    

        $('.message').blur(function(){
        
            if($(this).val().length<10){
        
             $(this).css('border','1px solid red')   ;
        
             $(this).parent().find('.custom-alert').fadeIn(200);
        
             $(this).parent().find('.asterisx').fadeIn(100);

             phoneErrors=true;
        
            }else{
        
             $(this).css('border','1px solid green')   ;
        
             $(this).parent().find('.custom-alert').fadeOut(200);
        
             $(this).parent().find('.asterisx').fadeOut(100);

             phoneErrors=false;
        
            }
            // echeckErrors();

          
        });
        
        $('.contact-form').submit(function(e){
            if(userErrors===true||mailErrors===true||phoneErrors===true){
                 e.//阻止默认事件
                 //preventDefault()[dom标准写法(ie678不兼容)]
                 //ie678用returnValue
                 //或者利用return false也能阻止默认行为,没有兼容问题(只限传统注册方式)
                 preventDefault();
                 $('.username,.mail,.message').blur();
            }
           
            });
        });
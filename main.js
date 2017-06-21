$(document).ready(function(){
    $(document).on('click','.nav',function(){
        $('.nav').toggleClass('activ');
        $('.menu').toggleClass('activ');
    })
});

//var menu = document.getElementById('menu');
//menu.onmouseover = menuShow;
//menu.onmouseout = menuHide;
//document.onkeydown = function(event){
//    console.log(event);
//    if(event.code == 'KeyM'){
//        menuShow();
//    }else if(event.code == 'Escape'){
//        menuHide();
//    }else{
//        alert('Нажмите "m", чтобы открыть меню');
//    }
//}
//function menuShow(){
//    menu.style.left = 0;
//}
//function menuHide(){
//    menu.style.left = '-200px';
//}


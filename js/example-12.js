$(document).ready(function(){// . : 체이닝 기법
    // console.log('ok');
    var menubar = $('.menubar,.btn-menubar');
    var menu = $('.menu');

    menubar.on('click',function(){
        menu.toggleClass('menu-act');
        
    });

});

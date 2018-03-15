$(document).ready(function(){
    console.log(1);
    var box1 = $('.box1');
    var btn = $('btn');

    btn.on('click', function(){
        box1.toggleClass('box-act');
        // if(box1.hasclass('box-act')){
        //     box1. removeclass('box-act');
        // }else{
        //     box1.addclass('box-act');
        // }
    });
});
$('#avatar1').show();
$(function(){
   
    $('[data-img]').mouseover(function(){
        var target = $(this).attr('data-img');
        console.log(target);
        if ($(this).hasClass('active')){
            noop();
        } else{
            $('.site-content .bottom-avatars ul li').removeClass('active');
            $(this).addClass('active');                
            $('.site-content .main-avatar ul li').fadeOut(200);
            $(target).fadeIn(200);  
        }
    });
   
});
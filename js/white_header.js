$(window).on('scroll' , function()
{
    if($('html').scrollTop() > 150)
    {
        $('.header_menu').css({'display' : 'none'});
        $('.header_menu_white').css({'display' : 'flex'});
        $('.logo').css({'display' : 'none'});
        $('.logo_black').css({'display' : 'flex'});
        $('.link_menu_white').hover(function()
        {
            $(this).addClass('link_menu_white');
        });
    }
    else
    {
        $('.header_menu_white').css({'display' : 'none'});
        $('.header_menu').css({'display' : 'flex'});
        $('.logo_black').css({'display' : 'none'});
        $('.logo').css({'display' : 'flex'});
        $('.link_menu').hover(function()
        {
            $(this).addClass('link_menu');
        });
    }
});

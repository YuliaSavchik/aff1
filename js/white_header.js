$(window).on('scroll' , function()
{
    if($('html').scrollTop() > 150)
    {
        $('.link_menu').hover(function()
        {
            $(this).toggleClass('link_menu_white')
        });
        $('.header_menu').css({'display' : 'none'});
        $('.header_menu_white').css({'display' : 'flex'});
        $('.logo').css({'display' : 'none'});
        $('.logo_black').css({'display' : 'flex'});
    }
    else
    {
        $('.link_menu_white').hover(function()
        {
            $(this).toggleClass('link_menu')
        });
        $('.header_menu_white').css({'display' : 'none'});
        $('.header_menu').css({'display' : 'flex'});
        $('.logo_black').css({'display' : 'none'});
        $('.logo').css({'display' : 'flex'});
    }
});
function openOffcanvas($element){
	$element.addClass('open-offcanvas');
}

function hideOffcanvas($element){
	$element.removeClass('open-offcanvas');
}

$(".open-off").on('click', function(){
	openOffcanvas($('html'));
});

$("html, body").on('swiperight', function(){
	openOffcanvas($('html'));
});

$("html, body").on('swipeleft', function(){
	hideOffcanvas($('html'));
});

$("html, body").on('click', function(e){
	if(this === e.target)
		hideOffcanvas($('html'));
});

$("a.list-link").on('click', function(e){
	if(this === e.target)
		hideOffcanvas($('html'));
})

var win = $(window),
                msg = $('#escreva');

            msg.typer(['<i>Olá</i> <u>meu nome</u> é <b>Bruno Cabral!</b></span>', '<i>Sou</i> <b>Desenvolvedor</b> <u>Front-End</u>.', '<u>Apaixonado</u> por <b>Tecnologia.</b>', '<i>Eterno</i> <b>Descobridor!</b></span>']);// mensagem

           
            win.resize(function(){
                var fontSize = Math.max(Math.min(win.width() / (1 * 10), parseFloat(Number.POSITIVE_INFINITY)), parseFloat(Number.NEGATIVE_INFINITY));// tamanho do box

                msg.css({
                    fontSize: fontSize * .5 + 'px' 
                });// tamanho da fonte
            }).resize();


$(document).ready(function(){
  $("a.list-link, a.link-chevron").on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
      window.location.hash = hash;
    });
  });
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})
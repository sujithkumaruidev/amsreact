$('#sandbox-container input').datepicker({
    autoclose: true
});

$('#sandbox-container input').on('show', function(e){
    console.debug('show', e.date, $(this).data('stickyDate'));
    
    if ( e.date ) {
         $(this).data('stickyDate', e.date);
    }
    else {
         $(this).data('stickyDate', null);
    }
});

$('#sandbox-container input').on('hide', function(e){
    console.debug('hide', e.date, $(this).data('stickyDate'));
    var stickyDate = $(this).data('stickyDate');
    
    if ( !e.date && stickyDate ) {
        console.debug('restore stickyDate', stickyDate);
        $(this).datepicker('setDate', stickyDate);
        $(this).data('stickyDate', null);
    }
});


  $(document).ready(function(){
    $(".mobile-menu-toggle").click(function(){
        $("#toggle-menu").toggle();
    });
});
const $button  = document.querySelector('#sidebar-toggle');
     const $wrapper = document.querySelector('#wrapper');

     $button.addEventListener('click', (e) => {
     e.preventDefault();
     $wrapper.classList.toggle('toggled');
     });

    //  const $button  = document.querySelector('#desktop-menu');
    //  const $wrapper = document.querySelector('#desktop-wrapper');

    //  $button.addEventListener('click', (e) => {
    //  e.preventDefault();
    //  $wrapper.classList.toggle('toggled');
    //  });
    $(document).ready(function(){
        $("#desktop-menu").click(function(){
              $(".desktop-wrapper").toggleClass("addcls");
      });
    });
    $('.sub-menu ul').hide();
    $(".sub-menu a").click(function () {
        $(this).parent(".sub-menu").children("ul").slideToggle("100");
        $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
    });
    
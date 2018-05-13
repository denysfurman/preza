



        //serch
        $('.control , .icon-material-search , icon-material-search img , .btn-material').click( function(){
            $('body').addClass('search-active');
            $('.input-search').focus();
            $('.icon-close').fadeIn();
        });

        $('.icon-close').click( function(){
            $('body').removeClass('search-active');
            $('.icon-close').fadeOut();
        });








    });






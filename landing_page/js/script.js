document.getElementById("Simple").style.display = "block";

function open_tab(evt, cityName) 
{
    var i, tabcontent, tablinks, tab__nombers;    
        
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");


     for (i = 0; i < tabcontent.length; i++) 
     {
        tabcontent[i].style.display = "none";
        tablinks[i].className = tablinks[i].className.replace(" active", "");
     }

     var name = document.getElementById(cityName).style.display = "block";
     evt.currentTarget.className += " active";
     
     for(i = 0; tablinks.length;i++)
     {
        if(tablinks[i].className == "tablinks active")
        {
            if (i == 0)
            {
                $('.tab__nomber1').addClass('tab__nomber__active');
                $('.tab__nomber2').removeClass('tab__nomber__active');
                $('.tab__nomber3').removeClass('tab__nomber__active');
            }
            else if (i == 1)
            {
                $('.tab__nomber2').addClass('tab__nomber__active');
                $('.tab__nomber1').removeClass('tab__nomber__active');
                $('.tab__nomber3').removeClass('tab__nomber__active');
            }
            else
            {
                $('.tab__nomber3').addClass('tab__nomber__active');
                $('.tab__nomber2').removeClass('tab__nomber__active');
                $('.tab__nomber1').removeClass('tab__nomber__active');
            }
        }
     }

 }

$(document).ready(function() {

    function change_img()
    {
        var current_image = $('.img.curry'),
            current_image_index = $('.img.curry').index(),
            prev_image_index = current_image_index - 1,
            prev_image = $('.img').eq(prev_image_index);

        current_image.fadeOut(500);
        current_image.removeClass('curry');
        prev_image.fadeIn(500);
        prev_image.addClass('curry');
    }


    $('.next').click(function(){
        var current_image = $('.img.curry'),
            current_image_index = $('.img.curry').index(),
            next_image_index = current_image_index + 1,
            next_image = $('.img').eq(next_image_index);

        current_image.fadeOut(500);
        current_image.removeClass('curry');

        if (next_image_index != 3)
        {
            next_image.fadeIn(500);
            next_image.addClass('curry');
        }
        else
        {
            $('.img').eq(0).fadeIn(500);
            $('.img').eq(0).addClass('curry');

        }

    });
    
    $('.prev').click(function(){
        var current_image = $('.img.curry'),
            current_image_index = $('.img.curry').index(),
            prev_image_index = current_image_index - 1,
            prev_image = $('.img').eq(prev_image_index);

        current_image.fadeOut(500);
        current_image.removeClass('curry');
        prev_image.fadeIn(500);
        prev_image.addClass('curry');

    });
    $('.burger__ico').click(function(){
        $('.burger__item').toggle(100);
    });
});


/*var timer = setInterval(function(){
    var current_image = $('.img.curry'),
        current_image_index = $('.img.curry').index(),
        prev_image_index = current_image_index - 1,
        prev_image = $('.img').eq(prev_image_index);

    current_image.fadeOut(500);
    current_image.removeClass('curry');
    prev_image.fadeIn(500);
    prev_image.addClass('curry');
    }, 3000);*/
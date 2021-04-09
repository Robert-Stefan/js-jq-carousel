$(document).ready(function() {

    //References
    var nextBtn = $('.next'); 
    var prevBtn = $('.prev');

    //FRECCE
    nextBtn.click(function() {
        nextPrevSlide('next');
    });

    prevBtn.click(function() {
        nextPrevSlide('prev');
    });

    //Navigazione con keyboard
    $(document).keydown(function(e){
        console.log(e);
        console.log(e.keyCode);

        if(e.keyCode == 37) {
            nextPrevSlide('prev');
        } else if(e.keyCode == 39) {
            nextPrevSlide('next');
        }
    });

    //Dots
    //References

    var dots = $(".nav i");
    var image = $(".images img");

    //FUNCTIONS
    dots.click( function(){
        // indice

        var dot = dots.index(this);
        // RESET

        image.removeClass("active");
        dots.removeClass("active");
        //AddClass

        $(image[dot]).addClass("active");
        $(dots[dot]).addClass("active");
    });

});

//FUNCTIONS
//naviga tra le slides

function nextPrevSlide(direction) {
    console.log(direction);
    //References

    var activeImage = $('.images img.active');
    var activeCircle = $('.nav i.active');

    //reset

    activeImage.removeClass('active'); 
    activeCircle.removeClass('active');

    //next

    if(direction === 'next') {
        if(activeImage.hasClass('last')) {
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        } else {
            activeImage.next('img').addClass('active');
            activeCircle.next('i').addClass('active');
        }    
    }
    //Prev

    else if (direction === 'prev'){
        if(activeImage.hasClass('first')) {
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        } else {
            activeImage.prev('img').addClass('active');
            activeCircle.prev('i').addClass('active');
        }
    };
}


$(function(){
    $('.top-banner h3').css("opacity","0");
    $('.top-banner p').css("opacity","0");
    $('.top-banner .btn-active').css("opacity","0");
    setTimeout(function () {
        $('.top-banner h3').addClass('animated fadeInUp');
        setTimeout(function () {
            $('.top-banner p').eq(0).addClass('animated fadeInUp');
            setTimeout(function () {
                $('.top-banner p').eq(1).addClass('animated fadeInUp');
                setTimeout(function () {
                    $('.top-banner p').eq(2).addClass('animated fadeInUp');
                    setTimeout(function () {
                        $('.top-banner .btn-active').addClass('animated pulse');
                        $('.top-banner .btn-active').css("opacity","1");
                    },300);
                }, 300);
            }, 300);
        }, 300);
    }, 300);
})
$(window).on('scroll', function () {
    var scroll = $(this).scrollTop();
    $('.part-box').each(function () {
        var ot = $(this).offset().top;
        if (ot <= scroll + 700) {
            if ($(this).parents('.page-2').attr("id") == "page-2"){
                showAnimation1(".page-2 .part-box","animated bounceIn",400);
            }
            if ($(this).parents('.page-3').attr("id") == "page-3"){
                showAnimation1(".page-3 .part-box","animated bounceInLeft",400);
            }
            if ($(this).parents('.page-4').attr("id") == "page-4"){
                showAnimation1(".page-4 .part-box","animated bounceInRight",400);
            }
            if ($(this).parents('.page-5').attr("id") == "page-5"){
                showAnimation1(".page-5 .part-box","animated swing",200);
            }
            if ($(this).parents('.page-6').attr("id") == "page-6"){
                showAnimation1(".page-6 .part-box","animated fadeInUp",200);
            }
            if ($(this).parents('.page-7').attr("id") == "page-7"){
                showAnimation1(".page-7 .part-box","animated pulse",100);
            }
        }
    });
});

function showAnimation1(index,animated,time){
    setTimeout(function () {
        var $this =  $(index).eq(0);
        $this.addClass(animated);
        $this.css("opacity","1");
        setTimeout(function () {
            var $this =  $(index).eq(1);
            $this.addClass(animated);
            $this.css("opacity","1");
            setTimeout(function () {
                var $this =  $(index).eq(2);
                $this.addClass(animated);
                $this.css("opacity","1");
                setTimeout(function () {
                    var $this =  $(index).eq(3);
                    $this.addClass(animated);
                    $this.css("opacity","1");
                    setTimeout(function () {
                        var $this =  $(index).eq(4);
                        $this.addClass(animated);
                        $this.css("opacity","1");
                    },time);
                },time);
            },time);
        },time);
    },time);
}


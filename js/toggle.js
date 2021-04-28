$('.navItem').click(function(){
    // 导航锚点定位
    var target = $(this).find("a")[0].hash; //获取到点击对应id
    if (target.length) { 
        var targetOffset = $(target).offset().top - 80; // 获取对应id元素位于文档top位置
        $('html,body').animate({   //滑动效果主要用到jq的animate函数
            scrollTop: targetOffset
        },20);
        return false;
    }
})

$('.menu-hamburger').click(function() {
    $(this).toggleClass('active');
    $('.menu-wrapper').toggleClass('show');
});

$('.menu-wrapper .navItem').click( function() {
    $('.menu-hamburger').removeClass('active');
    $(this).parent().parent().removeClass('show');
})

//Lottery carousel
$(document).ready(function(){
    var owl = $("#owl-carousel").owlCarousel({
        dots: false,
        items: 24, // THIS IS IMPORTANT
        slideBy: 24,
        loop: true,
        mouseDrag: true,
        pullDrag: true,
        navText: ["<img src='images/zuo.png'>","<img src='images/you.png'>"],
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 15,
            },
            1200: {
                items: 24,
            }
        },
    }).on("dragged.owl.carousel", function (event) {
        if (event.relatedTarget['_drag']['direction'] == "right") {
            // owl.trigger('prev.owl.carousel');
        } else {
            owl.trigger('next.owl.carousel');
        }
    });
});

//Laptop carousel
$(document).ready(function(){
    $("#laptop-owl").owlCarousel({
        dots: false,
        items: 1, // THIS IS IMPORTANT
        slideBy: 1,
        loop: true,
        mouseDrag: true,
        pullDrag: true,
        navText: ["<img src='images/zuo.png'>","<img src='images/you.png'>"],
    });
});

//Mobile carousel
$(document).ready(function(){
    $("#mobile-owl").owlCarousel({
        dots: false,
        items: 1, // THIS IS IMPORTANT
        slideBy: 1,
        loop: true,
        mouseDrag: true,
        pullDrag: true,
        navText: ["<img src='images/zuo.png'>","<img src='images/you.png'>"],
    });
});

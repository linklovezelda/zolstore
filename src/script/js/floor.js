$(function() {
    const $floornav = $('.floornav');
    const $floor = $('.floornav li');
    const $louceng = $('.louceng');
    const $last = $('.last');
    $(window).on('scroll', function() {
        let $scrolltop = $(window).scrollTop();
        if ($scrolltop >= 420) {
            $floornav.show();
        } else {
            $floornav.hide();
        }

        $('.position').html($scrolltop);
        $louceng.each(function(index, element) {
            console.log($louceng.eq(index).offset().top);
            let $loucengtop = $louceng.eq(index).offset().top + $(element).height() / 2;
            if ($loucengtop >= $scrolltop) {
                $('.floornav li').not('.last').removeClass('active');
                return false;
            }
        });
    });
    $floor.not('.last').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        let $loucengtop = $louceng.eq($(this).index()).offset().top;
        $('html,body').animate({
            scrollTop: $loucengtop
        });
    });
    $last.on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        });
    });
})
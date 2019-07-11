$(function() {
    var $num = 0;
    var $picnum = 8;
    var bstop = true;
    var $first = $('.piclist li:first').clone(true);
    var $last = $('.piclist li:last').clone(true);
    $('.piclist').append($first);
    $('.piclist').prepend($last);
    $('.piclist').width($('.piclist li').length * $('.piclist li').eq(0).width()).css('left', '-1109px');

    $('.btnlist li').click(function() {
        if (bstop) {
            $num = $(this).index();
            tab();
        }
        bstop = false;
    });

    $('#right').click(function() {
        if (bstop) {
            $num++;
            document.title = $num;
            if ($num == $picnum) {
                $('.btnlist li:first').addClass('active').siblings('.btnlist li').removeClass('active');
            }
            tab();
        }
        bstop = false;
    });

    $('#left').click(function() {
        if (bstop) {
            $num--;
            tab();
        }
        bstop = false;
    });

    function tab() {
        $('.btnlist li').eq($num).addClass('active').siblings('.btnlist li').removeClass('active');
        $('.piclist').animate({
            left: -1109 * ($num + 1) + 'px'
        }, 200, function() {
            if (parseInt($('.piclist').css('left')) == -1109 * ($picnum + 1)) {
                $('.piclist').css('left', '-1109px');
                $num = 0;
            }
            if (parseInt($('.piclist').css('left')) == 0) {
                $('.piclist').css('left', -1109 * $picnum + 'px');
                $num = 3;
            }
            bstop = true;
        })
    }

});
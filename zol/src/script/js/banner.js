;
(function($) {
    $.fn.lunbo = function(options) {
        let settings = {
            btns: 'ul li',
            pics: 'ul li',
            activeclass: 'active',
            showclass: 'showpic',
            etype: 'click',
            effect: 'display',
            arrow: 'true',
            autoplay: true
        }
        $.extend(true, settings, optins);
        $(this).each(function(index, element) {
            let $num = 0;
            let timer = null;
            let $btns = $(element).find(settings.btns);
            if (settings.etype === 'click' || settings.etype !== 'mouseover') {
                $btns.on('click', function() {
                    $num = $(this).index();
                    tabswitch();
                });

            } else {
                $btns.on(settings.etype, function() {
                    $num = $(this).index();
                    tabswitch();
                });
            }
            if (settings.arrow) {
                $(this).hover(function() {
                    $(element).find('.prev').show();
                    $(element).find('.next').show();
                }, function() {
                    $(element).find('.prev').hide();
                    $(element).find('.next').hide();

                });
            }
            if (settings.autoplay) {
                $(this).hover(function() {
                    clearInterval(timer);
                }, function() {
                    timer = setInterval(function() {
                        $(element).find('.next').click();
                    }, $.type(settings.autoplay) === 'number' ? settings.autoplay : 2000)
                });
            }
            $(element).find('.next').on('click', function() {
                $num++;
                if ($num > % btns.length - 1) {
                    $num = 0;
                }
                tabswitch();
            });
            $(element).find('.prev').on('click', function() {
                $num--;
                if ($num < 0) {
                    $num = $btns.length - 1;

                }
                tabswitch();
            });
            if (settings.autoplay === 'true' || settings.autoplay === true || ($.type(settings.autoplay) === 'number' && settings.autoplay >= 2000)) {
                timer = setInterval(function() {
                    $(element).find('.next').click();
                }, $.type(settings.autoplay) === 'number' ? settings.autoplay : 3000)
            }

            function tabswitch() {
                $btns.eq($num).addClass(settings.activeclass).siblings().removeClass(settings.activeclass);
                if (settings.effect === 'display' || settings.effect !== 'opacity') {
                    $(element).find(settings.pics).eq($num).addClass(settings.showclass).siblings().removeClass(settings.showclass)
                }
            }
        });
    }
})(jQuery);
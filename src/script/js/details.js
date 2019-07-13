! function() {
    //1.获取sid
    var picid = location.search.substring(1).split('=')[1];


    //2.将当前的id传给后端获取对应的数据
    $.ajax({
        url: '127.0.0.1:8080/zolstore/php/detail.php',
        data: {
            pid: picid
        },
        dataType: 'json'
    }).done(function(data) { //data:后端返回的和id对应的数据
        console.log(data);
        $('#smallpic').attr('src', data.url);
        $('#bpic').attr('src', data.url);
        $('#smallpic').attr('sid', data.sid);
        $('.loadtitle').html(data.titile);
        $('.loadpcp').html(data.price);
        var arr = data.urls.split(',');
        console.log(arr);
        var str = '';
        $.each(arr, function(index, value) {
            str += '<li><img src="' + value + '"/></li>';
        });
        $('#list ul').html(str);

    });


    ! function() {

        $('#sf').width($('#spic').width() * $('#bf').width() / $('#bpic').width());
        $('#sf').height($('#spic').height() * $('#bf').height() / $('#bpic').height());
        var bili = $('#bpic').width() / $('#spic').width();
        $('#spic').hover(function() {
            $('#sf').css('visibility', 'visible');
            $('#bf').css('visibility', 'visible');
            $(this).on('mousemove', function(ev) {
                var $left = ev.pageX - $('.goodsinfo').offset().left - $('#sf').width() / 2;
                var $top = ev.pageY - $('.goodsinfo').offset().top - $('#sf').height() / 2;
                if ($left < 0) {
                    $left = 0;
                } else if ($left >= $('#spic').width() - $('#sf').width()) {
                    $left = $('#spic').width() - $('#sf').width();
                }
                if ($top < 0) {
                    $top = 0;
                } else if ($top >= $('#spic').height() - $('#sf').height()) {
                    $top = $('#spic').height() - $('#sf').height();
                }
                $('#sf').css('left', $left);
                $('#sf').css('top', $top);
                $('#bpic').css('left', -$left * bili);
                $('#bpic').css('top', -$top * bili);
            });
        }, function() {
            $('#sf').css('visibility', 'hidden');
            $('#bf').css('visibility', 'hidden');
        });

        //点击小图切换
        $('#list ul').on('click', 'li', function() {
            var $imgurl = $(this).find('img').attr('src');
            $('#smallpic').attr('src', $imgurl);
            $('#bpic').attr('src', $imgurl);
        });

        //点击箭头进行切换
        var $num = 6; //放大镜显示6张。
        $('#right').on('click', function() {
            var $list = $('#list ul li'); //8
            if ($list.length > $num) {
                $num++;
                $('#left').css('color', '#333');
                if ($list.length == $num) {
                    $('#right').css('color', '#fff');
                }
                $('#list ul').animate({
                    left: -($num - 6) * $list.eq(0).innerWidth()
                })
            }
        });

        $('#left').on('click', function() {
            var $list = $('#list ul li'); //8
            if ($num > 6) {
                $num--;
                $('#right').css('color', '#333');
                if ($num <= 6) {
                    $('#left').css('color', '#fff');
                }
                $('#list ul').animate({
                    left: -($num - 6) * $list.eq(0).innerWidth()
                })
            }
        });
    }();


    var arrsid = [];
    var arrnum = [];

    function cookietoarray() {
        if (getcookie('cookiesid') && getcookie('cookienum')) {
            arrsid = getcookie('cookiesid').split(',');
            arrnum = getcookie('cookienum').split(',');
        }
    }
    $('.p-btn a').on('click', function() {
        var $sid = $(this).parents('.goodsinfo').find('#smallpic').attr('sid');
        cookietoarray();
        if ($.inArray($sid, arrsid) != -1) {
            var num = parseInt(arrnum[$.inArray($sid, arrsid)]) + parseInt($('#count').val());
            arrnum[$.inArray($sid, arrsid)] = num;
            addcookie('cookienum', arrnum.toString(), 10);
        } else {
            arrsid.push($sid);
            addcookie('cookiesid', arrsid.toString(), 10);
            arrnum.push($('#count').val());
            addcookie('cookienum', arrnum.toString(), 10);
        }
    });
}();
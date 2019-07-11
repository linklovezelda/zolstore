$(function() {
    // 动态的显示和隐藏现实框
    $("#zs-big-pic").mouseover(function() {
        $("#zoom1-big").show();
    }).mouseout(function() {
        $("#zoom1-big").hide();
    });
    //切换图片

    function zoom1(smallImg, bigImg) {
        MagicZoom_stopZooms();
        _el('zs-big-pic').innerHTML = '<a href="' + bigImg + '" id="zoom1" rel="drag-mode: false; always-show-zoom: flase; zoom-position: custom;zoom-width:400px; zoom-height:400px;" class="MagicZoom" style="cursor: crosshair"><img src="' + smallImg + '"/></a>';
        setTimeout('MagicZoom_findZooms()', 100);
    }
    var bigImgA = $("#zoom1");
    var bigImgObj = $("#bigImgZoom");
    var bigImgDivObj = $("#zs-big-pic");
    //鼠标轮换
    setTimeout(function() {
        $("#zoomPreload").css('display', 'none');
    }, 100);
    $(".zs-focus-list li").click(function() {
        $("#zoomPreload").css('display', 'block');
        var imgSrc = $(this).find("img").attr('src');
        imgSrc = imgSrc.replace(/70x[0-9]{2,}/g, "400x400");
        imgSrc = imgSrc.replace(/80x[0-9]{2,}/g, "400x400");
        var bigImgZoom = imgSrc.replace(/400x400/g, "800x800");
        zoom1(imgSrc, bigImgZoom);
        $(this).siblings().removeClass('hover').find('i').removeClass('border');
        $(this).addClass('hover').find('i').addClass('border');
        setTimeout(function() {
            $("#zoomPreload").css('display', 'none');
        }, 500);
    });
})
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













{
    /* <script>
        var goodsUrl = "http://www.zol.com/detail/motherboard/colorful/30367037.html";
    </script>
    <script>
        var clearStoreExtra = 0;
        $(".shop-rate,.store-extra-info").mouseover(function() {
            clearTimeout(clearStoreExtra);
            $(".store-extra-info").show();
        }).mouseout(function() {
            clearTimeout(clearStoreExtra);
            clearStoreExtra = setTimeout(function() {
                $(".store-extra-info").hide();
            }, 200);
        });

        $(".ask-link").click(function() {
            $("#zp-enter-message").show();
        });
        $(".close").click(function() {
            $("#zp-enter-message").hide();
        });
    </script>
    <script>
        //生意宝参数设置
        var doveProInfo = {
            'proId': "391304",
            'proName': "七彩虹 战斧C.Z97 X3魔音版 V20",
            'proPrice': '4899',
            'subId': '5',
            'manuId': '413'
        };
        var businessname = '191490'; //商家名称
        var businessType = 'Z';

        //页面公用参数
        var goodsId = '30367037';
        var productId = '391304';
        var subId = '5';
        var manuId = '413';
        var merchantId = '191490';
        var goodsName = '甲骨龙 9代i5 9600K GTX1660Ti 6G独显 240GB硬盘 游戏电脑 DIY组装机';
        var isContract = ''; //是否合约产品
        var isCloudCard = ''; //是否云卡产品
        var isOnline = '1'; //是否不价格面议
        var isLogin = '0';
        var baseDetailUrl = "http://www.zol.com/index.php?"; //Ajax请求基础域名
        //        var baseDetailUrl = "http://shop.zhangfan.test.zol.com/index.php?"; // 测试使用
        var cType = 'Detail'; //建议反馈
        var aType = 'Detail'; //建议反馈
        var isHaveSuitInfo = '1';
        var decreaseObj = $(".zs-decrease");
        var increaseObj = $(".zs-increase");
        var changeNumObj = $("#zp-goods-number");
        var curUrl = window.location.href; // 当前页面链接
        // 统计代码
        var zpFrom = null;
        var topicId = 0;
        var statUrl = location.search; //获取url中"?"符后的字串
        if (statUrl.indexOf("?") != -1) {
            var strArr = new Array();
            var statStr = statUrl.substr(1);
            var strParamsArr = statStr.split("&");
            var strLen = strParamsArr.length;
            switch (strLen) {
                case 1:
                    strArr = statStr.split("=");
                    if (('zp_from' == strArr[0]) && ('pro_index_pricenode' == strArr[1] || 'pro_price_pricenode' == strArr[1])) {
                        zpFrom = strArr[1];
                    }
                    break;
                case 2:
                    var firstStr = strParamsArr[0];
                    var secondStr = strParamsArr[1];
                    strArr = firstStr.split("=");
                    if ('zp_from' == strArr[0] && 'zs_topic' == strArr[1]) {
                        zpFrom = strArr[1];
                        var secondArr = secondStr.split("=");
                        if (('topic_id' == secondArr[0]) && parseInt(secondArr[1])) {
                            topicId = secondArr[1];
                        }
                    }
                    break;
            }
        }
    </script>
    <script>
        //大图的显示    
        function ShowPic(obj, k, Id) {
            $("#ReviewPic" + Id).show();
            $("#picUrl" + Id).children().removeClass("current");
            obj.className = "current";
            var item = $("#Ul" + Id).children();
            var len = item.length;
            var i = 0;

            for (i = 0; i < len; i++) {
                item[i].style.display = "none";
            }
            item[k].style.display = "block";

        }

        //大图隐藏
        function HidePic(Id) {
            $("#ReviewPic" + Id).hide();
            $("#picUrl" + Id).children().removeClass("current");
            var item = $("#Ul" + Id).children();
            var len = item.length;
            var i = 0;

            for (i = 0; i < len; i++) {
                item[i].style.display = "none";
            }
        }



        //前一张
        $(document).on('click', '.prev', function() {
            var obj = $(this).nextAll(".pic-switch");
            var tab_c = $(this).nextAll(".pic-switch").find('.pic-switch-inner');
            var tab_c_li = tab_c.children();

            var len = tab_c_li.length;

            var num = $(this).nextAll(".pic-switch").find('.picScore').val();
            var events = "onmouseover";
            var i = 0;
            for (i = 0; i < len; i++) {
                tab_c_li[i].index = i;
                tab_c_li[i][events] = function() {
                    num = this.index;
                    tab();
                }
            }

            function tab() {
                for (i = 0; i < len; i++) {
                    tab_c_li[i].style.display = "none";
                }
                tab_c_li[num].style.display = "block";
                obj.find(".picScore").val(num);
            }

            function prev_click() {
                if (num == 0) num = len;
                num--;
                tab();
            }


            prev_click();

        })

        //后一张
        $(document).on('click', '.next', function() {
            var obj = $(this).nextAll(".pic-switch");

            var tab_c = $(this).nextAll(".pic-switch").find('.pic-switch-inner');
            var tab_c_li = tab_c.children();
            var len = tab_c_li.length;
            var num = $(this).nextAll(".pic-switch").find('.picScore').val();
            var events = "onmouseover";
            var i = 0;
            for (i = 0; i < len; i++) {
                tab_c_li[i].index = i;
                tab_c_li[i][events] = function() {
                    num = this.index;
                    tab();
                }
            }

            function tab() {
                for (i = 0; i < len; i++) {
                    tab_c_li[i].style.display = "none";
                }
                tab_c_li[num].style.display = "block";
                obj.find(".picScore").val(num);
            }

            function next_click() {
                num++;
                if (num == len) num = 0;
                tab();
            }


            next_click();

        })


        $(function($) {

            // 商品购买评价
            $.extend({
                getOrderReview: function(options) {

                    var defaults = {
                        goodsId: 0,
                        page: 1
                    };
                    var options = $.extend(defaults, options);
                    var goodsId = defaults.goodsId;
                    var page = defaults.page;
                    var score = $("input[name=order-review]:checked").val();
                    //var baseDetailUrl = "http://shop.wuming.test.zol.com/index.php?"
                    var url = baseDetailUrl + "c=Ajax_OrderReview&a=GoodsReviewInfo&callback=?&t=" + Math.random();
                    //var url = "/index.php?c=Ajax_OrderReview&a=OrderReviewInfo&callback=?&t=" + Math.random();
                    $.getJSON(
                        url, {
                            goodsId: goodsId,
                            page: page,
                            score: score
                        },
                        function(data) {
                            var str = '';
                            var results = data.reviewInfo;
                            var dataNumber = data.reviewNumber;
                            if (dataNumber) {
                                $("#review_tips").hide();
                                str += '<div class="comment-content">';
                                for (var a in results) {


                                    var reviewInfo = results[a];
                                    if (reviewInfo.len == 1) {
                                        str += '<div class="comment-item">';

                                        str += '<div class="comment-author clearfix">';
                                        if (reviewInfo[0].score == 1 && reviewInfo[0].goodsScore == 0) {
                                            str += '<span class="comment-star"><em style="width:100%"></em></span>';
                                        }
                                        if (reviewInfo[0].score == 2 && reviewInfo[0].goodsScore == 0) {
                                            str += '<span class="comment-star"><em style="width:60%"></em></span>';
                                        }
                                        if (reviewInfo[0].score == 3 && reviewInfo[0].goodsScore == 0) {
                                            str += '<span class="comment-star"><em style="width:20%"></em></span>';
                                        }
                                        if (reviewInfo[0].goodsScore == 1) {
                                            str += '<span class="comment-star"><em style="width:20%"></em></span>';
                                        }
                                        if (reviewInfo[0].goodsScore == 2) {
                                            str += '<span class="comment-star"><em style="width:40%"></em></span>';
                                        }
                                        if (reviewInfo[0].goodsScore == 3) {
                                            str += '<span class="comment-star"><em style="width:60%"></em></span>';
                                        }
                                        if (reviewInfo[0].goodsScore == 4) {
                                            str += '<span class="comment-star"><em style="width:80%"></em></span>';
                                        }
                                        if (reviewInfo[0].goodsScore == 5) {
                                            str += '<span class="comment-star"><em style="width:100%"></em></span>';
                                        }
                                        str += '<div class="author"><img width="24" height="24" src="' + reviewInfo[0].photo + '" alt=""><span class="name">' + reviewInfo[0].username + '</span><span>来自' + reviewInfo[0].provinceName + '</span></div>';
                                        str += '</div>';

                                        str += '<p class="comment-text">' + reviewInfo[0].content + '</p>';

                                        if (reviewInfo[0].isPicture == 1 && reviewInfo[0].review_goods_state == 1) {
                                            var picName = reviewInfo[0].picName;
                                            str += '<ul class="comment-pic clearfix" id="picUrl' + reviewInfo[0].id + '">';
                                            for (var j in picName) {
                                                str += '<li onclick="ShowPic(this,' + j + ',' + reviewInfo[0].id + ')"><span><img src="' + picName[j].picUrl + '" alt=""></span><i class="ico"></i></li>';
                                            }
                                            str += '</ul>';


                                            str += '<div class="comment-pic-large" id="ReviewPic' + reviewInfo[0].id + '" style="display: none;">';
                                            str += '<a href="javascript:void(0)" class="prev" reid="724061"><span></span></a>';
                                            str += '<a href="javascript:void(0)" class="next" reid="724061"><span></span></a>';
                                            str += '<div class="pic-switch">';
                                            str += '<input type="hidden" class="picScore" value="0">';
                                            str += '<ul class="pic-switch-inner" id="Ul' + reviewInfo[0].id + '">';
                                            for (var j in picName) {
                                                str += '<li><span><img length="2" src="' + picName[j].Url + '"></span></li>';
                                            }
                                            str += '</ul>';
                                            str += '</div>';

                                            str += '<div class="comment-pic-operate clearfix">';
                                            str += '<a href="#none" class="opt-item opt-item-shut" onclick="HidePic(' + reviewInfo[0].id + ')">收起</a>';
                                            str += '</div>';


                                            str += '</div>';
                                        }
                                        str += '<div class="comment-time"><span>' + reviewInfo[0].addTimeNew + '</span><span>' + reviewInfo[0].suitColorName + '</span><span>' + reviewInfo[0].suitName + '</span></div>';
                                        if (reviewInfo[0].reply) {
                                            str += '<div class="business-reply">';
                                            str += '<p>商家回复：' + reviewInfo[0].reply + '</p>';
                                            //                            str+=                '<div class="comment-time"><span>'+reviewInfo[0].replyTime+'</span></div>';
                                            str += '</div>';
                                        }

                                    }

                                    if (reviewInfo.length == 2) {
                                        if (reviewInfo[1].reviewType == 2) {
                                            str += '<div class="add-reply">';
                                            str += '<p class="comment-text"><span class="label">追加评价：</span>' + reviewInfo[1].content + '</p>';
                                            if (reviewInfo[1].isPicture == 1 && reviewInfo[1].review_goods_state == 1) {

                                                var picName = reviewInfo[1].picName;
                                                str += '<ul class="comment-pic clearfix" id="picUrl' + reviewInfo[1].id + '">';
                                                for (var j in picName) {
                                                    str += '<li onclick="ShowPic(this,' + j + ',' + reviewInfo[1].id + ')"><span><img src="' + picName[j].picUrl + '" alt=""></span><i class="ico"></i></li>';
                                                }
                                                str += '</ul>';

                                                str += '<div class="comment-pic-large" id="ReviewPic' + reviewInfo[1].id + '" style="display: none;">';
                                                str += '<a href="javascript:void(0)" class="prev" reid="724061" style=""><span></span></a>';
                                                str += '<a href="javascript:void(0)" class="next" reid="724061"><span></span></a>';

                                                str += '<div class="pic-switch">';
                                                str += '<input type="hidden" class="picScore" value="0">';
                                                str += '<ul class="pic-switch-inner" id="Ul' + reviewInfo[1].id + '">';
                                                for (var j in picName) {
                                                    str += '<li id="li_724061"><span><img length="2" src="' + picName[j].Url + '"></span></li>';
                                                }
                                                str += '</ul>';
                                                str += '</div>';

                                                str += '<div class="comment-pic-operate clearfix">';
                                                str += '<a href="#none" class="opt-item opt-item-shut" onclick="HidePic(' + reviewInfo[1].id + ')">收起</a>';
                                                str += '</div>';

                                                str += '</div>';
                                            }
                                            str += '<div class="comment-time"><span>' + reviewInfo[1].addTimeNew + '</span></div>';
                                            str += '</div>';

                                        }

                                    }


                                    str += '</div>';



                                }
                                str += '</div>';
                                var sizeTemp = 15; // 每页数量
                                if (data.reviewNumber > sizeTemp) {
                                    var params = {
                                        page: page,
                                        size: sizeTemp,
                                        totalNumber: data.reviewNumber,
                                        goodsId: data.goodsId,
                                        pageFun: 'getOrderReview'
                                    };
                                    str += $.zpPaging(params);
                                }

                            } else {
                                $("#review_list").html('');
                                str = '<div class="zs-no-comment-prompt">没有符合条件的评价内容</div>';
                            }

                            $("#review_list").html(str);


                        }

                    );


                }

            });


            // 分页
            $.extend({
                zpPaging: function(options) {
                    var defaults = {
                        page: 1,
                        size: 5,
                        totalNumber: 0,
                        goodsId: 0,
                        pageFun: '',
                        type: 10
                    };
                    var options = $.extend(defaults, options);
                    var goodsId = defaults.goodsId;
                    var page = defaults.page;
                    var size = defaults.size;
                    var totalNumber = defaults.totalNumber;
                    var pageFun = defaults.pageFun;
                    var totalPage = Math.ceil(totalNumber / size);
                    var type = defaults.type;
                    if (page < 0) {
                        page = 1;
                    }
                    if (page > totalPage) {
                        page = totalPage;
                    }
                    var str = '<div class="zs-page">';
                    if (1 == totalPage) {
                        str = '<div class="zs-page"><span class="cur">1</span></div>';
                    } else {
                        if (page > 1) {
                            var prevPage = (page - 1);
                            str += '<a href="javascript:void(0)" class="zs-prev" onclick="$.' + pageFun + '({goodsId:' + goodsId + ', page:' + prevPage + ', type:' + type + '})">上一页</a>';
                        } else {
                            str += '<span class="no-zs-prev">上一页</span>';
                        }
                        if (totalPage <= 5) {
                            for (var i = 1; i <= totalPage; i++) {
                                if (page == i) {
                                    str += '<span class="cur">' + i + '</span>';
                                } else {
                                    str += '<a href="javascript:void(0)" onclick="$.' + pageFun + '({goodsId:' + goodsId + ', page:' + i + ', type:' + type + '})">' + i + '</a>';
                                }
                            }
                        } else {
                            if (page <= 5) {
                                for (var i = 1; i <= 5; i++) {
                                    if (page == i) {
                                        str += '<span class="cur">' + i + '</span>';
                                    } else {
                                        str += '<a href="javascript:void(0)" onclick="$.' + pageFun + '({goodsId:' + goodsId + ', page:' + i + ', type:' + type + '})">' + i + '</a>';
                                    }
                                }
                                str += '...';
                            } else {
                                str += '...';
                                var start = page - 2;
                                var end = page + 3;
                                if (end >= totalPage) {
                                    end = totalPage;
                                }
                                for (var i = start; i <= end; i++) {
                                    if (page == i) {
                                        str += '<span class="cur">' + i + '</span>';
                                    } else {
                                        str += '<a href="javascript:void(0)" onclick="$.' + pageFun + '({goodsId:' + goodsId + ', page:' + i + ', type:' + type + '})">' + i + '</a>';
                                    }
                                }
                                if (page != totalPage) {
                                    str += '...';
                                }
                            }
                        }
                        if (page == totalPage) {
                            str += '<span class="no-zs-next">下一页</span>';
                        } else {
                            var nextPage = (page + 1);
                            str += '<a href="javascript:void(0)" class="zs-next" onclick="$.' + pageFun + '({goodsId:' + goodsId + ', page:' + nextPage + ', type:' + type + '})">下一页</a>';
                        }
                    }
                    str += '</div>';
                    return str;
                }
            });

            // 商品交易记录
            $.extend({
                getGoodsOrderRecord: function(options) {
                    var defaults = {
                        goodsId: 0,
                        page: 1,
                        type: 1
                    };
                    var options = $.extend(defaults, options);
                    var goodsId = defaults.goodsId;
                    var page = defaults.page;
                    var type = defaults.type; //1为30天内的订单 0为全部订单 
                    var url = "/index.php?c=Ajax_OrderRecord&a=OrderRecordInfo&callback=?&t=" + Math.random();
                    $.getJSON(
                        url, {
                            goodsId: goodsId,
                            page: page,
                            merchantId: merchantId,
                            dateType: type
                        },
                        function(data) {
                            var dataLen = data.orderInfo.length;
                            var dataNumber = data.number;
                            var dateNumber = data.dateNumber;

                            if (type) {
                                var str = '<div class="detail-head"><div class="title"><h4>累计成交记录(' + dataNumber + ')</h4></div><div class="detail-head-filter clearfix"><div class="checks">';
                                str += '<label class="cur" for=""><input type="radio" checked>近30天成交记录(' + dateNumber + '件)</label>';
                                str += '<label for=""><input type="radio" onclick="$.getGoodsOrderRecord({goodsId:' + goodsId + ', type:0});">累计成交记录(' + dataNumber + '件)</label></div></div></div>';
                            } else {
                                var str = '<div class="detail-head"><div class="title"><h4>累计成交记录(' + dataNumber + ')</h4></div><div class="detail-head-filter clearfix"><div class="checks">';
                                str += '<label for=""><input type="radio" onclick="$.getGoodsOrderRecord({goodsId:' + goodsId + ', type:1});" >近30天成交记录(' + dateNumber + '件)</label>';
                                str += '<label class="cur" for=""><input type="radio" checked>累计成交记录(' + dataNumber + '件)</label></div></div></div>';
                            }

                            //当没有记录时的提示
                            if (type) {
                                var noData = '<div class="zs-no-comment-prompt">暂无咨询记录，有问题可以在下面留言给商家</div>';
                                var factNumber = dateNumber;
                            } else {
                                var noData = '<div class="zs-no-comment-prompt">暂无咨询记录，有问题可以在下面留言给商家</div>';
                                var factNumber = dataNumber;
                            }
                            //                        str += '<div class="zs-filter">最近30天售出<em>' + dateNumber + '</em>件，累计售出<em>' + dataNumber + '</em>件</div>';
                            var results = data.orderInfo;
                            str += '<div style="display:block;">';
                            if (factNumber == 0 || factNumber == '0') { //如果订单数量为0
                                str += noData;
                                $("input[name=wordsKey]").eq(0).change();
                                $("#zp-tab-goods-message").show();
                            } else {
                                $("#zp-tab-goods-message").show();
                                str += '<table><tbody>';
                                str += '<tr>';
                                str += '<th class="zs-cell-buyer">买家</th>';
                                str += '<th class="zs-cell-sku">款式和型号</th>';
                                str += '<th class="zs-cell-price" style="display: none;">价格</th>';
                                str += '<th class="zs-cell-amount">数量</th>';
                                str += '<th class="zs-cell-time">成交时间</th>';
                                str += '</tr>';
                                for (var i = 0; i < dataLen; i++) {
                                    str += '<tr>';
                                    if (results[i].orderFrom == 10) {
                                        str += '<td class="zs-cell-buyer"><span title="到店购买订单" class="type">线下</span>' + results[i].username + '</td>';
                                    } else {
                                        str += '<td class="zs-cell-buyer">' + results[i].username + '</td>';
                                    }
                                    str += '<td class="zs-cell-type"><p>' + results[i].goodsName + '</p>';
                                    if (results[i].isSuit) {
                                        str += '<p>' + results[i].suitName + '：' + results[i].suitColorName + '</p></td>';
                                    } else {
                                        str += '</td>';
                                    }
                                    str += '<td class="zs-cell-price" style="display: none;">&yen;<em>' + results[i].goodsPrice + '</em>';
                                    if (results[i].isPromo) {
                                        str += '<span class="zs-cu-ico" alt="促销">促</span></td>';
                                    } else {
                                        str += '</td>';
                                    }
                                    str += '<td class="zs-cell-amount">' + results[i].goodsNumber + '</td>';
                                    str += '<td class="zs-cell-time">' + results[i].formatAddTime + '成交 ';
                                    if (results[i].orderType == 2) {
                                        str += '来自：团购';
                                    }
                                    str += '</td></tr>';
                                }
                                str += '</tbody></table>';
                                str += '</div>';
                                str += '<div class="zs-tfoot clearfix">';

                                var sizeTemp = 10; // 多少数据分一页
                                if (factNumber > sizeTemp) {
                                    var params = {
                                        page: page,
                                        size: sizeTemp,
                                        totalNumber: factNumber,
                                        goodsId: data.goodsId,
                                        pageFun: 'getGoodsOrderRecord',
                                        type: type
                                    };
                                    var pageStr = $.zpPaging(params); //分页
                                    str += pageStr + '</div>';
                                } else {
                                    str += '</div>';
                                }
                            }
                            $(".zs-purchase-record").html("");
                            $(".zs-purchase-record").html(str);
                        });
                }
            });

            // 获得商品留言内容
            $.extend({
                getGoodsMessage: function(options) {
                    var defaults = {
                        goodsId: 0,
                        merchantId: 0,
                        page: 1,
                        type: 10
                    };
                    var options = $.extend(defaults, options);
                    var goodsId = defaults.goodsId;
                    var page = defaults.page;
                    var typeNum = defaults.type;
                    var merchantId = defaults.merchantId;
                    var url = "/index.php?c=Ajax_GoodsMessageNew&a=GoodsNewMessage&callback=?&t=" + Math.random();
                    $.getJSON(
                        url, {
                            goodsId: goodsId,
                            page: page,
                            type: typeNum,
                            merchantId: merchantId
                        },
                        function(data) {
                            var str = '';
                            var dataLen = data.messageInfo.length;
                            data.number = data.number ? data.number : 0;
                            $('#messageNumTitle').html("购买咨询(" + data.number + ")");
                            if (dataLen) {
                                var results = data.messageInfo;
                                for (var i = 0; i < dataLen; i++) {

                                    str += '<li><div class="user-infor"><em>(网友)</em>' + results[i].username;
                                    str += '<span class="time">' + results[i].addTime + '</span></div>';
                                    str += '<p class="question">' + results[i].content + '</p>';
                                    if ('' != results[i].replyContent) {
                                        str += '<div class="reply">商家回复：' + results[i].replyContent;
                                        str += '<span class="time">' + results[i].replyTime + '</span>';
                                        str += '</div></li>';
                                    }

                                }

                                var sizeTemp = 10;
                                // 当只有一页的时候不进行分页处理
                                if (data.number > sizeTemp) {
                                    var params = {
                                        page: page,
                                        totalNumber: data.number,
                                        size: sizeTemp,
                                        goodsId: data.goodsId,
                                        type: data.replyType,
                                        pageFun: 'getGoodsMessage'
                                    };
                                    str += $.zpPaging(params);
                                }
                            } else {
                                str += '<div class="zs-no-comment-prompt">暂无咨询记录，有问题可以在下面留言给商家</div>';
                            }
                            $("#zp-message-list").html(str);
                        });
                }
            });

            $.getGoodsMessage({
                goodsId: goodsId
            });
            // 保存商品留言 
            $.extend({
                saveGoodsMessage: function(options) {
                    var defaults = {
                        goodsId: 0,
                        merchantId: 1,
                        goodsName: 10
                    };
                    var options = $.extend(defaults, options);
                    var goodsId = defaults.goodsId;
                    var merchantId = defaults.merchantId;
                    var goodsName = defaults.goodsName;
                    var content = "";
                    var type = 1; //获取留言的类型 默认为商品咨询
                    var isShow = 1; //仅商家可见
                    content = $('#zp-goods-message-content').val();
                    if ($("input[name='saveWordsKey']").is(':checked')) {
                        type = $(":radio[name=saveWordsKey]:checked").val();
                    }
                    if (content == '') {
                        $('.zs-messagebox').addClass('zs-messagebox-wrong');
                        $('#conzp-success').html('<p style="height:50px;line-height:50px;">请填写留言内容！</p>').attr('class', 'zs-failure');
                        $('#zp-goods-message-box').css('display', 'block');
                        return false;
                    }
                    if (!goodsId) {
                        $('.zs-messagebox').addClass('zs-messagebox-wrong');
                        $('#conzp-success').html('<p style="height:50px;line-height:50px;">获取信息不完整请稍后再试！</p>').attr('class', 'zs-failure');
                        $('#zp-goods-message-box').css('display', 'block');
                        return false;
                    }
                    //获取仅商家是否可见
                    if ($("input[name='zp-goods-message-show']").is(':checked')) {
                        isShow = 1;
                    } else {
                        isShow = 0;
                    }
                    var url = baseDetailUrl + "c=Ajax_GoodsMessageNew&a=SaveGoodsNewMessage&callback=?&t=" + Math.random();
                    $.getJSON(url, {
                        goodsId: goodsId,
                        merchantId: merchantId,
                        goodsName: goodsName,
                        content: content,
                        type: type,
                        isShow: isShow
                    }, function(data) {
                        if (data.flag) {
                            if (isShow == 1) {
                                $('#conzp-success').html('<p>留言提交成功，请留意系统通知您回复情况。</p><p>您的咨询仅商家能看到，<a href="http://my.zol.com/index.php?c=ConsultMessage" taget="_blank">查看我的留言</a></p>').attr('class', 'zs-success');
                                $('#zp-goods-message-box').css('display', 'block');
                            } else {
                                $('#conzp-success').html('<p>留言提交成功，请留意系统通知您回复情况。</p><p>您的咨询不会立即在页面上显示，<a href="http://my.zol.com/index.php?c=ConsultMessage" taget="_blank">查看我的留言</a></p>').attr('class', 'zs-success');
                                $('#zp-goods-message-box').css('display', 'block');
                            }
                            $('#zp-goods-message-content').val(''); //提交成功清楚内容
                        } else {
                            $('.zs-messagebox').addClass('zs-messagebox-wrong');
                            $('#conzp-success').html('<p style="height:50px;line-height:50px;">' + data.msg + '</p>');
                            $('#zp-goods-message-box').css('display', 'block');
                        }
                        setTimeout(function() {
                            $('#zp-goods-message-box').fadeOut(1000);
                        }, 2000); //提示层2秒后消失
                    });
                }
            });
            // 留言计数器
            $.fn.LimitWord = function(option) {
                var that = this;
                var defaults = {
                    'showLimitHtml': '#limtset', // 显示当前字数的位置
                    'showTipsHtml': '#zp-tooltip', // 显示提示信息的位置
                    'limitCount': 200, // 字数限制
                    'limitMsg': '提示:字数请在2-200字内', // 超出限制提示
                    'showTipsTime': 3000 // 提示停留时间
                };
                var options = $.extend(defaults, option);
                if ('undefined' == typeof($(this))) {
                    return false;
                }
                var wordLength = $(this).val().length;
                $(options.showLimitHtml).html('<em>' + wordLength + "</em>/" + options.limitCount);
                $(that).bind('keyup paste', function() {
                    var contentLength = $(this).val().length;
                    if (options.limitCount >= contentLength) {
                        $(options.showLimitHtml).html('<em>' + contentLength + "</em>/" + options.limitCount);
                        $(options.showTipsHtml).hide();
                    } else {
                        $(this).val($(this).val().substring(0, options.limitCount));
                        $(options.showTipsHtml).html(options.limitMsg);
                        var stop = options.showTipsTime / 3;
                        $(options.showTipsHtml).stop(true, true).fadeIn(stop).delay(stop).fadeOut(stop);
                    }
                });
            };
            // 关闭窗口
            $.extend({
                closeWindowBox: function(eventId) {
                    $("#" + eventId).hide();
                    //如果是欢迎光临，则需要记录cookie
                    if (eventId == 'zp-welcome-store') {
                        openDove();
                        var url = baseDetailUrl + "c=Ajax_DetailLeft&a=SetCookie&callback=?&t=" + Math.random();
                        $.getJSON(url);
                    }
                }
            });
            // 获取套装信息  
            $.extend({
                /**********************************+-立即购买事件的状态的改变**********************/
    checkStyle: function(checkGoodsNumber) {
            var maxGoodsNumber = parseInt($("#zp-choose-goods-number").val()); // 最大限购数量
            var goodsNumber = 1; // 商品的数量
            var tipsObj = $('#zs-goods-number-tips'); // 报错提示框 
            if (isNaN(maxGoodsNumber || maxGoodsNumber <= 0)) {
                goodsNumber = 0; // 商品库存不足
                tipsObj.html('商品库存不足，您可以联系商品到店购买！');
                tipsObj.css('display', 'block');
                $(".zs-increase").addClass("zs-no-increase");
                $(".zs-decrease").addClass("zs-no-decrease");
            } else if (isNaN(checkGoodsNumber)) {
                goodsNumber = 1;
                tipsObj.html('您所填写的数量不正确');
                tipsObj.css('display', 'block');
                $(".zs-decrease").addClass("zs-no-decrease");
                $(".zs-increase").removeClass("zs-no-increase");
                if (maxGoodsNumber == 1) {
                    $(".zs-increase").addClass("zs-no-decrease");
                }
            } else if (checkGoodsNumber < 1) {
                goodsNumber = 1;
                tipsObj.html('至少购买一件');
                tipsObj.css('display', 'block');
                $(".zs-increase").addClass("zs-no-increase");
                $(".zs-decrease").removeClass("zs-no-decrease");
                if (maxGoodsNumber == 1) {
                    $(".zs-decrease").addClass("zs-no-decrease");
                }
            } else if (checkGoodsNumber == 1) {
                goodsNumber = 1;
                tipsObj.css('display', "none");
                $(".zs-decrease").addClass("zs-no-decrease");
                $(".zs-increase").removeClass("zs-no-increase");
                if (maxGoodsNumber == 1) {
                    $(".zs-increase").addClass("zs-no-increase");
                }
            } else if (checkGoodsNumber == maxGoodsNumber) {
                tipsObj.css('display', "none");
                goodsNumber = maxGoodsNumber;
                $(".zs-increase").addClass("zs-no-increase");
                $(".zs-decrease").removeClass("zs-no-decrease");
                if (maxGoodsNumber == 1) {
                    $(".zs-decrease").addClass("zs-no-decrease");
                }
            } else if (checkGoodsNumber > maxGoodsNumber) {
                tipsObj.html('您所填写的数量超过库存');
                tipsObj.css('display', 'block');
                goodsNumber = checkGoodsNumber;
                $(".zs-increase").addClass("zs-no-increase");
                $(".zs-decrease").removeClass("zs-no-decrease");
                if (maxGoodsNumber == 1) {
                    $(".zs-decrease").addClass("zs-no-decrease");
                }
            } else {
                tipsObj.css('display', "none");
                goodsNumber = checkGoodsNumber;
                $(".zs-decrease").removeClass("zs-no-decrease");
                $(".zs-increase").removeClass("zs-no-increase");
                if (maxGoodsNumber == 1) {
                    $(".zs-decrease").addClass("zs-no-decrease");
                    $(".zs-increase").addClass("zs-no-increase");
                }
            }
            if (maxGoodsNumber == 1) {
                $("input[fn=zp-goods-number]").attr("readonly", true);
            }
            // 将商品数量写到页面中
            $("input[fn=zp-goods-number]").val(goodsNumber);
        }
        /**********************************+-立即购买事件作**********************/
});

$.checkStyle(1); // 每次加载页面的时候自动调用一次

$.extend({
    getSuitId: function(options) {
        var defaults = {
            goodsId: 0,
            suitColorId: 0,
            suitSetId: 0
        };
        var options = $.extend(defaults, options);
        var goodsId = defaults.goodsId;
        var suitColorId = defaults.suitColorId;
        var suitSetId = defaults.suitSetId;
        //参数获取
        if (goodsId == 0) {
            goodsId = window.goodsId;
        }
        if (suitColorId == 0) {
            suitColorId = $("#zp-choose-suit-color-id").val();
        }
        if (suitSetId == 0) {
            suitSetId = $("#zp-choose-suit-set-id").val();
        }
        //参数不完整时，不获取信息
        if (suitColorId == 0 || suitSetId == 0) {
            return false;
        }
        //数据获取
        //                    var url = baseDetailUrl + "c=Ajax_GoodsSuit&callback=?&t=" + Math.random();
        var url = "/index.php?c=Ajax_GoodsSuit&callback=?&t=" + Math.random();
        $.getJSON(
            url, {
                goodsId: goodsId,
                suitColorId: suitColorId,
                suitSetId: suitSetId
            },
            function(data) {
                // 未选择套装弹框
                var noSelectSuit = $('.zs-attention').length;
                if (data.flag) {
                    if (data.suitInfo.skuId != 0) {
                        if ($("#zp-choose-suit-id").length > 0) {
                            if ($("#zp-choose-suit-id").val() != data.suitInfo.suitId) {
                                location.href = goodsUrl + "?skuId=" + data.suitInfo.skuId + "&suitId=" + data.suitInfo.suitId;
                                return;
                            }
                        }
                    }
                    // 是不是存在促销的
                    if (data.isPromo) {
                        $("#zp-cost-goods-price").html("&yen;" + data.goodsPrice);
                        $("#zp-promo-price").html(data.promoPrice);
                        $("#zp-choose-goods-price").val(data.promoPrice).change();
                        // 判断是否包邮
                        if (data.promoPrice < 100) {
                            $("#isBaoYou").hide();
                        } else {
                            $("#isBaoYou").show();
                        }
                    } else {
                        if (parseInt(isOnline) == 1) {
                            $("#zp-goods-price").html(data.goodsPrice);
                            $("#zp-choose-goods-price").val(data.goodsPrice).change();
                            if (typeof calculatePrePay === 'function') {
                                calculatePrePay();
                            }
                        }
                        // 判断是否包邮
                        if (data.goodsPrice < 100) {
                            $("#isBaoYou").hide();
                        } else {
                            $("#isBaoYou").show();
                        }
                    }
                    // 判断是否包邮
                    if (data.goodsPrice < 100) {
                        $("#isBaoYou").hide();
                    } else {
                        $("#isBaoYou").show();
                    }
                    //数量
                    $(".zs-goods-number-show").html('（限购' + data.goodsNumber + '件）');
                    $("#zp-choose-goods-number").val(data.goodsNumber);
                    if (data.goodsNumber <= 1) {
                        $(".zp-increase").addClass("zp-no-increase");
                        $(".zp-decrease").addClass("zp-no-decrease");
                    } else {
                        $(".zp-increase").removeClass("zp-no-increase");
                    }
                    //套装信息
                    var suitInfo = data.suitInfo;
                    $(".zs-suit-infor").html(suitInfo.suitDesc).show();
                    $("#zp-choose-suit-id").val(suitInfo.suitId);
                    //套装促销信息
                    var suitPromoInfo = data.suitPromoInfo;
                    if (suitPromoInfo == '') {
                        $("#zp-suit-promotion").hide(); //隐藏
                    } else {
                        $("#zp-suit-promotion-info").html('<span class="zp-flash-sale">' + suitPromoInfo.promoTypeName + '</span><em>' + suitPromoInfo.promoTypeTips + '</em>');
                        $("#zp-suit-promotion").show(); //显示
                    }
                    $.checkStyle($("input[fn=zp-goods-number]").val());
                    if (noSelectSuit == 1) {
                        $('.zs-confirm-btn').show();
                    }
                } else {
                    $('.zs-confirm-btn').hide();
                    alert(data.msg);
                }
            }
        );
    }
});
// 添加购物车
$.extend({
    addCartInfo: function(options) {
        var defaults = {
            goodsId: 0,
            merchantId: 0,
            fromMerchantId: 0,
            promoId: 0,
            cartFrom: 1,
            shareId: 0
        };
        var options = $.extend(defaults, options);
        var goodsId = defaults.goodsId;
        var merchantId = defaults.merchantId;
        var fromMerchantId = defaults.fromMerchantId;
        var promoId = defaults.promoId;
        var cartFrom = defaults.cartFrom;
        var shareId = defaults.shareId;
        var goodsPrice = $("#zp-choose-goods-price").val();
        var suitId = parseInt($("#zp-choose-suit-id").val());
        var isSuit = parseInt($("#zp-is-suit").val());
        var checkColor = $("#zp-choose-color .cur").attr('num');
        var skuId = $("#skuId").val();
        // 
        var flag = true;
        if (!checkColor && $("#zp-choose-color").length != 0) {
            flag = false;
            //                        alert("亲，请先选择您喜欢的颜色！");
            //                        return false;
        }
        if (isSuit && !suitId) {
            flag = false;
            //                        alert('请选择套装类型');
            //                        return false;
        }
        if (!flag) {
            $('.zs-skin-inner').addClass('zs-attention');
            return false;
        }
        var goodsNumber = parseInt($("#zp-goods-number").val());
        var maxNumber = parseInt($("#zp-choose-goods-number").val());
        if (!goodsNumber) {
            var tipsObj = $(".zs-goods-number-tips");
            tipsObj.html('购买数量不能为0');
            tipsObj.css('display', 'block');
            return false;
        }
        if (isNaN(goodsNumber)) {
            goodsNumber = 1;
        }
        if (goodsNumber > maxNumber) {
            var tipsObj = $(".zs-goods-number-tips");
            tipsObj.html('购买数量超过库存！');
            tipsObj.css('display', 'block');
            return false;
        } else {
            $(".zs-goods-number-tips").hide();
        }
        if ('undefined' == typeof(zpFrom)) {
            zpFrom = null;
        }
        if ('undefined' == typeof(topicId)) {
            topicId = 0;
        }
        //  var url          = baseDetailUrl+"c=Ajax_ShopCart&a=AddCartInfo&callback=?&t="+Math.random();
        var url = "/index.php?c=Ajax_ShopCart&a=AddCartInfo&callback=?&t=" + Math.random();
        $.getJSON(
            url, {
                goodsId: goodsId,
                merchantId: merchantId,
                fromMerchantId: fromMerchantId,
                promoId: promoId,
                suitId: suitId,
                goodsPrice: goodsPrice,
                goodsNumber: goodsNumber,
                cartFrom: cartFrom,
                zpFrom: zpFrom,
                topicId: topicId,
                shareId: shareId,
                skuId: skuId
            },
            function(data) {
                $("#zp-choose-suit-again").hide();
                if (data.flag) {
                    if (2 == data.flag) {
                        document.location = "http://service.zol.com/login.php?backurl=" + encodeURIComponent(document.location.href);
                        return false;
                    } else {
                        $("#zs-total-price").html(data.allPrice);
                        $("#zs-cart-number").html(data.cartNumber);
                        $("#zs-shop-cart-box").show();
                    }
                } else {
                    alert(data.msg);
                }
            }
        );
    }
});
// 收藏商品
$.extend({
    saveGoodsFllow: function(options) {
        var defaults = {
            goodsId: 0,
            merchantId: 0,
            goodsName: '',
            goodsPrice: 0
        };
        if (isLogin == "0") {
            document.location = "http://service.zol.com/login.php?backurl=" + encodeURIComponent(document.location.href);
            return;
        }
        var options = $.extend(defaults, options);
        var goodsId = defaults.goodsId;
        var merchantId = defaults.merchantId;
        var goodsName = defaults.goodsName;
        var goodsPrice = defaults.goodsPrice;
        var url = baseDetailUrl + "c=Ajax_GoodsFollow&callback=?&t=" + Math.random();
        $.getJSON(
            url, {
                goodsId: goodsId,
                merchantId: merchantId,
                goodsName: goodsName,
                goodsPrice: goodsPrice
            },
            function(data) {
                var str = '';
                if (data.flag) {
                    if (1 == data.flag) {
                        str += '<div class="zs-success">';
                        str += '<h3>您已关注该商品</h3>';
                    } else {
                        str += '<div class="zp-failure">';
                        str += '<h3>您已关注该商品</h3>';
                    }
                    str += '<p>您已关注' + data.goodsNumber + '个商品，查看<a target="_blank" href="http://my.zol.com/index.php?c=FollowGoods">我关注的商品</a></p>';
                } else {
                    str = data.msg;
                }
                $("#zp-goods-follow-box .zs-layer-content").html(str);
                $("#zp-goods-follow-box").show();
                setTimeout(function() {
                    $("#zp-goods-follow-box").fadeOut(1000);
                }, 2000); //提示层2秒后消失
            }
        );
    }
});
// 倒计时
$.extend({
    countdownClock: function(endTime, nowTime, idName) {
        var endTime = endTime;
        var nowTime = nowTime;
        var leave = endTime - nowTime;
        var leaveCheck = 0;
        var lastTime = "";
        if (leave <= 0) {
            window.location.reload();
        }
        var day = Math.floor(leave / (24 * 3600));
        var hour = Math.floor(leave / 3600) - (day * 24);
        hour = hour < 10 ? "0" + hour : hour;
        var minute = Math.floor(leave / 60) - (hour * 60) - (day * 24 * 60);
        minute = minute < 10 ? "0" + minute : minute;
        var second = leave - (hour * 3600) - (minute * 60) - (day * 24 * 3600);
        second = second < 10 ? "0" + second : second;
        if (leave >= (3 * 24 * 3600)) {
            lastTime = '<em>距离结束还有&nbsp;' + day + '&nbsp;天</em>';
        } else if (leave >= 24 * 3600) {
            lastTime = '<em>仅剩&nbsp;' + day + '&nbsp;天</em>';
        } else if (leave >= 0) {
            lastTime = '<em>&nbsp;' + hour + '小时</em><em>&nbsp;' + minute + '&nbsp;分</em><em>&nbsp;' + second + '&nbsp;秒</em>';
        }
        $('#' + idName).html(lastTime);
        endTime--;
        setTimeout("$.countdownClock('" + endTime + "', '" + nowTime + "', '" + idName + "')", 1000);
    }
});
// 关注商家
$.extend({
saveMerchantFllow: function(options) {
    var defaults = {
        merchantId: 0
    };
    if (isLogin == "0") {
        document.location = "http://service.zol.com/login.php?backurl=" + encodeURIComponent(document.location.href);
        return;
    }
    var options = $.extend(defaults, options);
    var merchantId = defaults.merchantId;
    var url = "/index.php?c=Ajax_MerchantFollow&callback=?&t=" + Math.random();
    $.getJSON(
        url, {
            merchantId: merchantId
        },
        function(data) {
            alert(data.msg);
        }
    );
}
});
}); <
/script> <
script src = "/js/ExcellentFeedBack.js" > < /script> <
script >
    // ######################右侧在保障商家说明跳转##########################//
    $("#jumpContent li").click(function() {
        //切换到Z保障标签
        $("#zp-tabbar >li[rel='zs-service-guarantee']").click();
        var idName = $(this).attr("fn");
        var idTop = $("#" + idName).offset().top - 90;
        $('body,html').animate({
            scrollTop: idTop
        }, 1);
        return false;
    });
// ######################右侧在保障商家说明跳转(end)##########################//
// ###################### 商品详情介绍导航和页面位置导航的动态移动  ################################# //
function getScrollTop() {
    var scrollPosTemp = 0;
    if (window.pageYOffset) {
        scrollPosTemp = window.pageYOffset;
    } else if (document.compatMode && (document.compatMode != 'BackCompat')) {
        scrollPosTemp = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollPosTemp = document.body.scrollTop;
    }
    return scrollPosTemp;
}
//获取IE版本
var ieVersion = 0;
if ($.browser.msie) {
    ieVersion = parseInt($.browser.version);
}
// 商品详情介绍导航定位
if (ieVersion != 6) {
    $(window).scroll(function() {
        var startHeight = 0;
        if ($("#moveTopNew").offset()) {
            var startHeight = $("#moveTopNew").offset().top;
        }
        var scrollPos = getScrollTop();
        if (scrollPos >= startHeight) {
            // 开始浮动
            var widthLeng = document.documentElement.clientWidth;
            var isXia = 0;
            if (!isXia) {
                $(".zs-buy-btn").show(); // 漏出立即购买按钮
            }
            $("#zsTabbar").css("width", widthLeng + "px");
            $(".zs-main").addClass("zs-suck-top");
        } else {
            // 结束浮动
            $(".zs-main").removeClass("zs-suck-top");
            $("#zsTabbar").css("width", "990px");
            $(".zs-buy-btn").hide(); // 漏出立即购买按钮
        }
    });
}
// ###################### 商品详情介绍导航和页面位置导航的动态移动 (end) ################################# //
//商品详情快速导航
function tabbarGoodsInfo() {
    var lengTop = getScrollTop() + 36 + 10;
    var proShow = $("#pro-show").offset().top;
    var proHour = $("#pro-hour").length ? $("#pro-hour").offset().top : 0;
    var proFaPiao = $("#pro-fapiao").length ? $("#pro-fapiao").offset().top : 0;
    var proWuLiu = $("#pro-wuliu").length ? $("#pro-wuliu").offset().top : 0;
    var proConfirm = $("#pro-confirm").length ? $("#pro-confirm").offset().top : 0;
    var proService = $("#pro-service").length ? $("#pro-service").offset().top : 0;
    var proZprotect = $("#zs-service-guarantee").length ? $("#zs-service-guarantee").offset().top : 0;
    var zsQuickMenuId = "pro-show";
    if ((proShow <= lengTop) && (lengTop < proHour)) {
        zsQuickMenuId = "pro-show";
    };
    if ((proHour <= lengTop) && (lengTop < proFaPiao)) {
        zsQuickMenuId = "pro-hour";
    };
    if ((proFaPiao <= lengTop) && (lengTop < proWuLiu)) {
        zsQuickMenuId = "pro-fapiao";
    };
    if ((proWuLiu <= lengTop) && (lengTop < proConfirm)) {
        zsQuickMenuId = "pro-wuliu";
    };
    if ((proConfirm <= lengTop) && (lengTop < proService)) {
        zsQuickMenuId = "pro-confirm";
    };
    if ((proService <= lengTop)) {
        zsQuickMenuId = "pro-service";
    }
    // 当商品详情的导航显示
    $("#zsSidebar").show();
    $(".zs-quick-menu ul").hide();
    $(".zs-quick-menu ul").eq(0).show();
    $(".zs-quick-menu ul li").removeClass("cur");
    $(".zs-quick-menu ul li[fn='" + zsQuickMenuId + "']").addClass("cur");
}
//Z保障详情描述快速导航

function tabbarZInfo() {
    var lengTop = getScrollTop() + 36 + 10;
    var quality = $("#quality").offset().top;
    var peifu = $("#peifu").offset().top;
    //var miaosu = $("#miaosu").offset().top;
    var hour = $("#hour-24").offset().top;
    var wuliu = $("#wuliu").offset().top;
    var fapiao = $("#fapiao").offset().top
        //var qsyh = $("#qsyh").offset().top;
    var shfw = $("#shfw").offset().top - 36;
    var chengnuo = $("#chengnuo").offset().top;
    // 当商品详情的导航显示
    var zsQuickMenuId = "quality";
    if (quality <= lengTop && lengTop < peifu) {
        zsQuickMenuId = "quality";
    }
    if (peifu <= lengTop && lengTop < hour) {
        zsQuickMenuId = "peifu";
    }
    //            if ((miaosu <= lengTop) && (lengTop < hour)) {
    //                zsQuickMenuId = "miaosu";
    //            }
    ;
    if ((hour <= lengTop) && (lengTop < wuliu)) {
        zsQuickMenuId = "hour-24";
    };
    if ((wuliu <= lengTop) && (lengTop < fapiao)) {
        zsQuickMenuId = "wuliu";
    };
    if ((fapiao <= lengTop) && (lengTop < shfw)) {
        zsQuickMenuId = "fapiao";
    }

    //            if ((qsyh <= lengTop) && (lengTop < shfw) ) {
    //                zsQuickMenuId = "qsyh";
    //            }
    if ((shfw <= lengTop) && (lengTop <= chengnuo)) {
        zsQuickMenuId = "shfw";
    }
    if ((chengnuo <= lengTop)) {
        zsQuickMenuId = "chengnuo";
    }
    $("#zsSidebar").show();
    $(".zs-quick-menu ul").hide();
    $(".zs-quick-menu ul").eq(1).show();
    $(".zs-quick-menu ul li").removeClass("cur");
    $(".zs-quick-menu ul li[fn='" + zsQuickMenuId + "']").addClass("cur");
}

function changZsSidebarLength() {
    // 获取屏幕的高度
    var st = $(window).scrollTop();
    var buttonSign = 0;
    if ($("#buttonSign").offset()) {
        buttonSign = $("#buttonSign").offset().top;
    }
    if (st <= buttonSign) {
        $("#zsSidebar").css("height", buttonSign - st - 36 + "px");
    } else {
        $("#zsSidebar").css("height", "0px");
    }
}
// 快速浏览导航标识
if (ieVersion != 6) {
    $(window).scroll(function() {
        // 改变提示条的距离
        changZsSidebarLength();
        // 当选择的是商品详情的时候
        if ($("#zp-tabbar .cur").attr("rel") == "zs-tab-goods-content" && getScrollTop()) {
            tabbarGoodsInfo();
        }
        // 当选择的是在保障详情的时候 
        if ($("#zp-tabbar .cur").attr("rel") == "zs-service-guarantee" && getScrollTop()) {
            tabbarZInfo();
        }
    });
}
// 定位到对应的位置
if (ieVersion != 6) {
    $(".zs-quick-menu li").click(function() {
        var rel = $(this).attr("rel");
        if ('zs-tab-goods-content' == rel) {
            $("#" + rel).show();
            $("#zp-tab-goods-params").hide(); //隐藏参数
            $("#zs-service-guarantee").hide();
            $(".zs-attributes-list").show();
            $(".zs-goods-content").show();
            $(this).addClass("cur");
            $("[rel='zs-tab-goods-content']").addClass("cur").siblings().removeClass("cur");
        }
        if ("zs-service-guarantee" == rel) {
            $("#zp-tabbar >li[rel='zs-service-guarantee']").click();
        }
        var detailHeight = parseInt($(".zs-container").css('height'));
        var leftHeight = parseInt($("#zs-side-left").css('height'));
        if (detailHeight < leftHeight) {
            $(".zs-sidebar").css('height', leftHeight + 'px');
        } else {
            $(".zs-sidebar").css('height', detailHeight + 'px');
        }
        // 进行移动
        var idName = $(this).attr("fn");
        if ("zs-service-guarantee" == rel) {
            idName = "zs-side-left";
        }
        var idTop = $("#" + idName).offset().top;
        if ("zs-service-guarantee" == rel) {
            idTop = idTop + 50;
        }
        $('body,html').animate({
            scrollTop: (idTop - 40)
        }, 1);
        return false;
    });
}
// #################### 页面位置动态导航(end) ###############//
//商品内容区域，商品详情判断
$(window).load(function() {
    function stopDefault(e) {
        if (e && e.preventDefault)
            e.preventDefault();
        return false;
    }
    stopDefault();
    var goodsContent;
    goodsContent = $('#zs-tab-goods-content').html();
    if (goodsContent == null || !goodsContent.length) { //商品内容为空时
        if (parseInt(isHaveSuitInfo)) { //有套装，同样隐藏参数
            $('#zp-tab-goods-params').hide();
        } else { //没套装隐藏详情标签，并将参数标签设为当前选择
            // $("[rel='zs-tab-goods-content']").remove();
            // $("[rel='zp-tab-goods-params']").addClass("cur");
        }
    } else { //内容不为空时，隐藏商品参数
        $('#zp-tab-goods-params').hide();
    }
    deaailHeightChange();
    //右侧空白高度
    function deaailHeightChange() {
        var detailHeight = parseInt($(".zs-container").css('height'));
        var leftHeight = parseInt($("#zs-side-left").css('height'));
        if (detailHeight < leftHeight) {
            $(".zs-sidebar").css('height', leftHeight + 'px');
        } else {
            $(".zs-sidebar").css('height', detailHeight + 'px');
        }
    }
});
$(function() {
    //右侧导航高度
    function deaailHeightChange() {
        var detailHeight = parseInt($(".zs-container").css('height'));
        var leftHeight = parseInt($("#zs-side-left").css('height'));
        if (detailHeight < leftHeight) {
            $(".zs-sidebar").css('height', leftHeight + 'px');
        } else {
            $(".zs-sidebar").css('height', detailHeight + 'px');
        }
    }
    //意见建议调用
    $.survey({
        channel: '详情页'
    });
    //左侧热销-人气商品切换
    $(".zs-rankingtab >li").mouseover(function() {
        var numList = $(this).attr("fn");
        $(this).addClass("current").siblings().removeClass("current");
        $("#sell-hot-goods > ul").eq(numList).show();
        var hideIndex = 1;
        if (numList == 1) {
            hideIndex = 2;
        }
        $("#sell-hot-goods > ul").eq(hideIndex).hide();
    });
    //购买评价
    $.getOrderReview({
        goodsId: goodsId
    });

    //购买评价好中差评切换
    $("input[name=order-review]").change(function() {
        var score = $(this).val();
        $.getOrderReview({
            goodsId: goodsId,
            page: 1
        });
        deaailHeightChange();
    });

    //交易记录
    $.getGoodsOrderRecord({
        goodsId: goodsId,
        type: 0
    });

    // 促销倒计时

    //商品留言伪分页
    var messageNumber = parseInt($("#zpretenum >span").html());
    if (messageNumber) {
        var params = {
            page: 1,
            totalNumber: messageNumber,
            size: 10,
            goodsId: goodsId,
            type: 10,
            pageFun: 'getGoodsMessage'
        };
        var pageStr = $.zpPaging(params);
        $(pageStr).appendTo("#zp-message-list");
    }
    //商品留言字数       
    $('#zp-goods-message-content').LimitWord();
    $('#zp-goods-message-content').blur(function() {
        $('.zs-messagebox').removeClass('zs-messagebox-wrong');
    });
    //留言类型切换
    $("input[name=wordsKey]").eq(0).change(); // 首次打开页面的时候获取一次
    $("input[name=wordsKey]").change(function() {
        var type = $(this).val();
        $.getGoodsMessage({
            goodsId: goodsId,
            type: type
        });
        deaailHeightChange();
    });
    //左侧商品分类特效
    $('#goods-category-list dt:not(#zs-all-goods)').click(function() {
        if ($(this).parent('dl').hasClass("unfold")) {
            $(this).parent('dl').attr('class', 'fold zp-goods-category');
        } else {
            $(this).parent('dl').attr('class', 'unfold zp-goods-category');
        }
    });
    //全部商品特效
    $('#zs-all-goods').live('click', function() {
        $(this).parent().toggleClass("zs-all-goods");
        if ($(this).parent().find('dd').css("display") == 'block') {
            $(this).parent().find('dd').css("display", 'none');
        } else {
            $(this).parent().find('dd').css("display", 'block');
        }
    });
    // 商品内容区导航切换 商品详情的切换
    $("#zp-tabbar  > li[rel='photoCode']").mouseover(function() {
        $(".phone-purchase").addClass("phone-purchase-hover");
    }).mouseout(function() {
        $(".phone-purchase").removeClass("phone-purchase-hover");
    });

    $(".zs-look-comment").click(function() {
        $("#zp-goods-detail").hide();
        $("#zp-tabbar  > li").removeClass("cur");
        $(".g-tab-swith11").addClass("cur");
        $("#zs-zol-comment").show();
        $(".zs-comment-essay").show();
        $(".zs-quick-menu").hide();
    });
    $("#zp-tabbar  > li").click(function() {
        var rel = $(this).attr("rel");
        if (rel == 'zs-buynow') {
            return;
        }
        // 打开和折叠二维码
        if (rel == "photoCode") {
            return;
        }
        // 商品详情
        if ('zs-tab-goods-content' == rel) {
            $(this).siblings().each(function() {
                $("#" + $(this).attr("rel")).show();
            });
            $("#zs-service-guarantee").hide(); // 隐藏Z保障详情
            $("#zp-tab-goods-params").hide(); // 隐藏参数
            $("#zp-goods-detail").show();
            $(".zs-attributes-list").show();
            $(".zs-goods-content").show();
            $(this).addClass("cur").siblings().removeClass("cur");
            // 快速浏览的导航
            $("#zsSidebar").show();
            $(".zs-quick-menu ul").hide();
            $(".zs-quick-menu ul").eq(0).show();
            $(".zs-quick-menu li").removeClass("cur");
            $(".zs-quick-menu li").eq(0).addClass("cur");
            $("#zs-zol-comment").hide();
            $(".zs-quick-menu").show();
            $(".zs-comment-essay").hide();
            $(".zs-comment-video").hide();
            //  Z+服务详情   
        } else if ("zs-service-guarantee" == rel) {
            //隐藏其他栏目
            $(this).siblings().each(function() {
                $("#" + $(this).attr("rel")).hide();
            });
            $("#" + rel).show();
            $("#zp-goods-detail").hide();
            $(this).addClass("cur").siblings().removeClass("cur");
            // 快速浏览的导航
            $("#zsSidebar").show();
            $(".zs-quick-menu ul").hide();
            $(".zs-quick-menu ul").eq(1).show();
            $(".zs-quick-menu li").removeClass("cur");
            $(".zs-quick-menu ul").eq(1).find("li").eq(0).addClass("cur");
            $(".zs-quick-menu").show();
            $(".zs-comment-essay").hide();
            $(".zs-comment-video").hide();
            // 参数，购买评价，成交记录
        } else if ("zs-tab-zol-comment" == rel) {
            $("#zp-goods-detail").hide();
            $(this).addClass("cur").siblings().removeClass("cur");
            $("#zs-zol-comment").show();
            $(".zs-comment-essay").show();
            $(".zs-quick-menu").hide();
        } else {
            $("#zp-goods-detail").hide();
            $(this).siblings().each(function() {
                $("#" + $(this).attr("rel")).hide();
            });
            $("#" + rel).show();
            $(this).addClass("cur").siblings().removeClass("cur");
            // 快速浏览的导航
            $("#zsSidebar").hide();
            $("#zs-zol-comment").hide();
            $(".zs-comment-essay").hide();
            $(".zs-comment-video").hide();
        }
        // 留言
        if ("zp-tab-goods-message" == rel) {
            $("input[name=wordsKey]").eq(0).change();
        }
        //  成交记录
        if ("zp-tab-order-record" == rel) {
            $.getGoodsOrderRecord({
                goodsId: goodsId,
                type: 0
            });
        }
        // 进行移动
        var idTop = $("#moveTopNew").offset().top;
        $('body,html').animate({
            scrollTop: idTop
        }, 1);
        return false;
        // 计算快速浏览的长度
        deaailHeightChange();
    });

    // 链接锚点定位
    (function() {
        var urlArr = curUrl.split("#");
        if (urlArr[1] != 'undefined') {
            if (urlArr[1] == 'zp-nav-order-review') {
                $("#zp-tabbar  > li[rel='zp-tab-user-review']").click();
            }
        };
    })();
    /*****************在商品右侧显示商品评价数量和成交记录的点击事件***START***************************/
    $("#a-buy-review").click(function() {
        $("#zp-tabbar  > li[rel='zp-tab-user-review']").click();
    });
    $("#a-buy-record").click(function() {
        $("#zp-tabbar  > li[rel='zp-tab-order-record']").click();
    });
    /*****************在商品右侧显示商品评价数量和成交记录的点击事件***END***************************/
    /******************************************* 添加购物车数量设置********************************************/
    //直接输入商品数量
    var checkGoodsNumber = 1; // 用来判断商品数量是否合法的商品最大购买数量
    $("input[fn=zp-goods-number]").blur(function() {
        checkGoodsNumber = parseInt($(this).val());
        $.checkStyle(checkGoodsNumber); // 调用函数实现状态的改变
    });
    // 点击商品数量增减按钮
    $(".zs-increase, .zs-decrease").click(function() {
        // 如果当前上下选择器为不能选择，则返回假
        if ($(this).hasClass("zs-no-decrease") || $(this).hasClass("zs-no-increase")) {
            return;
        }
        // 获得当前商品数量
        var goodsNumber = $("#zp-goods-number").val();
        goodsNumber = parseInt(goodsNumber);
        // 获取当前选择状态
        var className = $(this).attr("class");
        if ('zs-increase' == className) {
            checkGoodsNumber = goodsNumber + 1;
        } else if ("zs-decrease" == className) {
            checkGoodsNumber = goodsNumber - 1;
        }
        $.checkStyle(checkGoodsNumber);
    });
    /**********************************运费**************************************/
    /**********************************运费end**************************************/
    //统计代码及套装
    getRequest();

    function getRequest() {
        var strArr = new Array();
        var url = location.search; //获取url中"?"符后的字串
        var pageReferrer = encodeURIComponent(document.referrer);
        var sendData = {
            goodsId: goodsId,
            productId: productId,
            subId: subId,
            manuId: manuId,
            merchantId: merchantId,
            pageReferrer: pageReferrer,
            topicId: topicId
        };
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            var paramArr = str.split("&");
            strArr = paramArr[0].split("=");
            if (('zp_from' == strArr[0] && ('pro_index_pricenode' == strArr[1] || 'pro_price_pricenode' == strArr[1])) || ('zs_from' == strArr[0] && (strArr[1] == 'zs_topic'))) {
                var statTypeStr = strArr[1];
                sendData.statTypeStr = statTypeStr;
            }
        }
        var url = baseDetailUrl + "c=Ajax_PriceNode&callback=?&t=" + Math.random();
        $.getJSON(url, sendData, function(data) {});
    }
    /******************运费end**************************/

    // 选择颜色
    $("#zp-choose-color >li, #zp-choose-color-again >li").live("click", function() {
        //父节点ID
        var nodeId = $(this).parent("ul").attr("id");
        if (nodeId == 'zp-choose-color') {
            var nextNodeId = 'zp-choose-set';
        } else {
            var nextNodeId = 'zp-choose-set-again';
        }
        //判断能不能点击
        var curClass = $(this).attr("class");
        var spanCurClass = $(this).find("span").attr("class");
        if (spanCurClass == 'can-not-buy') {
            releaseSuit();
            var thisVal = $(this).attr("num");
            $(this).removeClass().addClass("cur");
            $("#zp-choose-suit-color-id").val(thisVal);
            var mergeIdStr = $(this).attr("fn");
            var mergeIdArr = mergeIdStr.split(",");
            $("#" + nextNodeId + " >li").each(function() {
                var num = $(this).attr("num");
                var isCanBuy = false;
                for (var i in mergeIdArr) {
                    if (mergeIdArr[i] == num) {
                        isCanBuy = true;
                    }
                }
                if (isCanBuy) {
                    $(this).find("span").removeClass().addClass("can-buy");
                } else {
                    $(this).find("span").removeClass().addClass("can-not-buy");
                }
            });
        } else if (curClass == 'cur') { //取消当前选择，放开所有套餐类型
            //                        return false;
            $(this).removeClass("cur");
            $("#" + nextNodeId + " >li").each(function() {
                $(this).find("span").removeClass().addClass("can-buy");
            });
            $("#zp-choose-suit-color-id").val(0);
            $("#zp-choose-suit-id").val(0);
            $("#zp-suit-promotion").hide();
            return false;
        } else {
            //赋值
            var mergeId = $(this).attr("num");
            $("#zp-choose-suit-color-id").val(mergeId);
            //整合套装
            var suitSetIdStr = $(this).attr("fn");
            var suitSetIdArr = suitSetIdStr.split(",");
            $("#" + nextNodeId + " >li").each(function() {
                var num = parseInt($(this).attr("num"));
                var isCanBuy = false;
                for (var i in suitSetIdArr) {
                    if (suitSetIdArr[i] == num) {
                        isCanBuy = true;
                    }
                }
                if (isCanBuy) {
                    $(this).find("span").removeClass().addClass("can-buy");
                } else {
                    $(this).find("span").removeClass().addClass("can-not-buy");
                }
            });
            $(this).addClass("cur").siblings().removeClass("cur");
        }
        //获取套装信息
        $.getSuitId({});
    });
    // 选择套装
    $("#zp-choose-set >li, #zp-choose-set-again >li").live("click", function() {
        //父节点ID
        var nodeId = $(this).parent("ul").attr("id");
        if (nodeId == 'zp-choose-set') {
            var nextNodeId = 'zp-choose-color';
        } else {
            var nextNodeId = 'zp-choose-color-again';
        }
        //判断能不能点击
        var curClass = $(this).attr("class");
        var spanCurClass = $(this).find("span").attr("class");
        if (spanCurClass == 'can-not-buy') {
            releaseSuit();
            var thisVal = $(this).attr("num");
            $(this).removeClass().addClass("cur");
            $("#zp-choose-suit-set-id").val(thisVal);
            var mergeIdStr = $(this).attr("fn");
            var mergeIdArr = mergeIdStr.split(",");
            $("#" + nextNodeId + " >li").each(function() {
                var num = $(this).attr("num");
                var isCanBuy = false;
                for (var i in mergeIdArr) {
                    if (mergeIdArr[i] == num) {
                        isCanBuy = true;
                    }
                }
                if (isCanBuy) {
                    $(this).find("span").removeClass().addClass("can-buy");
                } else {
                    $(this).find("span").removeClass().addClass("can-not-buy");
                }
            });
        } else if (curClass == 'cur') { //取消当前选择，放开所有套餐类型
            return false;
            $(this).removeClass("cur");
            $("#" + nextNodeId + " >li").each(function() {
                $(this).find("span").removeClass().addClass("can-buy");
            });
            $("#zp-choose-suit-set-id").val(0);
            $("#zp-choose-suit-id").val(0);
            $("#zp-suit-promotion").hide();
            return false;
        } else {
            //赋值
            var suitSetId = $(this).attr("num");
            $("#zp-choose-suit-set-id").val(suitSetId);
            //整合套装
            var mergeIdStr = $(this).attr("fn");
            var mergeIdArr = mergeIdStr.split(",");
            $("#" + nextNodeId + " >li").each(function() {
                var num = $(this).attr("num");
                var isCanBuy = false;
                for (var i in mergeIdArr) {
                    if (mergeIdArr[i] == num) {
                        isCanBuy = true;
                    }
                }
                if (isCanBuy) {
                    $(this).find("span").removeClass().addClass("can-buy");
                } else {
                    $(this).find("span").removeClass().addClass("can-not-buy");
                }
            });
            $(this).addClass("cur").siblings().removeClass("cur");
        }
        //获取套装信息
        $.getSuitId({});
    });
    //$('#zp-choose-set li:first').click();
    $.getSuitId({});

    function releaseSuit() {
        //释放套装
        $("#zp-choose-color >li").each(function() {
            $(this).removeClass("cur");
            $(this).find("span").removeClass().addClass("can-buy");
        });
        $("#zp-choose-set >li").each(function() {
            $(this).removeClass("cur");
            $(this).find("span").removeClass().addClass("can-buy");
        });

        $("#zp-choose-suit-color-id").val(0);
        $("#zp-choose-suit-set-id").val(0);
    }

    $("#zp-choose-goods >li").live("click", function() {
        var curClass = $(this).attr("class");
        if (curClass == 'cur') {
            return false;
        }
        location.href = $(this).attr("data-val");
    });
    //获取cookie
    function cookie(name) {
        var cookieArray = document.cookie.split("; "); //得到分割的cookie名值对    
        var cookie = new Object();
        for (var i = 0; i < cookieArray.length; i++) {
            var arr = cookieArray[i].split("="); //将名和值分开    
            if (arr[0] == name)
                return unescape(arr[1]); //如果是指定的cookie，则返回它的值    
        }
        return false;
    }
    //判断是否登录
    var userName = cookie('zol_userid');
    var loginObj = $("#is-login-message");
    var messageButton = $("#submit-content");
    if (userName) {
        loginObj.html('您好<a href="http://my.zol.com" target="_blank">' + userName + '</a></span><span class="zs-tooltip" style="display:none;" id="zp-tooltip">提示：字数请在2-200字之内');
        messageButton.after('<a href="javascript:void(0)" class="zs-publish-btn" onclick="$.saveGoodsMessage({goodsId:\'30367037\', merchantId:\'191490\', goodsName:\'甲骨龙 9代i5 9600K GTX1660Ti 6G独显 240GB硬盘 游戏电脑 DIY组装机\'})">发表留言</a>');
    } else {
        loginObj.html('留言请先<a id="userLogin" href="javascript:void(0);" onclick="loginfunc(this);">登录</a>，您是新用户？<a href="http://service.zol.com/login.php">免费注册</a>');
        messageButton.after('<span class="zs-nopublish-btn">发表留言</span>');
    }
    $("#zoomPreload").css('display', 'none');
    deaailHeightChange();
    //右侧空白高度
    setTimeout(function() {
        var detailHeight = parseInt($(".zs-container").css('height'));
        var leftHeight = parseInt($("#zs-side-left").css('height'));
        if (detailHeight < leftHeight) {
            $(".zs-sidebar").css('height', leftHeight + 'px');
        } else {
            $(".zs-sidebar").css('height', detailHeight + 'px');
        }
    }, 5000);
}); <
/script> <
script >
    function cookie(name) {
        var cookieArray = document.cookie.split("; "); //得到分割的cookie名值对    
        var cookie = new Object();
        for (var i = 0; i < cookieArray.length; i++) {
            var arr = cookieArray[i].split("="); //将名和值分开    
            if (arr[0] == name)
                return unescape(arr[1]); //如果是指定的cookie，则返回它的值    
        }
        return false;
    }
    //留言未登录时，调用弹层

function loginfunc(obj) {
    ZsLogin.set({
        ZsLoginBoxType: 1,
        ZsLoginType: 3
    });
    ZsLogin.openLoginBox();
}
//立即购买验证

function buyNowSubmit() {
    var flag = true;
    //数量验证
    var goodsNumber = parseInt($("#zp-goods-number").val()); //购买量
    var maxNumber = parseInt($("#zp-choose-goods-number").val()); //最大购买数量
    if (goodsNumber > maxNumber) {
        alert("亲，选择的数量大于库存数量！");
        return false;
    }
    //套装验证
    var suitId = $("#zp-choose-suit-id").val();
    suitId = parseInt(suitId);
    var isSuit = $("#zp-is-suit").val();
    isSuit = parseInt(isSuit);
    var suitColorId = $("#zp-choose-suit-color-id").val();
    var suitSetId = $("#zp-choose-suit-set-id").val();

    if (isSuit && (!parseInt(suitColorId) || !parseInt(suitSetId))) {
        flag = false;
    }

    if (!flag) {
        $('.zs-skin-inner').addClass('zs-attention');
        $('html,body').animate({
            scrollTop: '200px'
        }, 1000);
        return false;
    }
    return true;
}
// 未选择颜色和套装弹窗
$('.zs-skin-inner .zs-close').click(function() {
    $('.zs-skin-inner').removeClass('zs-attention');
});

$('.zs-confirm-btn').click(function() {
    var colorId = $('#zp-choose-suit-color-id').val();
    var suitSetId = $('#zp-choose-suit-set-id').val();
    var suitId = $('#zp-choose-suit-id').val();
    if ((colorId && colorId != 0) && (suitSetId && suitSetId != 0) && (suitId && suitId != 0)) {
        $('.zs-skin-inner').removeClass('zs-attention');
    }
});

function setSuitAndColor() {
    var colorId = $('#zp-choose-suit-color-id').val();
    var suitSetId = $('#zp-choose-suit-set-id').val();
    // 颜色
    $('#zp-choose-color > li').each(function(i) {
        if (colorId && 0 != colorId && colorId == $(this).eq(i).attr('num')) {
            $(this).eq(i).addClass('cur');
        }
    });
    // 套装
    //            $('#zp-choose-set > li').each(function(j){
    //                if(suitSetId && 0 != suitSetId && suitSetId == $(this).eq(j).attr('num')){
    //                    $(this).eq(j).addClass('cur');
    //                }
    //            });
}
setSuitAndColor();

//立即购买

function buyNow() {
    //立即购买检查
    var isSubmit = false;
    isSubmit = buyNowSubmit();
    //立即购买提交
    if (isSubmit) {
        var isLoginCheck = cookie('zol_sid');
        if (isLoginCheck) {
            $("#confirmOrderSubmit").submit();
        } else {
            //                    ZsLogin.set({
            //                        ZsLoginBoxType: 1,
            //                        ZsLoginType: 4,
            //                        ZsLoginSubmitId: 'confirmOrderSubmit'
            //                    });
            //                    ZsLogin.openLoginBox();
            var curUrl = window.location.href;
            var jumpUrl = "https://login.zol.com/index.php";
            if (curUrl) {
                jumpUrl += "?backUrl=" + encodeURIComponent(curUrl);
            }
            location.href = jumpUrl;
        }
    } else {
        return false;
    }
}
//双十二1元预订

function DoubleTwelveBuyNow() {
    var isLoginCheck = cookie('zol_sid');
    //生成一个商品模拟表单
    if (isLoginCheck) {
        $("#confirmDoubleTwelveOrderSubmit").submit();
    } else {
        ZsLogin.set({
            ZsLoginBoxType: 1,
            ZsLoginType: 4,
            ZsLoginSubmitId: 'confirmDoubleTwelveOrderSubmit'
        });
        ZsLogin.openLoginBox();
    }
} <
/script>

<!--// QQ咨询-->
<!--    <script defer="defer">
if (rightKeFuArr.length != 0) {
    BizQQWPA.add(rightKeFuArr);
}
if (publicKeFuArr.length != 0) {
    BizQQWPA.add(publicKeFuArr);
} <
/script>-->

<
script type = "text/javascript" >
    window["_BFD"] = window["_BFD"] || {};
_BFD.client_id = "Czhongguanchun_shop";
_BFD.BFD_USER = {
    "user_id": "", //网站当前用户id，如果未登录就为0或空字符串		
    "user_cookie": "5MWG4Pj2j7QuMzI3NzIxLjE1NjI2NjY0MDI=" //网站当前用户的cookie，不管是否登录都需要传		
};
_BFD.script = document.createElement("script");
_BFD.script.type = "text/javascript";
_BFD.script.async = true;
_BFD.script.charset = "utf-8";
_BFD.script.src = (('https:' == document.location.protocol ? 'https://ssl-static1' : 'http://static1') + '.bfdcdn.com/service/zhongguancun_pc/zgc_shop.js');
document.getElementsByTagName("head")[0].appendChild(_BFD.script);

var big_image_link = $("#zoom1 >img").attr("src");
window["_BFD"] = window["_BFD"] || {};
_BFD.BFD_INFO = {
    "id": "30367037", //商品id号
    "name": "甲骨龙 9代i5 9600K GTX1660Ti 6G独显 240GB硬盘 游戏电脑 DIY组装机", //商品名称
    "link": "http://www.zol.com/detail/motherboard/colorful/30367037.html", //商品链接
    "image_link": big_image_link, //商品大图地址
    "simage_link": "https://mercrt-fd.zol-img.com.cn/t_s70x52/g2/M00/0B/05/ChMlWlx-Jm-IdPaeAAFUUEsyVbMAAInVgLSgtUAAVRo739.jpg", //商品小图地址
    "price": "4899", //最低售价即可
    "market_price": "4899", //市场价
    "color": "", //颜色
    "rating_count": "50", //购买评价
    "buy_count": "104", //成交记录
    "category": [
        ["主板", "http://www.zol.com/motherboard/list/s5.html"]
    ], //商品的类别详细信息，第一个元素为类别名称，第二个元素为类别地址，2维数组;类别从大到小，数组最后一项为商品当前属类别
    "onsale": true, //上下架标识  在架为true, 下架为false;
    "stock": "398", //库存
    "address": "湖北", //发货地
    "tag": "item", //商品标签，分团购和普通商品
    "user_id": "", //网站当前用户id，如果未登录就为0或空字符串
    "page_type": "detail", //当前页面全称，请勿修改
    "gds_typ": 2 //1团购 2z＋商品 3普通商品
}; <
/script>

<
script >
    // 统计代码
    function getUserTrack(event, goodsId, url) {
        var statsImg = new Image();
        var rand = new Date().getTime();
        var ipck = getCookie('ip_ck');
        var URL = typeof(url) == 'undefined' ? document.URL : url;
        //http://pvtest.zol.com.cn/images/pvevents.gif?t=时间戳 &event=tuan_tui1 &ip_ck=读ip_ck cookie &url=document_URL
        statsImg.src = 'http://pvtest.zol.com.cn/images/pvevents.gif?t=' +
            rand + '&event=' + event +
            '&ip_ck=' + ipck +
            '&goodsId=' + goodsId +
            '&url=' + URL;

    }
    // 滑过评价数量
var userReviewMouseStartTime = 0;
var userReviewMouseEndTime = 0;
$("#userReview").mouseover(function() {
    userReviewMouseStartTime = new Date().getTime();
}).mouseleave(function() {
    userReviewMouseEndTime = new Date().getTime();
    if ((userReviewMouseEndTime - userReviewMouseStartTime) > 200) {
        getUserTrack('zs_comment_slide');
    }
    userReviewMouseStartTime = 0;
    userReviewMouseEndTime = 0;
});
// 滑过购买数量
var orderRecordMouseStartTime = 0;
var orderRecordMouseEndTime = 0;
$("#orderRecord").mouseover(function() {
    orderRecordMouseStartTime = new Date().getTime();
}).mouseleave(function() {
    orderRecordMouseEndTime = new Date().getTime();
    if ((orderRecordMouseEndTime - orderRecordMouseStartTime) > 200) {
        getUserTrack('zs_order_log_slide');
    }
    orderRecordMouseStartTime = 0;
    orderRecordMouseEndTime = 0;
});
// 评价数量
$("#userReview").click(function() {
    getUserTrack('zs_comment');
});
// 购买数量
$("#orderRecord").click(function() {
    getUserTrack('zs_order_log');
});
// 店铺链接
$("#zs_shop_url").click(function() {
    getUserTrack('zs_shop');
});
// 满赠满减更多展开
$("#slideDownMoreFullSent,#slideUpMoreFullSent").click(function() {
    getUserTrack('zs_gengduo');
});
// 购买数量增减
$(".amount-widget").click(function() {
    getUserTrack('zs_buy_num');
});
// 选择颜色
$("#zp-choose-color").click(function() {
    getUserTrack('zs_color');
});
// 选择套装
$("#zp-choose-set").click(function() {
    getUserTrack('zs_suit');
});
//“买了这款商品的人还买了”统计
$(".z_buymore_class").click(function() {
    var goodsId = $(this).attr("goodsId");
    getUserTrack('z_buymore', goodsId);
});
//“看了这款商品的人还看了”统计
$(".z_lookmore_class").click(function() {
    var goodsId = $(this).attr("goodsId");
    getUserTrack('z_lookmore', goodsId);
});
//“看了最终买”统计
$(".z_lookbuy_class").click(function() {
    var goodsId = $(this).attr("goodsId");
    getUserTrack('z_lookbuy', goodsId);
});
//“促销信息”统计
$(".sc_left_cuxiao_class").click(function() {
    var goodsId = $(this).attr("goodsId");
    getUserTrack('sc_left_cuxiao', goodsId);
});
// 快速咨询
$(".zs-quick-dove").click(function() {
    getUserTrack('fast_consult');
});
// QQ咨询
$(".zs-qq-consult").click(function() {
    getUserTrack('qq_consult');
});
//文字链
$(".tap-look").click(function() {
    getUserTrack('iphone7_reservation_red_word_click');
}); <
/script> <
script src = "/js/topic/topicUrl.js" > < /script>
    <!--//专题统计代码//-->
    <!--    //生意宝及页面统计代码//-->
    <
    script type = "text/javascript"
src = "http://icon.zol-img.com.cn/saas/webim/dovekf2013.js" > < /script> <
script language = "JavaScript"
src = "http://js.zol.com.cn/pv.js"
type = "text/javascript" > < /script> <
script type = "text/javascript" >
    var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F7daf617aaf843f0f55a422b00d7de1e7' type='text/javascript'%3E%3C/script%3E")); <
/script>
<!-- // 配送地区 -->
<
script >
    $(".area-name,.selecet-layer-wrap").hover(function() {
        $('.area-selected-wrap').addClass('area-selected-cur');
    }, function() {
        $('.area-selected-wrap').removeClass('area-selected-cur')
    });
var canBuy = true;
var goodsPrice = 4899.00;
var freightPrice = 0;
var timeSaleCanNotBuy = parseInt('0');

//选择发货地区
var provinceName = '';
$('.province > a').click(function() {
    $('.area-list-wrap > div :first').show();
    $('.area-list-wrap > div :not(:first)').hide();
    var provinceId = $(this).attr('provinceId');
    var thisObj = $(this);
    // 获取是否有省份信息
    if (provinceId && provinceId != '') {
        thisObj.parents('.area-list').attr('provinceId', provinceId);
        var url = "http://order.zol.com/index.php?c=Ajax_Address&a=cityInfo&callback=?&t=" + Math.random();
        $.getJSON(url, {
            provinceId: provinceId
        }, function(data) {
            $('.selecet-tab > li[rel="province"]').find('span').html(thisObj.html());
            if (data.flag == 1) {
                $('.selecet-tab').find('li[class=current]').removeClass('current');
                provinceName = thisObj.html();
                var navObjNum = $('.selecet-tab').children('li').length;
                if (navObjNum >= 2) {
                    $('.selecet-tab').find('li').eq(1).remove();
                }
                $('.selecet-tab').append('<li class="current" rel="city"><span>请选择</span></li>');
                var cityStr = '';
                for (var i in data.cityInfo) {
                    cityStr += '<a href="javascript:void(0)" class="area" cityId="' + data.cityInfo[i].cityId + '">' + data.cityInfo[i].name + '</a>';
                }
                $('.area-list-wrap > div').eq(0).hide();
                $('.area-list-wrap > div').eq(1).html(cityStr).show();
            } else {
                canBuy = false;
                $('.area-name').html(thisObj.html());
                $('.area-selected-wrap').removeClass('area-selected-cur');
                $('.selecet-tab > li').eq(1).remove();
                $('.area-list-wrap > div').eq(1).hide();
            }
            noCanBuy();
        });
    }
});
$('.selecet-tab > li').live('click', function() {
    $('.selecet-tab').find('li[class=current]').removeClass('current');
    var indexNum = $(this).index();
    $(this).addClass('current');
    $('.area-list-wrap > div').not(indexNum).hide();
    $('.area-list-wrap > div').eq(indexNum).show();
});
// 市级选择
$('.city > a').live('click', function() {
    var proviceId = $('.province').attr('provinceid');
    var cityId = $(this).attr('cityid');
    var thisObj = $(this);
    if (proviceId && cityId) {
        $('.selecet-tab > li[rel="city"]').find("span").html(thisObj.html());
        var url = "/index.php?c=Ajax_DetailReply&a=GetFeightInfo&t=" + Math.random();
        $.getJSON(url, {
            proviceId: proviceId,
            cityId: cityId,
            merId: merchantId,
            goodsId: goodsId
        }, function(data) {
            if (data.flag) {
                var freightInfo = data.data.freight_info;
                if (freightInfo[1].price && freightInfo[1].price != 0) {
                    freightPrice = parseInt(freightInfo[1].price);
                }
            }
            canBuy = data.flag;
            noCanBuy();
        });
        $('.area-selected-wrap').removeClass('area-selected-cur');
        $('.area-name').html(provinceName + thisObj.html());
    }
});
// 关闭
$('.selecet-layer-wrap').find('.close').click(function() {
    $('.area-selected-wrap').removeClass('area-selected-cur');
});
// 立即购买按钮不可点
function noCanBuy() {
    var flag = canBuy;
    //定时售卖是否可购买
    if (window.timeSaleCanNotBuy) {
        return false;
    }
    // 运费情况
    var freightStr = '';
    // 购买按钮
    if (!flag) {
        $('.zs-deal-btn').html('<a style="cursor:not-allowed;" title="立即购买" class="zs-buy-off" id="buynow">立即购买</a>');
        $('#nav-buynow').attr('class', 'zs-btn-off');
        $('#nav-buynow').css('cursor', 'not-allowed');
        freightStr = '该地区暂不能送达';
    } else {
        if (parseInt(goodsPrice) >= 399) {
            if (194111 == merchantId) {
                freightStr += '可送达，<strong class="bold">宅急送包邮</strong>';
            } else {
                freightStr += '可送达，<strong class="bold">快递包邮</strong>';
            }
        } else {
            if (194111 == merchantId) {
                freightStr = '可送达，<span class="yufei">运费' + freightPrice.toFixed(2) + '，<i>支持满399宅急送包邮</i><a href="http://www.zol.com/shop_191490" target="_blank">去凑单</a></span>';
            } else {
                freightStr = '可送达，<span class="yufei">运费' + freightPrice.toFixed(2) + '，<i>支持满399顺丰包邮</i><a href="http://www.zol.com/shop_191490" target="_blank">去凑单</a></span>';
            }
        }
        $('.zs-deal-btn').html('<a style="cursor:pointer;" title="立即购买" class="zs-buy-now" id="buynow" onclick="buyNow();">立即购买</a><a href="javascript:void(0)" class="zs-store-buy" onclick="$.addCartInfo({goodsId: \'30367037\', merchantId: \'191490\', fromMerchantId: \'191490\', promoId: \'0\', cartFrom: 1, shareId:\'0\'})" title="加入购物车">加入购物车</a>');
        $('#nav-buynow').attr('class', 'zs-btn');
        $('#nav-buynow').css('cursor', 'pointer');
    }
    $('.area-selected-infor:visible').html(freightStr);
}
// 参数隐藏
if ($('#zp-tab-goods-params').length != 1) {
    $('li[rel="zp-tab-goods-params"]').hide();
}

//手机专享价
$('#to-phone-buy').mousemove(function() {
    $(".qrCodeUrl").show();
}).mouseleave(function() {
    $(".qrCodeUrl").hide();
});
$(".coupon").click(function() {
    var couponId = $(this).attr("data-couponId");
    var startTime = $(this).attr('data-start');
    var stopTime = $(this).attr("data-stop");
    $.ajax({
        'url': '/index.php?c=Ajax_Coupon&a=GetCoupon&couponId=' + couponId,
        'dataType': 'json',
        'success': function(response) {
            if (response.flag) {
                $(".zc-tab-coupons .xhd").show();
                $("#get-coupon-success-box").show();
                $("#get-coupon-success-box p").html("使用时间:" + startTime + " - " + stopTime);
            } else {
                if (response.msg == '未登录') {
                    ZsLogin.openLoginBox();
                    return false;
                }
                $("#get-coupon-failed-box p").html(response.msg);
                $("#get-coupon-failed-box").show();
            }
        }
    });
}); <
/script> <
script >
    partIds = "";
// 计算配件价格
function computePartPrice() {
    if ($("#zp-choose-goods-price").length > 0) {
        goodsPrice = parseInt($("#zp-choose-goods-price").val());
    }
    var partPrice = 0;
    var partNumber = 0;
    partIds = "";
    $(".selectPart:checked").each(function() {
        partPrice += parseInt($(this).attr('data-price'));
        partNumber++;
        if (partIds == "") {
            partIds += $(this).attr('data-goodsid');
        } else {
            partIds += "," + $(this).attr('data-goodsid');
        }
    });
    $(".equal-selected em").html(partNumber);
    $(".equal-price-num").text("￥" + (goodsPrice + partPrice));
}
$(".selectPart").change(computePartPrice);
$("#zp-choose-goods-price").change(computePartPrice);
computePartPrice();
// 添加购物车
$.extend({
    addCartInfoPart: function(options) {
        var defaults = {
            goodsId: 0,
            merchantId: 0,
            fromMerchantId: 0,
            promoId: 0,
            cartFrom: 1,
            shareId: 0,
            partIds: 0,
        };
        var options = $.extend(defaults, options);
        var goodsId = defaults.goodsId;
        var merchantId = defaults.merchantId;
        var fromMerchantId = defaults.fromMerchantId;
        var promoId = defaults.promoId;
        var cartFrom = defaults.cartFrom;
        var shareId = defaults.shareId;
        var partIds = defaults.partIds;
        var goodsPrice = $("#zp-choose-goods-price").val();
        var suitId = parseInt($("#zp-choose-suit-id").val());
        var isSuit = parseInt($("#zp-is-suit").val());
        var checkColor = $("#zp-choose-color .cur").attr('num');
        var skuId = $("#skuId").val();
        var flag = true;
        if (!checkColor && $("#zp-choose-color").length != 0) {
            flag = false;
        }
        if (isSuit && !suitId) {
            flag = false;
        }
        if (!flag) {
            $('.zs-skin-inner').addClass('zs-attention');
            $('.zs-store-buy').hide();
            return false;
        }
        var goodsNumber = 1;
        var maxNumber = parseInt($("#zp-choose-goods-number").val());
        if (goodsNumber > maxNumber) {
            var tipsObj = $(".zs-goods-number-tips");
            tipsObj.html('购买数量超过库存！');
            tipsObj.css('display', 'block');
            return false;
        } else {
            $(".zs-goods-number-tips").hide();
        }
        if ('undefined' == typeof(zpFrom)) {
            zpFrom = null;
        }
        if ('undefined' == typeof(topicId)) {
            topicId = 0;
        }
        var url = "/index.php?c=Ajax_ShopCart&a=AddCartInfo&callback=?&t=" + Math.random();
        $.getJSON(
            url, {
                goodsId: goodsId,
                merchantId: merchantId,
                fromMerchantId: fromMerchantId,
                promoId: promoId,
                suitId: suitId,
                goodsPrice: goodsPrice,
                goodsNumber: goodsNumber,
                cartFrom: cartFrom,
                zpFrom: zpFrom,
                topicId: topicId,
                shareId: shareId
            },
            function(data) {
                $("#zp-choose-suit-again").hide();
                if (data.flag) {
                    if (2 == data.flag) {
                        document.location = "http://service.zol.com/login.php?backurl=" + encodeURIComponent(document.location.href);
                        return false;
                    } else {
                        //购买配件
                        var url = "/index.php?c=Ajax_ShopCart&a=AddPartCartInfo&callback=?&t=" + Math.random();
                        $.getJSON(url, {
                            goodsId: partIds,
                            merchantId: merchantId,
                            fromMerchantId: fromMerchantId,
                            cartFrom: cartFrom,
                            zpFrom: zpFrom,
                        }, function(data) {
                            location.href = "http://order.zol.com/index.php?c=Cart";
                        });
                    }
                } else {
                    alert(data.msg);
                }
            }
        );
    }
});
$(".buy-parts").click(function() {
    if (buyNowSubmit()) {
        if (partIds == "") {
            alert("请选择配件");
            return false;
        }
        $.addCartInfoPart({
            goodsId: '30367037',
            merchantId: '191490',
            fromMerchantId: '191490',
            promoId: '0',
            cartFrom: 1,
            shareId: '0',
            partIds: partIds
        });
    }
}); <
/script> <
script >
    $.extend({
        tuanCountdownClock: function(endTime, nowTime, className) {
            var endTime = endTime;
            var nowTime = nowTime;
            var leave = endTime - nowTime;
            var leaveCheck = 0;
            var lastTime = "";
            if (leave <= 0) {
                window.location.reload();
            }
            var day = Math.floor(leave / 86400);
            var hour = Math.floor(leave / 3600) - (day * 24);
            hour = hour < 10 ? "0" + hour : hour;
            var minute = Math.floor(leave / 60) - (hour * 60) - (day * 1440);
            minute = minute < 10 ? "0" + minute : minute;
            var second = leave - (hour * 3600) - (minute * 60) - (day * 86400);
            second = second < 10 ? "0" + second : second;
            var str = "";
            if ($("#tuanStatus").val() == 1) {
                var str = "距结束仅剩" + (day > 0 ? " <span>" + day + "天</span>" : "") + " <span class=\"time-num\">" + hour + "</span> : <span class=\"time-num\">" + minute + "</span> : <span class=\"time-num\">" + second + "</span>";
            } else if ($("#tuanStatus").val() == 2) {
                var str = "距开始还有" + (day > 0 ? " <span>" + day + "天</span>" : "") + " <span class=\"time-num\">" + hour + "</span> : <span class=\"time-num\">" + minute + "</span> : <span class=\"time-num\">" + second + "</span>";
            }
            $(".group-over-time").html(str);
            endTime--;
            setTimeout("$.tuanCountdownClock('" + endTime + "', '" + nowTime + "', '" + className + "')", 1000);
        }
    });
if ($(".group-over-time")) {
    var nowTime = 1562669571;
    var endTime = $(".group-over-time").attr("end-time");
    $.tuanCountdownClock(endTime, nowTime, "group-over-time");
}
$(".layer-global .close").click(function() {
    $(".layer-overlay").hide();
    $(this).parent().parent().hide();

});

$(".show-more").click(function() {
    if ($(this).html() == "展开") {
        $(this).html("收起");
        $(this).addClass("up");
        $(this).parents('.groupware-type').addClass('down');
    } else {
        $(this).html("展开");
        $(this).removeClass("up");
        $(this).parents('.groupware-type').removeClass('down');
    }
});
$(".ware-type-list li").click(function() {
    var tmpSpuId = $(this).attr("data-spu");
    var tmpSkuId = $(this).attr("data-sku");
    location.href = goodsUrl + "?skuId=" + tmpSkuId;
});
//发送验证码倒计时
var timeLeft = 60;

function checkCodeCutDown() {
    if (timeLeft == 0) {
        $(".ident-send").removeClass("sending").val("发送验证码");
        timeLeft = 60;
        return;
    } else {
        $(".ident-send").addClass("sending").val("已发送 " + timeLeft);
        timeLeft--;
    }
    setTimeout(function() {
        checkCodeCutDown();
    }, 1000);
}
$(".group-start-remind").click(function() {
    timeLeft = 0;
    $("#checkCode").val("");
    $("#userMobile").val($("#userMobile").attr("mobileDefault"));
    $(".error-tip").hide();
    $(".layer-overlay,#tc-kttx").show();
});
$("#tc-kttx .close").click(function() {
    timeLeft = 0;
    $(".layer-overlay,#tc-kttx").hide();
});
$("#userMobile").keyup(function(data) {
    var s = $("#userMobile").val();
    var v = s.replace(/[^\d]/g, '');
    $("#userMobile").val(v);
});
$(".ident-send").click(function() {
    if (!$(this).hasClass("sending")) {
        var mobile = $("#userMobile").val();
        if (!(/^1[34578]\d{9}$/.test(mobile))) {
            $(".error-mobile").show();
            return false;
        }
        $(".error-mobile").hide();
        $.ajax({
            'url': '/index.php?c=Ajax_ShallTuan&a=SendPhoneCode',
            'data': {
                'mobile': mobile
            },
            'dataType': 'jsonp',
            'success': function(response) {
                if (response.flag == 1) {
                    timeLeft = 60;
                    checkCodeCutDown();
                } else {
                    $(".error-mobile").html(response.msg).show();
                }
            }
        });
    }
});
var is_submit_phone = 0;
$(".proving-submit").click(function() {
    if (is_submit_phone == 1) {
        return false;
    }
    var mobile = $("#userMobile").val();
    var checkCode = $("#checkCode").val();
    var spuId = $("input[name='goodsId']").val();
    var skuId = $("#skuId").val();
    var tuanId = $("#tuanId").val();
    if (!(/^1[34578]\d{9}$/.test(mobile))) {
        $(".error-mobile").show();
        return;
    }
    if (checkCode.length < 1) {
        $(".error-checkcode").text("请输入验证码").show();
        return;
    }
    is_submit_phone = 1;
    $.ajax({
        'url': '/index.php?c=Ajax_ShallTuan&a=AddShallTuan',
        'data': {
            'spuId': spuId,
            'skuId': skuId,
            'tuanId': tuanId,
            'mobile': mobile,
            'checkCode': checkCode
        },
        'dataType': 'json',
        'success': function(response) {
            is_submit_phone = 0;
            $(".error-checkcode").text(response.msg).show();
            if (response.flag == 1) {
                setTimeout("$('#tc-kttx .close').trigger('click');", 1000);
            }
        }
    });
});
if ($(".zs-colour-type")) {
    if ($(".zs-colour-type span.can-buy").length > 0) {
        $(".zs-colour-type").removeClass("noSuk");
    } else {
        $(".zs-colour-type").addClass("noSuk");
    }
}
if ($(".zs-suit")) {
    if ($(".zs-suit span.can-buy").length > 0) {
        $(".zs-suit").removeClass("noSuk");
    } else {
        $(".zs-suit").addClass("noSuk");
    }
}
if ($(".tuan-nav-box .nav-tit")) {
    $(".tuan-nav-box .nav-tit,.tuan-nav-box .showUI").hover(
        function() {
            $('.showUI').show();
        },
        function() {
            $('.showUI').hide();
        }
    );
}
(function(window, $, undefined) {
    var tabChange = {
        tabs: function(ele) {
            var len = ele.tabBtn.length;

            function changes() {
                var index = $(this).index();
                var number = index;
                if (number == len - 1) {
                    $(this).addClass("current").siblings().removeClass("current");
                } else {
                    $(this).addClass("current").siblings().removeClass("current");
                }
                ele.tabBody.hide();
                ele.tabBody.eq(index).show();
            }
            ele.tabBtn.click(changes);
            $('.js_zs-comment').hide()
        },
        init: function(ele) {
            tabChange.tabs(ele);
        }
    }
    var domEleTab = {
        tabBtn: $('.evaluating-btn .evaluating-btn-item'),
        tabBody: $('.evaluating-body .evaluating-body-item'),
        tabSub: $('.js_zs-comment'),
        tabSubParent: $('.zs-sidebar')
    };
    tabChange.init(domEleTab);
    $('.g-tab-swith11').eq(0).on('click', function() {
        $('.js_zs-comment').eq(0).show()
        $('.js_zs-comment').eq(1).hide()
    })
    $('.evaluating-btn-item').eq(0).on('click', function() {
        $('.js_zs-comment').eq(0).show()
        $('.js_zs-comment').eq(1).hide()
    })
    $('.evaluating-btn-item').eq(1).on('click', function() {
        $('.js_zs-comment').eq(0).hide()
        $('.js_zs-comment').eq(1).show()
    })
    $('.evaluating-btn-item').eq(2).on('click', function() {
        $('.js_zs-comment').eq(0).hide()
        $('.js_zs-comment').eq(0).hide()
    })
    if ($('.js_zs-comment')) {
        $('.js_zs-comment').hide()
    }
})(window, $, undefined); <
/script> <
script >
    //团购页面访问统计
    var pageType = "tuan_goods_detail_page_pc";
var tuanTjImg = "http://pvtest.zol.com.cn/images/pvevents.gif?t=" + escape((new Date().getTime()) * 1000 + Math.round(Math.random() * 1000)) + "&event=" + pageType + "&ip_ck=" + escape(getCookie("ip_ck")) + "&url=" + location.href;
document.write("<img width=\"0\" height=\"0\" style=\"display:none\" src=\"" + tuanTjImg + "\">"); <
/script>

<
script src = "/js/Public/new/public_head.js" > < /script> <
script src = "/js/Public/new/menuAim.js" > < /script> */
}
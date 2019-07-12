$(function() {
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:8080/zolstore/php/detail.php",
        dataType: "json",
        success: function(product) {
            var str = "";
            $.each(product, function(i, p) {
                str += `
				<div class="wrap">
                <div id="spic">
                    <img src="${p.url}" alt="" id="smallpic">
                    <div id="sf"></div>
                </div>
                <div id="bf">
                    <img src="${p.url}" alt="" id="bpic">
                </div>
                <div id="ulist">
                    <a href="javascript:;" id="left">&lt;</a>
                    <div id="list">
                        <ul>

                        </ul>
                    </div>
                    <a href="javascript:;" id="right">&gt;</a>
                </div>
            </div>
            <div class="goodsinfo-word">
                <div class="p-name">
                    <a class="loadtitle" href="##" style="width: 100px;height:50px;color:grey">${p.title}/a>
                </div>

                <div class="p-price"><strong><em>￥</em><i class="loadpcp">${p.price}</i></strong></div>
                <div class="p-btn">
                    <input type="text" id="count" value="1" />
                    <a href="cart.html">加入购物车</a>
                </div>
            </div>
				`;
            });
            $('.goodsinfo').html(str);
        }
    })
})
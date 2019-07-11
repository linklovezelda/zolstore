$(function() {
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:8080/zolstore/php/getproduct.php",
        dataType: "json",
        success: function(product) {
            var str = "";
            $.each(product, function(i, n) {

                str += `  
					<div class="item item-list clearfix mt20 border-bottom">
					<div class="pic-box fl">
						<a href="details.html?id=${n.pid}" target="_blank">
							<img src="${n.url}" width="154" alt="pbook 手机无线充电器">
							<i class="icon-jiao f12">好价</i>
						</a>
					</div>
					<div class="info-box fl ml20">
						<h2 class="f20">
							<a href="http://www.zol.com/sales/7211419.html" target="_blank" class="c333">
			         ${n.title}                                   <font class="c-red">${n.price}元</font>
							</a>
						</h2>
						<div class="pic-text f14 c666">
							${n.details}
							<a class="more-txt" href="http://www.zol.com/sales/7211419.html" target="_blank">阅读全文</a>
						</div>
						<div class="footer-info clearfix">
							<div class="fl foot-info-fl">
								<span class="collect">0</span>
								<span class="commit">0</span>
								<span class="name">by<a class="c999" href="javascript:;" style="cursor:default;">同福客栈小伙计</a></span>
							</div>
							<div class="fr foot-info-fr">
								<span class="time c999">2019-07-05 17:30</span>
								<a class="source f12" href="javascript:;" style="cursor:default;">天猫商城</a>
								<a data-event=z m_homefeed_button_sales_tmall href="https://uland.taobao.com/coupon/edetail?e=zbK79r6rrwQNfLV8niU3RxsUty%2FyJZUC03%2FX6oiB2V7F8WVlIJ68ABrSI%2FOabn6qNg4Gqf8CT4AKuDLwELihnYNGsJotx2hJFXwrleS4Z0rT%2F%2FKr14fiZSKERU8vDq9emywGiSisqadxozTSM4cM6pOQ2fvnXShUbbmSdzNmWLl2i%2BoLHi6K%2FR7nqj8cJ2V4WwxKM5dp5lRh9foG%2F5o3V5Vkf3oIWjLZVW6yqqeGJ%2FI%3D&&app_pvid=59590_11.23.69.17_479_1562318763597&ptl=floorId:17741;app_pvid:59590_11.23.69.17_479_1562318763597;tpp_pvid:&union_lens=lensId:0b1b5b80_0ed0_16bc1745d33_2fdb"
									target="_blank" class="btn f16">去看看></a>
							</div>
						</div>
					</div>
				</div>`;


            });

            $('.refresh-list').html(str);
        }
    });
});
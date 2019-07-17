$(function() {
    $.ajax({
        type: "GET",
        url: "../php/getproduct.php",
        dataType: "json",
        success: function(product) {
            var str = "";
            $.each(product, function(i, n) {

                str += `  
					<div class="item item-list clearfix mt20 border-bottom">
					<div class="pic-box fl">
						<a href="http://127.0.0.1:8080/zolstore/src/details.html?sid=${n.sid}" >
							<img class="lazy" src="${n.url}" width="154" alt="pbook 手机无线充电器">
							<i class="icon-jiao f12">好价</i>
						</a>
					</div>
					<div class="info-box fl ml20">
						<h2 class="f20">
							<a href="http://127.0.0.1:8080/zolstore/src/details.html?sid=${n.sid}" target="_blank" class="c333">
			         ${n.title}                                   <font class="c-red">${n.price}元</font>
							</a>
						</h2>
						<div class="pic-text f14 c666">
							${n.details}
							<a class="more-txt" href="http://127.0.0.1:8080/zolstore/src/details.html?sid=${n.sid}" target="_blank">阅读全文</a>
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
								<a data-event=z m_homefeed_button_sales_tmall href=""
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
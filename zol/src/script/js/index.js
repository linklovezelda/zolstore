// $(function() {
//     const goodlist = $('.refresh-list');

//     $.ajax({
//         url: '../php/goodlist.php',
//         dataType: 'json',
//         success: function(response) {
//             console.log(response);
//             var data = $('.data-render');
//             var add_data = '';
//             response.forEach(function(elm, i) {
//                 var pic = JSON.parse(elm, pic);
//                 add_data = `<div class="item item-list clearfix mt20 border-bottom">
// 				<div class="pic-box fl">
// 					<a href="details.html?id=${product[i].pid}" target="_blank">
// 						<img src="${product[i].url}" width="154" alt="魅族 16th Plus（6GB RAM/全网通）">
// 						<i class="icon-jiao f12">好价</i>
// 					</a>
// 				</div>
// 				<div class="info-box fl ml20">
// 					<h2 class="f20">
// 						<a href="http://www.zol.com/sales/7210276.html" target="_blank" class="c333">
// 							${product[i].title}                                    <font class="c-red">${product[i].price}元</font> 
// 				</a>
// 					</h2>
// 					<div class="pic-text f14 c666">
// 					   ${product[i].details}
// 						<a class="more-txt" href="http://www.zol.com/sales/7210276.html" target="_blank">阅读全文</a>
// 					</div>
// 					<div class="footer-info clearfix">
// 						<div class="fl foot-info-fl">
// 							<span class="collect">0</span>
// 							<span class="commit">0</span>
// 							<span class="name">by<a class="c999" href="javascript:;" style="cursor:default;">同福客栈小伙计</a></span>
// 						</div>
// 						<div class="fr foot-info-fr">
// 							<span class="time c999">17:16</span>
// 							<a class="source f12" href="javascript:;" style="cursor:default;">天猫商城</a>
// 							<a href="http://www.zol.com/sales/7210276.html" target="_blank" class="btn f16">去购买></a>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 				`;
//                 data.append(add_data);
//                 $()
//             });
//         }

//     });
// })
;
! function() {
    const goodlist = $('.refresh-list');
    ajax({
        url: './php/goodlist.php',
        dataType: 'json',
        success: function(product) {
            let htmlstr = '<div>';
            for (let i = 0; i < product.length; i++) {
                htmlstr += `
				<div class="item item-list clearfix mt20 border-bottom">
				<div class="pic-box fl">
					<a href="details.html?id=${product[i].pid}" target="_blank">
						<img src="${product[i].url}" width="154" alt="魅族 16th Plus（6GB RAM/全网通）">
						<i class="icon-jiao f12">好价</i>
					</a>
				</div>
				<div class="info-box fl ml20">
					<h2 class="f20">
						<a href="http://www.zol.com/sales/7210276.html" target="_blank" class="c333">
							${product[i].title}                                    <font class="c-red">${product[i].price}元</font> 
				</a>
					</h2>
					<div class="pic-text f14 c666">
					   ${product[i].details}
						<a class="more-txt" href="http://www.zol.com/sales/7210276.html" target="_blank">阅读全文</a>
					</div>
					<div class="footer-info clearfix">
						<div class="fl foot-info-fl">
							<span class="collect">0</span>
							<span class="commit">0</span>
							<span class="name">by<a class="c999" href="javascript:;" style="cursor:default;">同福客栈小伙计</a></span>
						</div>
						<div class="fr foot-info-fr">
							<span class="time c999">17:16</span>
							<a class="source f12" href="javascript:;" style="cursor:default;">天猫商城</a>
							<a href="http://www.zol.com/sales/7210276.html" target="_blank" class="btn f16">去购买></a>
						</div>
					</div>
				</div>
			</div>
				
				`;

            }
            htmlstr += '</div>';
            goodlist.innerHTML = htmlstr;
        }
    })
}();
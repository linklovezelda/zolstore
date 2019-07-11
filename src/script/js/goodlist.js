$(function() {
    $.ajax({
        type: "GET",
        url: "./php/getproduct.php",
        dataType: "json",
        success: function(product) {
            var str = "<li>";
            $.each(product, function(i, n) {
                str += `  
				<ul class="commodity-list clearfix">
				<li class="commodity-item">
	<a class="commodity-item-link" href="http://127.0.0.1:8080/zolstore/zol/src/details.html?id=${n.pid}" target="_blank">
		<div class="item-pic">
			<div class="pic-img">
				<img class="lazy" data-original="${n.url}" alt="佳能 EF 70-200mm f/2.8L IS III三代镜头" />
			</div>
		</div>
		<div class="item-info">
			<div class="item-desc">
				<p class="item-name">${n.title}</p>
				<span class="item-intro"></span>
			</div>
			<div class="item-detail clearfix">
				<div class="item-detail-left">
					<div class="item-price">
						<span class="xj-price"><em>￥</em><span>${n.price}</span></span>
						<span class="yj-price"><em>&yen;</em><span>${n.price}</span></span>
					</div>
					<span class="ls-price"><span>立省2499元</span></span>
				</div>
				<div class="item-btn">
					<span class="item-btn-con">马上抢</span>
				</div>
			</div>
		</div>
		<div class="show-time">
			<div class="item-time-con clearfix">
				<span class="countdown">剩余：<em id="day">6</em>天<em id="hour">18</em>时<em id="minute">12</em>分<em id="second">12</em>秒</span>
			</div>
		</div>
	</a>
</li>
</ul> `;

            });
            str += "</li>";
            $('li').append(str);
        }

    });
});

// const ul = document.querySelector('ul');
// let ajax = new XMLHttpRequest();
// ajax.open('get', 'getproduct.php', true);
// ajax.send();
// ajax.onreadystatechange = function() {
//     if (ajax.readyState === 4) {
//         if (ajax.status === 200) {
//             console.log(JSON.parse(ajax.responseText));
//             let dataarr = JSON.parse(ajax.responseText);
//             let strhtml = '';
//             for (let i = 0; i < dataarr.length; i++) {
//                 strhtml += `
// 					<li>
// 					<img src="${dataarr[i].url}">
// 					<p>${dataarr[i].title}</p>
// 					<span>￥${dataarr[i].price}</span>
// 					</li>
// 					`;
//             }
//             ul.innerHTML = strhtml;
//         } else {
//             throw new Error('接口地址有误' + ajax.status);
//         }
//     }
// };
// ul.onmouseover = function(ev) {
//     var ev = ev || window.event;
//     var element = ev.target || ev.srcElement;
//     var ele = element.parentNode;
//     if (ele.tagName === "LI") {
//         ele.style.border = '1px solid blue';
//     }
// }
// ul.onmouseout = function(ev) {
//     var ev = ev || window.event;
//     var element = ev.target || ev.srcElement;
//     var ele = element.parentNode;
//     if (ele.tagName === "LI") {
//         ele.style.border = '1px solid #ccc';
//     }
// }
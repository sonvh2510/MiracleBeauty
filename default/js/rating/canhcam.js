var wdH=0,wdW=0;function winresize(){wdH=$(window).height(),wdW=$(window).width()}$(document).ready(function(){"use strict";winresize(),$(window).width()<1024&&$(".allmenu-button").click(function(){$(this).toggleClass("active"),$(".list-menu").fadeToggle()}),$(".info-button").click(function(){$(this).toggleClass("active"),$(".mobile-show").fadeToggle()}),$(".icon-subleftmenu").click(function(){$(this).parent().parent().hasClass("active")?$(this).parent().parent().removeClass("active"):($(".leftmenu ul > li").removeClass("active"),$(this).parent().parent().addClass("active"))}),$(".select-amount .btn-dec").on("click",function(){var e=$(this).parent().find("input"),i=e.val();return i--,e.val(i),$(".table-wrap").length&&e.trigger("change"),!1}),$(".select-amount .btn-inc").on("click",function(){var e=$(this).parent().find("input"),i=e.val();return++i>0&&e.val(i),$(".table-wrap").length&&e.trigger("change"),!1}),$(".single-item").slick({lazyLoad:"ondemand",adaptiveHeight:!0}),$(".prd-slide").slick({dots:!1,lazyLoad:"ondemand",infinite:!0,speed:300,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:1028,settings:{slidesToShow:4}},{breakpoint:800,settings:{slidesToShow:4}},{breakpoint:650,settings:{slidesToShow:2}}]}),$('.prd-home a[data-toggle="tab"]').on("shown.bs.tab",function(e){e.preventDefault();var i=$(this).attr("href");$(i+" .prd-slide").slick("unslick"),$(i+" .prd-slide").slick({dots:!1,infinite:!0,lazyLoad:"ondemand",speed:300,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:1028,settings:{slidesToShow:4}},{breakpoint:800,settings:{slidesToShow:4}},{breakpoint:650,settings:{slidesToShow:2}}]})}),$('.product-zone-list a[data-toggle="tab"]').on("shown.bs.tab",function(e){e.preventDefault();var i=$(this).attr("href");$(i+" .prdzone-slide").slick("unslick"),$(i+" .prdzone-slide").slick({dots:!1,lazyLoad:"ondemand",infinite:!1,speed:300,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:4}},{breakpoint:800,settings:{slidesToShow:3}},{breakpoint:650,settings:{slidesToShow:2}}]})}),$(".prd-related").slick({dots:!1,infinite:!1,lazyLoad:"ondemand",speed:300,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:1028,settings:{slidesToShow:4}},{breakpoint:800,settings:{slidesToShow:4}},{breakpoint:650,settings:{slidesToShow:2}}]}),$(".banner-zone-slide").slick({dots:!0,lazyLoad:"ondemand",infinite:!1,arrows:!1,speed:300,slidesToShow:1,slidesToScroll:1}),$(".prdzone-slide").slick({dots:!1,lazyLoad:"ondemand",infinite:!1,speed:300,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:4}},{breakpoint:800,settings:{slidesToShow:3}},{breakpoint:650,settings:{slidesToShow:2}}]}),$(".img-slide").slick({slidesToShow:1,lazyLoad:"ondemand",slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".nav-slide",infinite:!0}),$(".nav-slide").slick({lazyLoad:"ondemand",slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:991,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:2}}],prevArrow:$(".img-prev"),nextArrow:$(".img-next"),asNavFor:".img-slide",focusOnSelect:!0,infinite:!0,vertical:!0}),$(window).width()>767&&$(".event-content").responsiveEqualHeightGrid(),$(".faq-group").click(function(){$(".faq-group").removeClass("open"),$(".faq-group .answer").slideUp(300),$(this).toggleClass("open"),$(this).children(".answer").slideDown(300)}),$(".filter-name").click(function(){$(this).parent(".filter-kind").children(".filter-list").slideToggle(300),$(this).toggleClass("minimize")}),$(".filter").click(function(){$(this).toggleClass("active")}),$("a.popup").fancybox({width:1200,height:400,type:"iframe"}),$(".main-img").fancybox({padding:0,helpers:{overlay:{locked:!1}}}),$("header").scrollToFixed(),$(window).scroll(function(){if($(".altcontent2.cmszone").length){var e=$(".altcontent2.cmszone").offset().top,i=$("ul.list-menu").offset().top,s=e-$("ul.list-menu").outerHeight(!0)-$("header").outerHeight(!0),o=0;i>=s?($("header").css("position","absolute"),$("header").css("top",s+"px"),o=s):($("header").css("position","fixed"),$("header").css("top","0")),$(this).scrollTop()<o&&"absolute"==$("header").css("position")&&($("header").css("position","fixed"),$("header").css("top","0"))}}),$(".info-group .title").bind("click",function(){$(".bill-form").slideToggle()}),$(".voucher .title").bind("click",function(){$(".voucher-form").slideToggle()}),$(".facebook,.google").on("click",function(){var e=$(this).data("url");return window.open(e,"popupWindow","width=660,height=480,scrollbars=yes"),!1}),$(".close-btn").click(function(e){$(this).parent().addClass("hidden")}),$(".comment-text a").click(function(){return $("html,body").animate({scrollTop:$(this.hash).offset().top-100},700),!1}),$("main img").lazyload({effect:"fadeIn",effectTime:500})}),$(function(){"use strict";$("html").scrollUp({scrollName:"scrollUp-text",topDistance:"300",topSpeed:300,animation:"fade",animationInSpeed:200,animationOutSpeed:200,scrollText:'<i class="fa fa-angle-double-up" aria-hidden="true"></i>',activeOverlay:!1})}),$(document).on("DOMNodeInserted","main img",function(){$(this).lazyload({effect:"fadeIn"})});
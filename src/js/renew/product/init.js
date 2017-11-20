$(function() {
	$("#bxS-1").bxSlider({
		pagerCustom: "#bxP-1",
		captions: true,
		auto: true,
		duration: 3000
	});
	
	$("a[rel^='prettyPhoto']").prettyPhoto({
		autoplay_slideshow: true,
		animation_speed: 'fast',
		slideshow: 3000,
		social_tools:'',
		opacity: 0.30, 
		allow_resize: true
		//show_title: true, 
		//default_width: 500
	});
	
	// 상품정보창 달력 등장
	$("#prd-infBox .d-date .d-date-1, #prd-infBox .d-date .d-date-3").on('click', function() {
		var backDrop = $("<div class='backDrop'></div>");
		if ($("#prd-sltCal").css('display') == 'block') {
			$("#prd-infBox .d-date .d-date-1, #prd-infBox .d-date .d-date-3").removeClass('on');
			
			$("#prd-sltCal").hide();
			$('#prd-infBox .backDrop').remove();
		} else {
			$("#prd-infBox .d-date .d-date-1, #prd-infBox .d-date .d-date-3").addClass('on');
			
			backDrop.insertBefore($('#prd-infBox .d-date'));
			$("#prd-sltCal").fadeIn();
		}
	});
	// 선택완료 클릭 시 
	$("#prd-sltCal .d-area .a2").on('click', function() {
		$("#prd-infBox .d-date .d-date-1, #prd-infBox .d-date .d-date-3").removeClass('on');
		$("#prd-sltCal").hide();
		$('#prd-infBox .backDrop').remove();
	});
	// 배경 클릭 시
	$('#prd-infBox').on('click', '.backDrop', function() {
		$("#prd-infBox .d-date .d-date-1, #prd-infBox .d-date .d-date-3").removeClass('on');
		$("#prd-sltCal").hide();
		$(this).remove();
	});
	
	// 날짜확인, 객실확인 클릭시 스크롤 이동
	$("#prd-buy .btn-chk").on('click', function() {
		var scrTop = $("#prd-buy").offset().top;
		$("html, body").stop().animate({scrollTop: scrTop},200);
	});
	
	// 상품 클릭시 줄 선택
	$("#prd-tb .tr").on("click", function() {
		$(this).siblings().removeClass('on');
		$(this).toggleClass('on');
	});
	
	// 높이 조절
	var c1_ht = $("#prd-tb .trd-comp-1").height();
	console.log(c1_ht);
	$("#prd-tb .trd-comp-2").css({
		"min-height": c1_ht
	});
	
	$.each($("#part-con .pkg-con .con-1"), function() {
		var c2_ht = $(this).height() + 1;
		$(this).next().height(c2_ht);
	});
	
	$("#prd-tb .trd-comp-2 span.lbl").on("click", function() {
		/*$(this).closest("ul").next().hide();*/
		$(this).closest("li").toggleClass("on");
		$(this).closest("ul").toggleClass("on");
		var isChecked = $(this).prev().prop("checked");
		isChecked = !isChecked;
		$(this).prev().prop("checked", isChecked);
		/*if( isChecked ){
			$(this).closest("li").find(".slt-drop").addClass("on");
		} else {
			$(this).closest("li").find(".slt-drop").removeClass("on");
		}*/
		var c2_ht = $(this).closest('li').find('.pkg-con .con-1').height() + 1;
		$(this).closest('li').find('.pkg-con .con-1').next().height(c2_ht);
		/*$.each($("#part-con .pkg-con .con-1"), function() {
			var c2_ht = $(this).height() + 1;
			$(this).next().height(c2_ht);
		});*/
	});
	$("#prd-tb .trd-comp-2 input[type=checkbox]").on("click", function() {
		/*$(this).closest("ul").next().hide();*/
		$(this).closest("li").toggleClass("on");
		$(this).closest("ul").toggleClass("on");
		$("#pdtSlt-pb").toggleClass("on");
		var isChecked = $(this).prop("checked");
		/*if( isChecked ){
			$(this).closest("li").find(".slt-drop").addClass("on");
		} else {
			$(this).closest("li").find(".slt-drop").removeClass("on");
		}*/
		var c2_ht = $(this).closest('li').find('.pkg-con .con-1').height() + 1;
		$(this).closest('li').find('.pkg-con .con-1').next().height(c2_ht);
		/*$.each($("#part-con .pkg-con .con-1"), function() {
			var c2_ht = $(this).height() + 1;
			$(this).next().height(c2_ht);
		});*/
	});
	
	
})


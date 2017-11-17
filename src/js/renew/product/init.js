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
	$("#prd-tb tbody tr").on("click", function() {
		$(this).siblings().removeClass('on');
		$(this).toggleClass('on');
	});
	
	
})


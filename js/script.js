$(function () {
  $(document).ready(function () {
    setTimeout(function () {
      $("html, body").scrollTop(0);
    }, 100);
  });
  $(".intro_cir").on("click", function () {
    // intro 클래스를 가진 div의 클릭 이벤트 핸들러 설정
    var parentDiv = $(".intro_ani"); // 클릭한 intro 클래스를 가진 div 요소
    var count = 0; // 생성된 move 클래스를 가진 div 요소의 개수 카운트 변수
    var interval = setInterval(function () {
      // 0.2초 간격으로 실행될 코드 설정
      if (count < 5) {
        // 5개의 move 클래스를 가진 div 요소를 생성하면 종료
        var divElement = $("<div>").addClass("move"); // 새로운 div 요소 생성 및 클래스와 텍스트 설정
        parentDiv.append(divElement); // 생성한 div 요소를 클릭한 intro 클래스를 가진 div 요소의 자식으로 추가
        count++; // 생성된 move 클래스를 가진 div 요소의 개수 증가
      } else {
        clearInterval(interval); // 5개의 move 클래스를 가진 div 요소를 모두 생성하면 setInterval 종료
      }
    }, 200); // 0.2초(200ms) 설정
    setTimeout(function () {
      // 1초 뒤에 실행될 코드 설정
      $(".intro_cir").fadeOut(); // intro_cir 클래스를 가진 div 요소를 페이드아웃 처리
    }, 500); // 1초(1000ms) 설정
    setTimeout(function () {
      $(".intro_video").css({ display: "block" });
      $("body").css({ overflowY: "scroll" });
      $('.move').remove();
    }, 2500);
  });

  // 마우스커서
  $(document).mousemove(function(event) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    $(".cursor").css({
      "top": mouseY + 10 + "px",
      "left": mouseX + 10 + "px"
    });
  });
    $('a,header h1,.gnb ul li,.intro_cir,.fix_cir,.con_item').hover
    (function(){
      $('.cursor').css({backgroundColor:'#DD5D57',scale:'1.6'});
    },function(){
      $('.cursor').css({backgroundColor:'#A58DE3',scale:'1.3'});
    });

  // 햄버거메뉴
  $(document).on('click', '.hbg_btn', function() {
    var $currentItem = $(this);
  
    if ($currentItem.hasClass('on')) {
      $currentItem.removeClass('on');
      $('.btn_eyes span:first-child,.btn_eyes span:last-child').removeClass('active');
      $('.hbg_menu').slideUp();
    } else {
      $currentItem.addClass('on');
      $('.btn_eyes span:first-child,.btn_eyes span:last-child').addClass('active');
      $('.hbg_menu').slideDown();
    }
  });

  // 스크롤이벤트
  $(window).on("scroll", function () {
    const winTop = $(window).scrollTop(); //윈도우 스크롤값
    // console.log(winTop);
    // 헤더 스크롤 이벤트
    if (winTop >= $(".sec01").position().top - 100) {
      $("header").fadeIn();
      $('.sns_cir').fadeIn();
    } else if (winTop < $(".sec01").offset().top) {
      $("header").fadeOut();
      $(".sns_cir").fadeOut();
    }
    // 섹션1 백그라운드 스크롤 이벤트
    var scrollTop = $(window).scrollTop();
    var sec01Top = $(".sec01").offset().top - 500;

    // 윈도우 스크롤 top 값이 .sec01의 offset().top - 500 위치에 도달했을 때
    if (scrollTop >= sec01Top) {
      // .sec01_bg 안에 div 태그 10개 생성
      if ($(".sec01_bg div").length === 0) {
        for (var i = 0; i < 10; i++) {
          var bgBar = $("<div>").addClass("sec01_bg_bar");
          bgBar.appendTo(".sec01_bg");
        }
      }
    } else if (winTop === 0) {
      $(".sec01_bg div").remove();
    }

    // 섹션 이동시 메뉴 색상 변경
    var $menu = $('.gnb ul li,.hbg_menu ul li')
    $('section').each(function(){
      if($(this).offset().top <= $(window).scrollTop()){
        let index = $(this).index()-2;
        $menu.removeClass('on')
        $menu.eq(index).addClass('on');
      }
    });

    // 섹션2 타이틀 인포
    if(winTop>=$('.sec02').position().top-700){
      $('.title h2').addClass('show')
    }else if(winTop === 0){
      $('.title h2').removeClass('show')
    }
    if(winTop >= $('.sec02').position().top - 500){
      $('.title p').addClass('show')
    }else if((winTop === 0)){
      $('.title p').removeClass('show')
    }

    ////
  });

  // 메뉴 클릭시 섹션 이동
  $(".gnb ul li,.hbg_menu li").click(function(event) {
    var target = $(this).attr("href"); // 클릭한 메뉴의 href 값을 가져옴
    $("html, body").animate({ // 스크롤링 애니메이션
      scrollTop: $(target).offset().top // 해당 섹션으로 스크롤링
    }, 500); // 애니메이션 시간 (0.8초)
  });
  // 로고 클릭시 상단 이동
  $('h1').click(function(){
    $('html,body').animate({
      scrollTop: $('html').offset().top
    },500)
  })

  // 섹션2
  $(document).on('click', '.con_item', function() {
    var $currentItem = $(this);
  
    if ($currentItem.hasClass('on')) {
      $currentItem.removeClass('on');
    } else {
      $('.con_item.on').removeClass('on');
      $currentItem.addClass('on');
    }
  
    if ($('.con_item.on').length === 0) {
      $('.con_item').css('display', ''); // 초기값으로 되돌림
    } else {
      $('.con_item:not(.on)').css('display', 'none');
    }
  });
  //sns 써클
  // var fixed = false;
  // $('.fix_cir').click(function(){
  //   if (!fixed) {
  //     $('.sns>a:nth-child(1)').animate({top:'-20%'},500);
  //     $('.sns>a:nth-child(2)').animate({top:'-10%',left:'15%'},400);
  //     $('.sns>a:nth-child(3)').animate({top:'15%',left:'-10%'},300);
  //     $('.sns>a:nth-child(4)').animate({top:'50%',left:'-20%'},200);
  //   } else {
  //     $('.sns>a:nth-child(1)').animate({top:'50%'},500);
  //     $('.sns>a:nth-child(2)').animate({top:'50%',left:'50%'},400);
  //     $('.sns>a:nth-child(3)').animate({top:'50%',left:'50%'},300);
  //     $('.sns>a:nth-child(4)').animate({top:'50%',left:'50%'},200);
  //   }
  //   fixed = !fixed;
  // })
  var fixed = false;

$('.fix_cir').click(function(){
  if (!fixed) {
    if ($(window).width() >= 680) { // 미디어 쿼리 추가
      $('.sns>a:nth-child(1)').animate({top:'-20%'},500);
      $('.sns>a:nth-child(2)').animate({top:'-10%',left:'15%'},400);
      $('.sns>a:nth-child(3)').animate({top:'15%',left:'-10%'},300);
      $('.sns>a:nth-child(4)').animate({top:'50%',left:'-20%'},200);
    }else{
      $('.sns>a:nth-child(1)').animate({top:'-30%'},500);
      $('.sns>a:nth-child(2)').animate({top:'-100%'},400);
      $('.sns>a:nth-child(3)').animate({top:'-170%'},300);
      $('.sns>a:nth-child(4)').animate({top:'-240%'},200);
    }
  } else {
    if ($(window).width() >= 680) { // 미디어 쿼리 추가
      $('.sns>a:nth-child(1)').animate({top:'50%'},500);
      $('.sns>a:nth-child(2)').animate({top:'50%',left:'50%'},400);
      $('.sns>a:nth-child(3)').animate({top:'50%',left:'50%'},300);
      $('.sns>a:nth-child(4)').animate({top:'50%',left:'50%'},200);
    }else{
      $('.sns>a:nth-child(1)').animate({top:'50%'},500);
      $('.sns>a:nth-child(2)').animate({top:'50%'},400);
      $('.sns>a:nth-child(3)').animate({top:'50%'},300);
      $('.sns>a:nth-child(4)').animate({top:'50%'},200);
    }
  }
  fixed = !fixed;
});


  ///////
});

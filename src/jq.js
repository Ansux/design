jQuery(function ($) {
  $(document).ready(function () {
    $(".menuItem").click(function () {
      $("html, body").animate({
        scrollTop: $($(this).find('a').attr("href")).offset().top
      }, 1000);
      return false;
    });

    $(window).resize(resizeCanvas);

    function resizeCanvas() {
      var width = $(window).get(0).innerWidth;
      $('#canvas').attr('width', width);
      $('#canvas').attr('height', width * 0.292);
    }

    resizeCanvas();

    $('.navbar-wrapper').stickUp({
      parts: {
        0: 'home',
        1: 'about',
        2: 'news',
        3: 'team',
        4: 'case',
        5: 'contact'
      },
      itemClass: 'menuItem',
      itemHover: 'active',
      marginTop: 'auto'
    });
    $(window).resize(function () {
      var height = $('.large-item').height();
      if ($(window).width() > 768) {
        height = height / 2;
      }
      $('.large-item').siblings().height(height);
    });
    var video = document.getElementById("video");
    var fix_video = document.getElementById("fix_video");
    $('#play').click(function () {
      video.pause();
      $('.fix-top').hide();
      $('.banner-detail').hide();
      $('.video2').show();
      setTimeout(function () {
        fix_video.play();
      }, 100);
    });
    $('#close_video').click(function () {
      video.play();
      $('.fix-top').show();
      $('.banner-detail').show();
      $('.video2').hide();
      fix_video.pause();
    });

    $(window).bind("scroll", function (event) {
      //窗口的高度+看不见的顶部的高度=屏幕低部距离最顶部的高度
      var thisButtomTop = parseInt($(window).height()) + parseInt($(window).scrollTop()) - 200;
      var thisTop = parseInt($(window).scrollTop()); //屏幕顶部距离最顶部的高度
      var PictureTop = parseInt($(".text-content").eq(0).offset().top);
      if (PictureTop >= thisTop && PictureTop <= thisButtomTop) {
        $(".text-content").eq(0).addClass('in');
        //  $("#你的要滚动加载的ID").attr("src", $("#你的要滚动加载的ID").attr("haoroomslazyload"));
        //此处可以执行你的加载函数，加载函数由原来的document.ready中，移到这里来！
      }
    });

  });
});
$(window).load(function () {
  setTimeout(function () {
    (function () {
      var height = $('.large-item').height();
      if ($(window).width() > 768) {
        height = height / 2;
      }
      $('.large-item').siblings().height(height);
      console.log(height);
    })();
  }, 10);
});
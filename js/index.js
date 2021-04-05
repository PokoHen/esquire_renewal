$(document).ready(function(){
    
    /* css 부분 */
    let ww = $(window).width();
    let wh = $(window).height();
    let adrr_icon = $('.sec_scroll').width();
    let news_width = $('.news_con').width();
    let big_gal_height = $('.big_gal').outerHeight();
    let in_footer_w = $('.in_footer').width();
    let copy_right_w = $('.copy_right').width();
    let in_move_box_3_w = $('.in_move_box_3').width();
    let h_scri_img_w = $('.h_scri_title').width();
    let wheel_height = wh;
    let img_init_h = $('.img_init').height();
    let img_init_w = $('.img_init').width();

    $('div.sec_scroll').css({ left: ((ww/2)-(adrr_icon/2)), });
    $('.sec_1_inner').css({ height: wh, });
    $('.inner_con').css({ height: wh, });
    $('.sec_1_sur').css({ height: wh, });
    $('.inner_con_box').css({ height: wh, });
    $('.small_gal_box').css({ height: big_gal_height, });
//    console.log(big_gal_height)
    $('.copy_right').css({ left: ((in_footer_w/2)-(copy_right_w/2)), });
    $('.in_move_box_3').css({ width: in_move_box_3_w, });
    $('.h_scri_bg').css({ width: h_scri_img_w, });

    if (ww > 900) {
        $('.news_con').css({ height: news_width * 1.08, });
        
        $('.left_1>div.news_img>a>img.news_small_img').attr('src', 'img/pc/new_1.png');
        $('.left_2>div.news_img>a>img.news_small_img').attr('src', 'img/pc/new_3.png');
        $('.left_3>div.news_img>a>img.news_small_img').attr('src', 'img/pc/new_5.png');
        $('.left_4>div.news_img>a>img.news_small_img').attr('src', 'img/pc/new_7.png');
        
        $('.right_1>div.news_img>a>img.news_big_img').attr('src', 'img/pc/new_2.png');
        $('.right_2>div.news_img>a>img.news_big_img').attr('src', 'img/pc/new_4.png');
        $('.right_3>div.news_img>a>img.news_big_img').attr('src', 'img/pc/new_6.png');
        $('.right_4>div.news_img>a>img.news_big_img').attr('src', 'img/pc/new_8.png');
        
        $('.left_2').after($('.right_2'));
        $('.left_4').after($('.right_4'));
        
        $('.gal_1').attr('src', 'img/pc/gal_1.png');
        $('.gal_2').attr('src', 'img/pc/gal_2.png');
        $('.gal_3').attr('src', 'img/pc/gal_3.png');
        $('.gal_4').attr('src', 'img/pc/gal_4.png');

    }else if(ww < 900){
        $('.news_con').css({ height: news_width * 1.55, });
        
        $('.left_1>div.news_img>a>img.news_small_img').attr('src', 'img/tab/news_1.png');
        $('.left_2>div.news_img>a>img.news_small_img').attr('src', 'img/tab/news_3.png');
        $('.left_3>div.news_img>a>img.news_small_img').attr('src', 'img/tab/news_5.png');
        $('.left_4>div.news_img>a>img.news_small_img').attr('src', 'img/tab/news_7.png');
        
        $('.right_1>div.news_img>a>img.news_big_img').attr('src', 'img/tab/news_2.png');
        $('.right_2>div.news_img>a>img.news_big_img').attr('src', 'img/tab/news_4.png');
        $('.right_3>div.news_img>a>img.news_big_img').attr('src', 'img/tab/news_6.png');
        $('.right_4>div.news_img>a>img.news_big_img').attr('src', 'img/tab/news_8.png');
        
        $('.left_2').before($('.right_2'));
        $('.left_4').before($('.right_4'));
        
        $('.gal_1').attr('src', 'img/tab/gal_1.png');
        $('.gal_2').attr('src', 'img/tab/gal_2.png');
        $('.gal_3').attr('src', 'img/tab/gal_3.png');
        $('.gal_4').attr('src', 'img/tab/gal_4.png');
        
    }

    $(window).resize(function(){
        ww = $(window).width();
        wh = $(window).height();
        $('div.sec_scroll').css({ left: ((ww/2)-(adrr_icon/2)), });
        $('.sec_1_inner').css({ height: wh, });
        $('.inner_con').css({ height: wh, });
        $('.sec_1_sur').css({ height: wh, });
        $('.inner_con_box').css({ height: wh, });
        wheel_height = wh;
        big_gal_height = $('.big_gal').height();
        $('.small_gal_box').css({ height: big_gal_height, });
        in_footer_w = $('.in_footer').width();
        copy_right_w = $('.copy_right').width();    
        $('.copy_right').css({ left: ((in_footer_w/2)-(copy_right_w/2)), });
        in_move_box_3_w = $('.in_move_box_3_w').width();
        $('.in_move_box_3').css({ width: in_move_box_3_w, });
        h_scri_img_w = $('.h_scri_title').width();
        $('.h_scri_bg').css({ width: h_scri_img_w, });
        news_width = $('.news_con').width();


        if (ww > 900) {
            $('.news_con').css({ height: news_width * 1.08, });
            
            $('.left_1>div.news_img>a>img.news_small_img').attr('src', 'img/pc/new_1.png');
            $('.left_2>div.news_img>a>img.news_small_img').attr('src', 'img/pc/new_3.png');
            $('.left_3>div.news_img>a>img.news_small_img').attr('src', 'img/pc/new_5.png');
            $('.left_4>div.news_img>a>img.news_small_img').attr('src', 'img/pc/new_7.png');
            
            $('.right_1>div.news_img>a>img.news_big_img').attr('src', 'img/pc/new_2.png');
            $('.right_2>div.news_img>a>img.news_big_img').attr('src', 'img/pc/new_4.png');
            $('.right_3>div.news_img>a>img.news_big_img').attr('src', 'img/pc/new_6.png');
            $('.right_4>div.news_img>a>img.news_big_img').attr('src', 'img/pc/new_8.png');
            
            $('.left_2').after($('.right_2'));
            $('.left_4').after($('.right_4'));
            
            $('.gal_1').attr('src', 'img/pc/gal_1.png');
            $('.gal_2').attr('src', 'img/pc/gal_2.png');
            $('.gal_3').attr('src', 'img/pc/gal_3.png');
            $('.gal_4').attr('src', 'img/pc/gal_4.png');

        }else if(ww < 900){
            $('.news_con').css({ height: news_width * 1.55, });

            $('.left_1>div.news_img>a>img.news_small_img').attr('src', 'img/tab/news_1.png');
            $('.left_2>div.news_img>a>img.news_small_img').attr('src', 'img/tab/news_3.png');
            $('.left_3>div.news_img>a>img.news_small_img').attr('src', 'img/tab/news_5.png');
            $('.left_4>div.news_img>a>img.news_small_img').attr('src', 'img/tab/news_7.png');
            
            $('.right_1>div.news_img>a>img.news_big_img').attr('src', 'img/tab/news_2.png');
            $('.right_2>div.news_img>a>img.news_big_img').attr('src', 'img/tab/news_4.png');
            $('.right_3>div.news_img>a>img.news_big_img').attr('src', 'img/tab/news_6.png');
            $('.right_4>div.news_img>a>img.news_big_img').attr('src', 'img/tab/news_8.png');
            
            $('.left_2').before($('.right_2'));
            $('.left_4').before($('.right_4'));
            
            $('.gal_1').attr('src', 'img/tab/gal_1.png');
            $('.gal_2').attr('src', 'img/tab/gal_2.png');
            $('.gal_3').attr('src', 'img/tab/gal_3.png');
            $('.gal_4').attr('src', 'img/tab/gal_4.png');
        
        }
        
    })
    
    /* jquery circle progress : https://gahyun-web-diary.tistory.com/152 */
    /* 사이클 활성화 */
    let cir_event = function(){
        $('.pa_active').circleProgress({
        startAngle: -Math.PI/2,
        size: 40,
        animate: true,
        reverse: true,
        thickness: 4,
        lineCap: 'round',
        fill: {color: 'rgba(255, 255, 255, 0)'},
        animation : {
            duration: 5000,  
        },
        emptyFill: "rgba(255, 255, 255, 1)",
        animationStartValue: 1.0,
        });
        
    };
    /* cir 초기화 */
    let init_cir = function(){
        $('.pa_cir').circleProgress({
        startAngle: -Math.PI/2,
        size: 40,
        animate: false,
        reverse: true,
        thickness: 4,
        lineCap: 'round',
        fill: {color: 'rgba(255, 255, 255, 0)'},
        emptyFill: "rgba(255, 255, 255, 0)",
        animationStartValue: 1.0,
        });
    };
    
    cir_event();
    
    let cir_click_event = function(){
        $('.pa_cir').removeClass('pa_active');
        init_cir();
        $('.pa_cir').eq(data_pag).addClass('pa_active');
        cir_event();
        
        $('.inner_con, .bg_box>li').removeClass('sec_active');
        $('.inner_con').eq(data_pag).addClass('sec_active');
        $('.bg_box>li').eq(data_pag).addClass('sec_active');
    }
    
    let data_pag = 0;
    /* setInterval */
    let sec_1_change = setInterval(function(){
        
        data_pag++;
        if(data_pag > 2)
            data_pag = 0;
        
        cir_click_event();
        
    }, 5000);
        
    $('.pagnation>div.pa_cir').each(function(index){
        $(this).attr('data-pag', index);
    }).click(function(){
        clearInterval(sec_1_change);
        data_pag = $(this).attr('data-pag');
        cir_click_event();
        sec_1_change = setInterval(function(){
            data_pag++;
            if(data_pag > 2)
                data_pag = 0;
            cir_click_event();
        }, 5000);
    });
    
    /* 마우스 휠 */
    /* DOM은 사파리를 위해 넣어둔다*/
    /* 중복 방지를 위해 event_scroll을 넣음 */
    let event_scroll = false;
    let scrT = $('html, body').scrollTop();
    let sec_1_top = $(window).scrollTop();
    let wheel_evnet = (wheel_height) => {$('html, body').on('mousewheel DOMMouseScroll', function(e){
            /* originalEvent는 사파리를 위해*/
            const E = e.originalEvent;
            delta = 0;
            if(E.detail){
                delta = E.detail * -40;
            }else{
                delta = E.wheelDelta;
            }
            sec_1_top = $(window).scrollTop();
            $(window).resize(function(){
                ww = $(window).width();
            });
            /* 마우스 휠을 아래로 내렸을 경우 */
            if(delta < 0 && !event_scroll && scrT >= 0 && sec_1_top < 100 && ww > 900){
                event_scroll = true;
                $('html, body').stop().animate({
                    scrollTop: $('.sec_1_sur').offset().top, 
                }, 500, function(){
                    event_scroll = false;
                });
            }
            if(delta > 0 && !event_scroll && sec_1_top >= (wheel_height-100) && sec_1_top < wheel_height+100 && ww > 900){
                event_scroll = true;
                $('html, body').stop().animate({
                    scrollTop: $('.sec_1_inner').offset().top, 
                }, 500, function(){
                    event_scroll = false;
                });
            }
        });
    }
    
    wheel_evnet(wheel_height);
    
    /* 스크롤 탑에 따른 이벤트 */
    
    
    $(window).stop().scroll(function(){
        scrT = $('html, body').scrollTop();
        
        /* section_1 shadow_box */
//        if(scrT > 300 && scrT < 900){
//            $('.shadow_box').css({ opacity: (1-(scrT/1000))});
//        }else if(scrT < 300){
//            $('.shadow_box').css({ opacity: 1});
//        }else if(scrT > 900){
//            $('.shadow_box').css({ opacity: 0});
//        }
        let sec_2_height = $('.section_2').height();
        $(window).resize(function(){
            ww = $(window).width();
            wh = $(window).height();
            sec_2_height = $('.section_2').height();
        });
        /* section_1 pagnation, sec_scroll */
        if(scrT >= wh){
            $('.pagnation').css({ position: 'absolute', top: '140%', });
            $('div.sec_scroll').css({ position: 'absolute', left: ((ww/2)-adrr_icon/2), });
        }else if(scrT < wh){
            $('.pagnation').css({ position: 'fixed', top: '40%', });
            $('div.sec_scroll').css({ position: 'fixed', left: ((ww/2)-adrr_icon/2), });
        }
        
        
        /* section_2 banner */
        if(scrT >= ((wh*2)+100) && scrT <= (((wh*2)+100 + sec_2_height)*0.89)){
            $('.banner_box').css({ position: 'fixed', top: '40%', });
        }else if(scrT > (((wh*2)+100 + sec_2_height)*0.89)){
            $('.banner_box').css({ position: 'absolute', top: '88%', });
        }else if(scrT < ((wh*2)+100)){
            $('.banner_box').css({ position: 'absolute', top: '12%', });
        }
        
    });
    
    /* 이벤트 버튼 활성화 */
    let data_event = 0;
    let event_w1 = $('.img_1').width();
    let event_w2 = $('.img_2').width();
    
    $(window).resize(function(){
        event_w1 = $('.img_1').width();
        event_w2 = $('.img_2').width();
    })
    
    $('.prev_btn').click(function(){
        $('.big_event').css({
            left : -event_w1,
        });
        $('.big_event').stop().animate({
            left: 0,
        }, 1000).find('.img_1:last').prependTo('.big_event');
        $('.event_2').css({
            left : -event_w2,
        });
        $('.event_2').stop().animate({
            left: 0,
        }, 1000).find('.img_2:last').prependTo('.event_2');
        $('.event_3').css({
            left : -event_w2,
        });
        $('.event_3').stop().animate({
            left: 0,
        }, 1000).find('.img_3:last').prependTo('.event_3');
    });
    $('.next_btn').click(function(){
        $('.big_event').stop().animate({ 
            left: -event_w1
        }, 1000, function(){
                $('.event_1').css({ 
                    left: 0,
                }).find('.img_1:first').appendTo('.event_1')});
        $('.event_2').stop().animate({ left: -event_w2}, 1000, function(){
                $('.event_2').css({ left: 0})
                    .find('.img_2:first').appendTo('.event_2')});
        $('.event_3').stop().animate({ left: -event_w2}, 1000, function(){
                $('.event_3').css({ left: 0})
                    .find('.img_3:first').appendTo('.event_3')});
    });
    
    /* family & global site */
    let fami_cnt = 0;
    let fami_btn_text = $('.fami_btn').html();
    $('.fami_btn').click(function(){
        
        if(fami_cnt == 0){
            $('.web_box').slideDown(500);
            $('.fami_btn').html(fami_btn_text.replaceAll('▼', '▲'));
            fami_cnt++;
        }else if(fami_cnt == 1){
            $('.web_box').slideUp(500);
            $('.fami_btn').html(fami_btn_text.replaceAll('▲', '▼'));
            fami_cnt--;
        }
        
    });
    
    /* hidden menu */
    
    let scl_direc = 0;
    $('.ham').click(function(){
        
        scl_direc = $(window).scrollTop();
        $('.hidden_menu').animate({ height: 750, }); 
        setTimeout(function(){
            $('.wrap').addClass('ham_open');
            $('.header').css({ position: 'absolute', });
            window.scrollTo(0, 0);
        }, 500);
    });
    
    $('.close_btn').click(function(){
        $('.hidden_menu').animate({ height: 0, });
        $('.wrap').removeClass('ham_open');
        $('.header').css({ position: 'fixed', });
        window.scrollTo(0, scl_direc);

    });
    
    let sur_cnt = 0;
    $('.surch').click(function(){
        
        if(sur_cnt == 0){
            $('.hidden_sur').animate({ height: 50, });
            sur_cnt++;
        }else{
            $('.hidden_sur').animate({ height: 0, });
            sur_cnt--;
        }
        
    });
    
    /* news 부분 more read*/
    
    let news_box_h = ($('.left_1').height()+20) * 2;
    
    

    $(window).resize(() => {
        news_box_h = ($('.left_1').height()+20) * 2;
        $('.news_box').css({ height: (news_box_h), });
    });
    
    $('.news_box').css({ height: (news_box_h), });

    
    let news_cnt = 0;
    $('.more_text').click(()=>{
        
        if(news_cnt == 0){
            news_cnt++;
            $('.news_box').animate({ height: (news_box_h*2), });
            $('.more_text').html('닫기');
        }else if(news_cnt == 1){
            news_cnt--;
            $('.news_box').animate({ height: news_box_h, })
            $('.more_text').html('더 알아보기');
        }
        
    });
    
});
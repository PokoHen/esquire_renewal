$(document).ready(function(){
    
    let modeChange = document.documentElement.getAttribute('data-theme');
    
    let sns_logo = new Array();
        
    $('.sns_logo>img').each(function(index){
        sns_logo.push($(this).attr('src'));
    });
    
//    
//    for(i = 0; i < sns_logo.length; i++){
//        console.log(sns_logo[i].replaceAll(".", "_dark."));
//        console.log(sns_logo[i]);
//    }


    $('.mode_box').click(function(){
        
        if(modeChange == 'daymode'){
            document.documentElement.setAttribute('data-theme', 'darkmode');
            
            $('.h_logo_img, .footer_logo').attr('src', 'img/common/esquire_white.png');
            $('.hidden_logo_img').attr('src', 'img/common/esquire_white.png');
            
            $('.mode_con').html('darkmode');
            $('.mode_logo').animate({ opacity: 0, }).attr('src', 'img/common/moon.png').animate({ opacity: 1, });
            
            $('.h_sur').attr('src', 'img/common/sur_dark.png');
            $('.sursc_logo').attr('src', 'img/common/suvscribe_dark.png');
            $('.follow_logo').attr('src', 'img/common/followme_dark.png');
            $('.follow_img').attr('src', 'img/pc/follow_dark.png');
            
            for(i = 0; i < sns_logo.length; i++){
                $('.sns_logo>a>img').eq(i).attr('src',sns_logo[i].replaceAll(".", "_dark."));
            }   
            
            
        }else if(modeChange == 'darkmode'){
            document.documentElement.setAttribute('data-theme', 'daymode');
            
            $('.h_logo_img').attr('src', 'img/common/esquire_black.png');
            $('.hidden_logo_img').attr('src', 'img/common/esquire_black.png');
            $('.mode_con').html('daymode');
            $('.mode_logo').animate({ opacity: 0, }).attr('src', 'img/common/sun.png').animate({ opacity: 1, });
            
            $('.h_sur').attr('src', 'img/common/sur.png');
            $('.sursc_logo').attr('src', 'img/common/suvscribe.png');
            $('.follow_logo').attr('src', 'img/common/followme.png');
            $('.follow_img').attr('src', 'img/pc/follow_day.png');
            
            $('.footer_logo').attr('src', 'img/common/footer_logo_day.png');
            
            for(i = 0; i < sns_logo.length; i++){
                $('.sns_logo>a>img').eq(i).attr('src',sns_logo[i]);
            }   
            
        }
        
        modeChange = document.documentElement.getAttribute('data-theme');
        
    });
    
}); //end
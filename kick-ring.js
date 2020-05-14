jQuery(function(){
  jQuery('a[href^=#]').click(function(){
    var speed = 700;
    var href= jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    jQuery("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  jQuery('.menu-trigger').on('click',function(){
    if(jQuery(this).hasClass('active')){
      jQuery(this).removeClass('active');
      jQuery('main').removeClass('open');
      jQuery('nav').removeClass('open');
      jQuery('.overlay').removeClass('open');
    } else {
      jQuery(this).addClass('active');
      jQuery('main').addClass('open');
      jQuery('nav').addClass('open');
      jQuery('.overlay').addClass('open');
    }
  });
  jQuery('.overlay').on('click',function(){
    if(jQuery(this).hasClass('open')){
      jQuery(this).removeClass('open');
      jQuery('.menu-trigger').removeClass('active');
      jQuery('main').removeClass('open');
      jQuery('nav').removeClass('open');
    }
  });
  jQuery('.sp-nav nav').on('click',function(){
    if(jQuery('.overlay').hasClass('open')){
      jQuery('.overlay').removeClass('open');
      jQuery('.menu-trigger').removeClass('active');
      jQuery('main').removeClass('open');
      jQuery('nav').removeClass('open');
    }
  });
  jQuery('.sp-nav-item a').on('click',function(){
    if(jQuery('.overlay').hasClass('open')){
      jQuery('.overlay').removeClass('open');
      jQuery('.menu-trigger').removeClass('active');
      jQuery('main').removeClass('open');
      jQuery('nav').removeClass('open');
    }
  });

  jQuery('.2018').click(function(){
    if(jQuery('.2018-cont').css('display')=='none'){
      jQuery('.2018-cont').slideDown(600);
    } else {
      jQuery('.2018-cont').slideUp(600);
    }
  });
  jQuery('.2017').click(function(){
    if(jQuery('.2017-cont').css('display')=='none'){
      jQuery('.2017-cont').slideDown(600);
    } else {
      jQuery('.2017-cont').slideUp(600);
    }
  });
  jQuery('.2016').click(function(){
    if(jQuery('.2016-cont').css('display')=='none'){
      jQuery('.2016-cont').slideDown(600);
    } else {
      jQuery('.2016-cont').slideUp(600);
    }
  });

});

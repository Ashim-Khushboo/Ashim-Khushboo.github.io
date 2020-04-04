/**
 * 
 */

    jQuery(document).ready(function() {
    
    
    jQuery(".bg1").click(function(){
        jQuery("#fullcolor").attr("href", "http://demo.oceanthemes.net/mentor/wp-content/themes/mentor/assets/colors/aqua.css");
    });
    
    jQuery(".bg2").click(function(){
        jQuery("#fullcolor").attr("href", "http://demo.oceanthemes.net/mentor/wp-content/themes/mentor/assets/colors/blue.css");
    });
    
    jQuery(".bg3").click(function(){
        jQuery("#fullcolor").attr("href", "http://demo.oceanthemes.net/mentor/wp-content/themes/mentor/assets/colors/green.css");
    });
    
    jQuery(".bg4").click(function(){
        jQuery("#fullcolor").attr("href", "http://demo.oceanthemes.net/mentor/wp-content/themes/mentor/assets/colors/grey.css");
    });
    
    jQuery(".bg5").click(function(){
        jQuery("#fullcolor").attr("href", "http://demo.oceanthemes.net/mentor/wp-content/themes/mentor/assets/colors/orange.css");
    });
    
    jQuery(".bg6").click(function(){
        jQuery("#fullcolor").attr("href", "http://demo.oceanthemes.net/mentor/wp-content/themes/mentor/assets/colors/pink.css");
    });
    
    jQuery(".bg7").click(function(){
        jQuery("#fullcolor").attr("href", "http://demo.oceanthemes.net/mentor/wp-content/themes/mentor/assets/colors/purple.css");
    });
    
    jQuery(".bg8").click(function(){
        jQuery("#fullcolor").attr("href", "http://demo.oceanthemes.net/mentor/wp-content/themes/mentor/assets/colors/red.css");
    });
    
    jQuery(".bg9").click(function(){
        jQuery("#fullcolor").attr("href", "http://demo.oceanthemes.net/mentor/wp-content/themes/mentor/assets/colors/yellow.css");
    });
    
    jQuery(".bg10").click(function(){
        jQuery("#fullcolor").attr("href", "http://demo.oceanthemes.net/mentor/wp-content/themes/mentor/assets/colors/lime.css");
    });
    
    
    
    jQuery(".custom-hide").hide();
    
    jQuery(".custom-close").click(function(){
        jQuery(this).hide();
        jQuery(".custom-show").show();
        jQuery('#switcher').animate({'left': '+=120px'},'medium');
    });
    

    jQuery(".custom-show").click(function(){
        jQuery(this).hide();
        jQuery(".custom-close").show();
        jQuery(this).parent().animate({'left': '-=120px'},'medium');
    });

    jQuery('#de-layout').on('change', function() {
        v = this.value
        if(v=='boxed'){
            jQuery("#colors").attr("href", "http://demo.oceanthemes.net/mentor/wp-content/themes/mentor/assets/css/boxed.css");
        }else if(v=='wide'){
            jQuery("#colors").attr("href", "");
        }
    });

    jQuery('#de-header').on('change', function() {
       
        h = this.value
        if(h=='h1'){
            jQuery(".head-layout").hide();
            jQuery(".h1-layout").show();
            jQuery(".heading").css('padding','0');
            jQuery(".heading").removeClass('heading2');
            jQuery(".vc_custom_1470286354621, .vc_custom_1471321830801 ").removeClass('paddingtop');
        }else if(h=='h2'){
            jQuery(".head-layout").hide();
            jQuery(".h2-layout").show();
            jQuery(".heading").css('padding','0');
            jQuery(".heading").removeClass('heading2');
            jQuery(".vc_custom_1470286354621, .vc_custom_1471321830801 ").removeClass('paddingtop');
        }else{
            jQuery(".head-layout").hide();
            jQuery(".h3-layout").show();
            jQuery(".heading").css('padding','100px 0 24px');
            jQuery(".heading").addClass('heading2');
            jQuery(".vc_custom_1470286354621, .vc_custom_1471321830801 ").addClass('paddingtop');

        }
        
    });

    jQuery('#de-header2').on('change', function() {
       
        h = this.value
        if(h=='h11'){
            jQuery("header").removeClass('header-sticky');
            jQuery("header").addClass('header-sticky');
        }else if(h=='h22'){
            jQuery("header").removeClass('header-sticky');
        }
        
    });

    jQuery('#de-footer').on('change', function() {
       
        f = this.value
        if(f=='f1'){
            jQuery(".f1-layout").show();
            jQuery(".f2-layout").hide();
        }else if(f=='f2'){
            jQuery(".f1-layout").hide();
            jQuery(".f2-layout").show();
        }
        
    });
    
    jQuery('#de-pattern li').click(function(){
        n = jQuery('#de-layout').val();
        if(n=="boxed"){
            className = jQuery(this).attr('class');
            jQuery('body').removeClass('p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12');
            jQuery('body').addClass(className);
        }else{
            alert('Please select boxed layout first.');
        }
            
    });

    });

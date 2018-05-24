<template>
  <div class="menu">
    <div class="launcher">
        <div class="button">    <i class="fa fa-th fa-2x"></i>

        </div>
        <div class="app-launcher" >
            <div class="apps">
                <ul class="first-set">
                    <li><router-link class="btn-floating blue btn-small" to="/"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Home">home</i></router-link></li>
                    <li><router-link class="btn-floating black btn-small" to="fundamentalsOfKnowledge"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Fundamentals of Knowledge">book</i></router-link></li>
                    <li><router-link class="btn-floating pink btn-small" to="studentAdvisementAndSurvival"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Student Advisement and Survival">account_balance</i></router-link></li>
                    <li><router-link class="btn-floating purple btn-small" to="ComputationalEnvironmentalScience"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Computional Environmental Science">gps_fixed</i></router-link></li>
                    <li><router-link class="btn-floating indigo btn-small" to="ComputationalFinanceAndEconomics"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Computational Finance and Economics">computer</i></router-link></li>
                    <li><router-link class="btn-floating cyan btn-small" to="OnEducation"><i class="small material-icons tooltipped" data-position="left" data-tooltip="On Education">school</i></router-link></li>
                    <li><router-link class="btn-floating teal btn-small" to="logicPhilosophyAndScience"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Logic, Philosophy And Science">settings_input_component</i></router-link></li>
                    <li><router-link class="btn-floating green btn-small" to="logicArtAndTheHumanities"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Logic, Art and Humanity">color_lens</i></router-link></li>
                    <li><router-link class="btn-floating lime btn-small" to="spirituality"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Spirituality">texture</i></router-link></li>
                    <li><router-link class="btn-floating yellow btn-small" to="EthicsLawAndJustice"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Logic, Law and Justice">gavel</i></router-link></li>
                    <li><router-link class="btn-floating amber btn-small" to="literature"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Literature">local_library</i></router-link></li>
                    <li><router-link class="btn-floating orange btn-small" to="business"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Business">business_center</i></router-link></li>
                    <li><router-link class="btn-floating brown btn-small" to="EssaysAndPoetry"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Essays and Poetry">border_color</i></router-link></li>
                    <li><router-link class="btn-floating grey btn-small" to="publicLectures"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Public Lectures">public</i></router-link></li>
                    <li><router-link class="btn-floating blue-grey btn-small" to="ContactMe"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Contact Me">contacts</i></router-link></li>
                    <li><router-link class="btn-floating deep-orange btn-small" to="aboutMe"><i class="small material-icons tooltipped" data-position="left" data-tooltip="About Me">account_circle</i></router-link></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
  
}

$(document).ready(function(){

      var scroll = false;
      var launcherMaxHeight = 396;
      var launcherMinHeight = 296;
      
      // Mousewheel event handler to detect whether user has scrolled over the container
      $('.apps').bind('mousewheel', function(e){
            if(e.originalEvent.wheelDelta /120 > 0) {
              // Scrolling up
            }
            else{
                // Scrolling down
                if(!scroll){
                    $(".second-set").show();
                    $('.apps').css({height: launcherMinHeight}).addClass('overflow');
                    scroll =true; 
                    $(this).scrollTop(e.originalEvent.wheelDelta);
                }
            }
        });
      
      // Scroll event to detect that scrollbar reached top of the container
      $('.apps').scroll(function(){
        var pos=$(this).scrollTop();
        if(pos == 0){
            scroll =false;
            $('.apps').css({height: launcherMaxHeight}).removeClass('overflow');
            $(".second-set").hide();
        }
      });
      
      // Click event handler to show more apps
      $('.apps .more').click(function(){
        $(".second-set").show();
        $(".apps").animate({ scrollTop: $('.apps')[0].scrollHeight}).css({height: 296}).addClass('overflow');
      });
      
      // Click event handler to toggle dropdown
      $(".button").click(function(event){
        event.stopPropagation();
        $(".app-launcher").toggle();
      });
      
      $(document).click(function() {
        //Hide the launcher if visible
        $('.app-launcher').hide();
        });
        
        // Prevent hiding on click inside app launcher
        $('.app-launcher').click(function(event){
            event.stopPropagation();
        });
  
});

// Resize event handler to maintain the max-height of the app launcher
$(window).resize(function(){
        $('.apps').css({maxHeight: $(window).height() - $('.apps').offset().top});
});
</script>

<style scoped>
body {
    font-family: 'Lato', Arial, sans-serif;
    background: #3DB3E3;
    color:white;
}

.launcher {
    position: fixed;
    text-align: center;
    color:red;
    left: 95%;
    top: 10%;
    z-index: 100;
}

.app-launcher {
    position: absolute;
    left: -466%;
    top: 130%;
}

.app-launcher::before {
    content: '';
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
    position: absolute;
    top: -9px;
    left: 50%;
    margin-left: -5px;
    z-index: 1;
}

.apps {
    position: relative;
    border: 1px solid #ccc;
    border-color: rgba(0,0,0,.2);
    box-shadow: 0 2px 10px rgb(0, 0, .2);
    -webkit-transition: height .2s ease-in-out;
    transition: height .2s ease-in-out;
    min-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    width: 320px;
    height: 396px;
    margin-bottom: 30px;
}

.launcher .button {
    cursor: pointer;
    width: 32px;
    margin: 0 auto;
}

.hide {
    display: none;
}

.apps ul {
    background: #fff;
    margin: 0;
    padding: 28px;
    width: 264px;
    overflow: hidden;
    list-style: none;
}

.apps ul li {
    float: left;
    height: 64px;
    width: 88px;
    color: black;
    padding: 18px 0;
    text-align: center;
}

.apps .more {
    line-height: 40px;
    text-align: center;
    display: block;
    width: 320px;
    background: #f5f5f5;
    cursor: pointer;
    height: 60px;
    overflow: hidden;
    position: absolute;
    text-decoration: none;
    color: #282828;
}

.apps.overflow .more {
    border-bottom: 1px solid #ebebeb;
    left: 28px;
    width: 264px;
    height: 60;
    cursor: default;
    height: 0;
    outline: none;
    overflow-x: hidden
}

.fa-facebook-square {
    color: #3b5998;
}

.fa-twitter-square {
    color: #00aced;
}

.fa-google-plus-square {
    color: #dd4b39;
}

.fa-youtube-square {
    color: #bb0000;
}

.fa-linkedin {
    color: #007bb6;
}

.fa-instagram {
    color: #517fa4;
}

.fa-pinterest {
    color: #cb2027;
}

.fa-tumblr-square {
    color: #32506d;
}

.fa-skype {
    color: #009EE5;
}

.fa-android {
    color: #99CC00;
}

.fa-dribbble {
    color:  #C35D9C;
}

.fa-html5 {
    color: #F65B1F;
}

.fa-css3 {
    color: #0070BA;
}

.fa-dropbox {
    color: #65B1ED;
}

.fa-windows {
    color: #1DAAE2;
}

.fa-linux {
    color: #DD4814;
}

.fa-apple {
    color:  #403F3F;
}

::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: rgba(0,0,0,.3);
    border: 5px solid transparent;
    border-radius: 10px;
    min-height: 20px;
    min-width: 20px;
    height: 5px;
    width: 5px;
}

::-webkit-scrollbar {
    height: 15px;
    width: 15px;
    background: white;
}

::-webkit-scrollbar-button {
    height: 0;
    width: 0;
}
</style>

<style>
a img{
  width:80px;
  height:80px;
}
.tsu h2{
  color:maroon;
}
</style>


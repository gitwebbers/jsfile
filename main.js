activeBlock = 'home';



function activateBlock(blockName) {

    if (activeBlock == blockName || blockName == 'home') {

        hideAll();

        document.getElementById('home1').style.display = "block";

        document.getElementById('home2').style.display = "block";

        activeBlock = 'home';

    } else if(activeBlock != blockName) {

        showBlock(blockName);

        activeBlock = blockName;

    }

}



function showBlock(id) {

    hideAll();

    document.getElementById(id).style.display = "block";

}



function hideAll() {

    document.getElementById('home1').style.display = "none";

    document.getElementById('home2').style.display = "none";

    document.getElementById('hotelInformation').style.display = "none";

    document.getElementById('language-flags').style.display = "none";

    document.getElementById('netflix-tag').style.display = "none";

    document.getElementById('information-block').style.display = "none";

    document.getElementById('news-block').style.display = "none";

    document.getElementById('service-block').style.display = "none";

    document.getElementById('mirroring-block').style.display = "none";

    document.getElementById('japan-trends-block').style.display = "none";

    document.getElementById('movie-episodes-block').style.display = "none";

    document.getElementById('video-block').style.display = "none";

    document.getElementById('map-block').style.display = "none";

    document.getElementById('nhk-news-block').style.display = "none";

    document.getElementById('us-market-block').style.display = "none";

}



function enterFullScreenMode() {

    if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {

        if (document.documentElement.requestFullScreen) {  

            document.documentElement.requestFullScreen();  

        } else if (document.documentElement.mozRequestFullScreen) {  

            document.documentElement.mozRequestFullScreen();  

        } else if (document.documentElement.webkitRequestFullScreen) {  

            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  

        }  

        document.getElementById('btn-fullscreen').style.backgroundImage = "url('./images/exit-fullscreen.png')";

    } else {  

        if (document.cancelFullScreen) {  

            document.cancelFullScreen();  

        } else if (document.mozCancelFullScreen) {  

            document.mozCancelFullScreen();  

        } else if (document.webkitCancelFullScreen) {  

            document.webkitCancelFullScreen();  

        }  

        document.getElementById('btn-fullscreen').style.backgroundImage = "url('./images/fullscreen.png')";

    } 

}



window.onload = function() {

    $("#content-1").load("content-1.html");

}



function showContentStyle2( blockName ) {

    document.getElementById('content-1').style.display = "none";

    document.getElementById('content-2').style.display = "block";

    $("#header2").load("header-2.html");

    switch(blockName) {

        case 'try-sample': 

            $("#index2-content").load("try-sample.html");

            break;

        case 'app-download': 

            $("#index2-content").load("app-download.html");

            break;

        case 'motion-picture': 

            $("#index2-content").load("motion-picture.html");

            break;

        case 'login': 

            $("#index2-content").load("login.html");

            break;

        case 'movie-selection': 

            $("#index2-content").load("movie-selection.html");

            break;

        case 'movie-watch': 

            $("#index2-content").load("movie-watch.html");

            break;

        case 'senryou': 

            $("#index2-content").load("senryou.html");

            break;

        default: break;

    }

}



function showContentStyle1() {

    document.getElementById('content-1').style.display = "block";

    document.getElementById('content-2').style.display = "none";

}

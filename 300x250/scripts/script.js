//Caching the element IDs
var Banner = Banner || {}, addListeners, exitHandler, mainClick = document.getElementById('main-click'), cta = document.getElementById('cta'), userAction = document.getElementById('user-action') ;

Banner.init = function(){
    //Add the listeners for the clicks, and start the animation
    addListeners();
    Banner.animate();       
};

Banner.animate = function(){
    var d = 2; //delay in seconds before the animation should start.

    TweenLite.to('#beach', 2.5, {x:180, opacity:1, delay: d});
    TweenLite.from('#copy-1', 1.5, {x:300,delay: d+0.5});
    TweenLite.to('#copy-1', 1.5, {opacity:1, delay: d+0.5});

    TweenLite.to(['#beach','#copy-1'], 0.5, {opacity:0, delay: d+5});

    d = d + 5;

    TweenLite.to('#mountain', 2.5, {x:-180, opacity:1, delay: d});
    TweenLite.from('#copy-2', 1.5, {x:-300,delay: d+0.5});
    TweenLite.to('#copy-2', 1.5, {opacity:1, delay: d+0.5});

    TweenLite.to(['#mountain','#copy-2'], 0.5, {opacity:0, delay: d+5});

    d = d + 5;

    TweenLite.to(['#orangutan','#copy-3'], 1, {alpha:1, delay: d});
    TweenLite.to(['#cta', '#user-action'], 1, {autoAlpha:1, delay: d+1});

};

//Add Event Listeners, should probably put this in the Index.html, so clicks can be tracked even if the animation doesn't load.
addListeners = function() {
    mainClick.addEventListener('click', exitHandler, false);
    cta.addEventListener('click', exitHandler, false);
    userAction.addEventListener('click', exitHandler, false);
};

exitHandler = function(e) {
    var exit = e.target.id;
    switch(exit){
        case 'backup':
            EB.clickthrough('BACKUP_CLICKTHROUGH');
        break;
        case 'cta':
            EB.clickthrough('CTA_CLICKTHROUGH');
        break;
        case 'user-action':
            EB.userActionCounter('USER_ACTION_COUNTER');
        break;
        case 'main-click':
        default:
            EB.clickthrough('DEFAULT_CLICKTHROUGH');
        break;
    }
};
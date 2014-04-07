/*
==============================================
CSS3 Effects 'N Stuff
==============================================

Made by Amechi Egbe

http://amechi101.github.io/css3effects/

Questions, comments, concerns, love letters:
amechiegbe@gmail.com
==============================================
*/

"use strict";


$(function() {
    //Modernizer Test
    Modernizr.addTest("keyframe", Modernizr.testAllProps('animationName'));
    Modernizr.prefixed('requestAnimationFrame', window, true);

    // global functions
    var dash = $('#Dashboard');
    var dashBtn = $('#dashClick');
    var clicked = true;

    dashBtn.on('click',function() {

        if(clicked == true) {
            dash.animate({"top":0}, 400, 'linear', function () {
                console.log('Up');
            });
            clicked = false;
        } else {
            dash.animate({"top":600}, 400, function () {
                console.log('Down');
            });
            clicked = true;
        }
    });
    
    //make it height of document
    
});
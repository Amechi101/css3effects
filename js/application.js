/*
==============================================
CSS3 Effects 'N Stuff
==============================================

Made by Amechi Egbe

www..com/animations/

Questions, comments, concerns, love letters:
amechiegbe@gmail.com
==============================================
*/

"use strict";

$(function() {
    // global functions
    var dash = $('#Dashboard');
    var dashBtn = $('#dashClick');
    var clicked = false;

    var state = dash.css({"top":600});

    dashBtn.on('click',function(e) {
        e.preventDefault();

        if(clicked === true) {
            clicked = false;
            dash.animate({"top":0});
        } 

        else {
            clicked = true;
            dash.animate({"top":600});
        }
    });
    
    //make it height of document
    dash.height($(document).height()); 
});
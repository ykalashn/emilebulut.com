// Navigation

$(function(){
    $("#nav-placeholder").load("../nav.html");
});

// Footer

$(document).ready(function(){
$( "#footer-placeholder" ).load( "../footer.html" );
});

// Google Analytics

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-178238208-1');

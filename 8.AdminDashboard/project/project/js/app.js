$(".show-bar").click(function(){
    $(".aside").animate({marginLeft:0})
});

$(".hide-bar").click(function(){
    $(".aside").animate({marginLeft:"-100%"})
});
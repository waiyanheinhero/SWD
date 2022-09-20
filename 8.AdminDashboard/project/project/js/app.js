$(".show-bar").click(function(){
    $(".aside").animate({marginLeft:0})
});

$(".hide-bar").click(function(){
    $(".aside").animate({marginLeft:"-100%"})
});

function go(url){
    setTimeout(function(){
        location.href = `${url}`
    },500)
    
}
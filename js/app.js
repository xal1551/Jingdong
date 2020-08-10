// 回到顶部
$(".elevator>.backtop").click(function(){
    $("html").scrollTop(0);
})
$(window).scroll(function(){
    var scrollTop = $("html").scrollTop();
    // console.log(scrollTop);
    if(scrollTop>680){
        $(".elevator").addClass("elevator-scroll");
        // console.log(scrollTop);
    }else{
        $(".elevator").removeClass("elevator-scroll");
    }
    if(scrollTop>680&&scrollTop<980){
        $(".elevator-list>li").eq(0).children().addClass("active");
        $(".elevator-list>li").eq(0).siblings().children().removeClass("active");
    }else if(scrollTop>980&&scrollTop<1580){
        $(".elevator-list>li").eq(1).children().addClass("active");
        $(".elevator-list>li").eq(1).siblings().children().removeClass("active");
    }else if(scrollTop>1580&&scrollTop<2380){
        $(".elevator-list>li").eq(2).children().addClass("active");
        $(".elevator-list>li").eq(2).siblings().children().removeClass("active");
    }else if(scrollTop>2380){
        $(".elevator-list>li").eq(3).children().addClass("active");
        $(".elevator-list>li").eq(3).siblings().children().removeClass("active");
    }
})
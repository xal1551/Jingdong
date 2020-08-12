// 中间大的轮播图
var timer;
var index;
function autoChange(){
    var $oldImgCurr = $(".slider-list>.current");
    index = $oldImgCurr.index();
    (index>= $(".slider-list>li").size()-1) ? index=0 : ++index;
    // if(index>= $(".slider-list>li").size()-1){
    //     index = 0;
    // }else{
    //     ++index;
    // }

    // console.log("old------"+oldIndex);
    // console.log("new------"+newIndex);
    var $newImgCurr = $(".slider-list>li").eq(index);
    $oldImgCurr.removeClass("current");
    $newImgCurr.addClass("current");

    var $newChoiceCurr = $(".list-choose>li").eq(index);
    $newChoiceCurr.siblings().removeClass("current");
    $newChoiceCurr.addClass("current");
}
function autoPlay(){
    timer = setInterval(autoChange,3000);
}
function stopPlay(){
    clearInterval(timer);
}
function choiceHover() {
    stopPlay();
    index = $(this).index();
    $(this).siblings().removeClass("current");
    $(this).addClass("current");
    var $newImgCurr = $(".slider-list>li").eq(index);
    $newImgCurr.siblings().removeClass("current");
    $newImgCurr.addClass("current");
    autoPlay();
}
function centerPrev() {
    stopPlay();
    index = $(".slider-list>.current").index();
    index==0 ? (index=$(".slider-list>li").size()-1) :--index;
    // if(index == 0){
    //     index = $(".slider-list>li").size()-1;
    // }else{
    //     index --;
    // }
    var $newImgCurr = $(".slider-list>li").eq(index);
    $newImgCurr.siblings().removeClass("current");
    $newImgCurr.addClass("current");

    var $newChoiceCurr = $(".list-choose>li").eq(index);
    $newChoiceCurr.siblings().removeClass("current");
    $newChoiceCurr.addClass("current");
    autoPlay();

}
function centerNext() {
    stopPlay();
    autoChange();
    autoPlay();
}

autoPlay();
$(".list-choose>li").hover(choiceHover,function() {});
$(".focus-J-center>.btn-prev").click(centerPrev);
$(".focus-J-center>.btn-next").click(centerNext);
$(".slider-list>li").hover(function(){
    stopPlay();
},function(){
    autoPlay();
});

// 中间右侧图片列表轮播图
var sideIndex;
var sideTimer;
function autoChange2(){
    var $oldCurrImgL = $(".img-wrapper>.current");
    sideIndex = $oldCurrImgL.index();
    (sideIndex==$(".img-wrapper>.img-list").size()-1) ? sideIndex=0 : ++sideIndex;
    var $newCurrImgL = $(".img-wrapper>.img-list").eq(sideIndex);
    $oldCurrImgL.removeClass("current");
    $newCurrImgL.addClass("current");
}
function autoPlay2(){
    sideTimer = setInterval(autoChange2, 5000);
}
function stopPlay2(){
    clearInterval(sideTimer);
}
function sidePrev(){
    stopPlay2();
    var $oldCurrImgL = $(".img-wrapper>.current");
    sideIndex = $oldCurrImgL.index();
    sideIndex==0 ? (sideIndex=$(".img-wrapper>.img-list").size()-1) : --sideIndex;
    var $newCurrImgL = $(".img-wrapper>.img-list").eq(sideIndex);
    $oldCurrImgL.removeClass("current");
    $newCurrImgL.addClass("current");
    autoPlay2();
}
function sideNext(){
    stopPlay2();
    autoChange2();
    autoPlay2();
}
// console.log($(".img-wrapper>.current>li").html());
// $(".img-wrapper>.current>li").hover(function(){
//     console.log($(this).index());
//     $(this).children().children().fadeTo(100, 0.1);
//     // $(this).fadeTo(100, 0.5);
//     // $(this).css({opacity:0.5})
// },function(){
//     $(this).children().children().fadeTo(100, 1);
// });
autoPlay2();
$(".focus-J-side>.btn-prev").click(sidePrev);
$(".focus-J-side>.btn-next").click(sideNext);
$(".img-wrapper>.img-list").hover(function(){
    stopPlay2();
},function(){
    autoPlay2();
});

// 右侧服务动画

// 话费
var servIndexHf;
var positionLeftHf;
$(".huafei-tab>li").hover(function(){
    servIndexHf = $(this).index();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    positionLeftHf = servIndexHf*175;
    $(".huafei-tab-content").css({left:-positionLeftHf});

},function(){

})

// 机票
var servIndexJp;
var positionLeftJp;
$(".jipiao-tab>li").hover(function(){
    servIndexJp = $(this).index();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    positionLeftJp = servIndexJp*175;
    $(".jipiao-tab-content").css({left:-positionLeftJp})
},function(){

})

// 酒店
var servIndexJd;
var positionLeftJd;
$(".jiudian-tab>li").hover(function(){
    servIndexJd = $(this).index();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    positionLeftJd = servIndexJd*175;
    $(".jiudian-tab-content").css({left:-positionLeftJd})
},function(){

})

// 游戏
var servIndexYx;
var positionLeftYx;
$(".youxi-tab>li").hover(function(){
    servIndexYx = $(this).index();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    positionLeftYx = servIndexYx*175;
    $(".youxi-tab-content").css({left:-positionLeftYx})
},function(){

})

//
var tabIndex;
function flyIn(){
    $(".service-entry").css({top:-30}).css({opacity: 0});
    $(".serv-tab-head>.tab-head1").css("display", "flex");
    $(".service-content-wrapper").css({top:32});
    tabIndex = $(this).index();
    // console.log(tabIndex);
    // tab头部
    $(".tab-head1>span").eq(tabIndex).siblings().removeClass("show");
    $(".tab-head1>span").eq(tabIndex).addClass("show");

    // tab内容
    $(".service-content").css({left:-tabIndex*190})
}
function flyIn2(){
    $(".service-entry").css({top:-85}).css({opacity: 0});
    $(".serv-tab-head>.tab-head2").css("display", "flex");
    $(".service-content-wrapper").css({top:32});
    tabIndex = $(this).index();
    // console.log(tabIndex);
    // tab头部
    $(".tab-head2>span").eq(tabIndex).siblings().removeClass("show");
    $(".tab-head2>span").eq(tabIndex).addClass("show");

    // tab内容
    $(".service-content").css({left:-tabIndex*190})
}
function tabChange(){
    var tIndex = $(this).index();
    console.log(tIndex);
    $(this).siblings().removeClass("show");
    $(this).addClass("show");

    $(".service-content").css({left:-tIndex*190})
}
function tabChange2(){
    var tIndex = $(this).index();
    console.log(tIndex);
    $(this).siblings().removeClass("show");
    $(this).addClass("show");

    if(tIndex==0){
        tIndex =3;
    }
    $(".service-content").css({left:-tIndex*190})
}
function flyOut(){
    $(".service-entry").css({opacity: 1}).css({top: 0});
    $(".serv-tab-head>div").css("display", "none");
    $(".service-content-wrapper").css({top: 238});
}
$(".tab-head1>span").hover(tabChange,function(){});
$(".tab-head2>span").hover(tabChange2,function(){});

$(".serv-list>.huafei").hover(flyIn,function(){});
$(".serv-list>.jipiao").hover(flyIn,function(){});
$(".serv-list>.jiudian").hover(flyIn,function(){});
$(".serv-list>.youxi").hover(flyIn2,function(){});

// 点x恢复原状
$(".close-cont").click(flyOut);

// 滚动到一定高度后
$(window).scroll(function(){
    var scrollTop = $("html").scrollTop();
    if(scrollTop>680){
        $(".search-wrapper").addClass("search-wrapper-scroll");
    }else{
        $(".search-wrapper").removeClass("search-wrapper-scroll");
    }
})



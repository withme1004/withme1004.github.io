$(function () {
    $(".fotbtn").css("opacity","0");
    $(window).scroll(function(){
        let ht = $(this).scrollTop();
        console.log(ht);
        if (ht >= 300) {
            $(".fotbtn").css("opacity","1");
        }
        else {
            $(".fotbtn").css("opacity","0")
        }
    });
    $(".fotbtn").click (function (){
        $(window).scrollTop(0); 
    })
    let yout = $(".ytbimg li").eq(0).find("img");
    yout.css("cursor","pointer");
    $(yout).click (function () {
        $(".youtube").css("display","block");
    })
    $(".xbtn").click (function (){
        $(".youtube").css("display","none");
    })
});
$(function(){
    $(".material-symbols-outlined").eq(0).click (function(){
        $(".spage").css("display","block");
    })
    $(".spaimg").click (function () {
        $(".spage").css("display","none");
    })
})
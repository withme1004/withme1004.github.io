$(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
    margin: 0,
    dots: true,
    nav: true,
    items: 1,
    // autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    });
});
let content = document.getElementsByClassName("tabcontent");
        let btn = document.getElementsByClassName("tablink");
        function tab(j) {
            for(let i =0; i < btn.length; i++){
            content[i].style.display = "none";
            content[j].style.display = "block";
            }
        }
        tab(0);
$(function(){
    $(".tabcontent:nth-child(2)").css("display","none");
    $(".xbutton").click(function(){
        $(".submenu_warp").css("display","none");
    });
    $(".submenuopen").click(function(){
        $(".submenu_warp").css("display","block");
    })
});

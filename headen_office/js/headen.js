let content = document.getElementsByClassName("best_content");
        let btn = document.getElementsByClassName("tablink");
        function tab(j) {
            for(let i =0; i < btn.length; i++){
            content[i].style.display = "none";
            content[j].style.display = "block";
            }
        }
        tab(0);
        
$(function(){
    $(".best_content:first").siblings().css("display","none");
    $(".office_content:first").siblings().css("display","none");
    $(".executive_content:first").siblings().css("display","none");
    $(".training_content:first").siblings().css("display","none");
    $("#click_menu").css("display","block");
});

let Content1 = document.getElementsByClassName("office_content");
let Btn1 = document.getElementsByClassName("office_link");
function office(one){
    for(let i = 0; i < Btn1.length; i++) {
    Content1[i].style.display = "none";
    Content1[one].style.display = "block";
    Btn1[i].style.color = "black";
    Btn1[one].style.color = "#FC7C04";
    };
    }
office(0);

let Content2 = document.getElementsByClassName("executive_content");
let Btn2 = document.getElementsByClassName("executive_link");
function executive(two){
    for(let i = 0; i < Btn2.length; i++) {
        Content2[i].style.display = "none";
        Content2[two].style.display = "block";
        Btn2[i].style.color = "black";
        Btn2[two].style.color = "#2466ff";
        };
        }
executive(0);

let Content3 = document.getElementsByClassName("training_content");
let Btn3 = document.getElementsByClassName("training_link");
function training(three){
    for(let i = 0; i < Btn3.length; i++) {
        Content3[i].style.display = "none";
        Content3[three].style.display = "block";
        Btn3[i].style.color = "black";
        Btn3[three].style.color = "#008e17";
        };
        }
training(0);



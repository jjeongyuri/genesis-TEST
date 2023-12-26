$(function(){
    // 함수 실행
    Toggle();
    CarShow();
    Cgallery();

    // toggle
    function Toggle(){
        $("#iconedown").on("click",function(){
            $(".toggle").show();
            $("#iconeup").show();
            $("#iconedown").hide();
        })
        $("#iconeup").on("click",function(){
            $(".toggle").hide();
            $("#iconeup").hide();
            $("#iconedown").show();
        })
    };
    //
    
    // box03 자동차 갤러리 움직이기
    function CarShow(){
        // 기본정리
        let allLiWidth = $(".show>.all>li").outerWidth(true);
        $(".show>.all>li:last").prependTo(".show>.all");
        $(".show>.all").css("marginLeft",'-'+allLiWidth+'px');

        // prev클릭시 이동
        $(".prevTo").on("click",function(e){
            $(".show>.all").animate({marginLeft : '-='+allLiWidth+'px'},function(){
                $(".show>.all>li:first").appendTo(".show>.all");
                $(".show>.all").css("margin-left",'-'+allLiWidth+'px')
            })
        });

        // next클릭시 이동
        $(".nextTo").on("click",function(e){
            $(".show>.all").animate({marginLeft : '+='+allLiWidth+'px'},function(){
                $(".show>.all>li:last").prependTo(".show>.all");
                $(".show>.all").css("margin-left",'-'+allLiWidth+'px')
            })
        });
    }
    // 

    // box06갤러리 클릭시 보이기/이동
    function Cgallery(){
        $("#show>#all>ul>li>img").on("click",function(e){
            let pic = $(this).attr("src");
            $("#gallery>figure>img").attr("src",pic);
        })
    };

    let showWidth = $("#show>#all>ul>li").outerWidth(true);
    $("#show>#all>ul>li:last").prependTo("#show>#all>ul");
    $("#show>#all").css("marginLeft",'-'+showWidth+'px');

    $(".prev").on("click",function(){
        $("#show>#all").animate({marginLeft:'-='+showWidth+'px'},function(){
            $("#show>#all>ul>li:first").appendTo("#show>#all>ul");
            $("#show>#all").css("marginLeft","-"+showWidth+"px");
        })
    });
    $(".next").on("click",function(){
        $("#show>#all").animate({marginLeft:'+='+showWidth+'px'},function(){
            $("#show>#all>ul>li:last").prependTo("#show>#all>ul");
            $("#show>#all").css("marginLeft","-"+showWidth+"px");
        })
    });


    // box08 tap메뉴
    $(".qna>dl>dt:first").addClass("selected");
    $(".qna>dl>dd:not(:first)").hide();
    $('.qna>dl>dt').on('click',function(){
        let display = $(this).next('dd').css('display');
        if(display === "none"){
            $('.selected').next('dd').slideUp(300);
            $(this).next('dd').slideDown(300);
            $('.qna>dl>dt').removeClass('selected');
            $(this).addClass('selected')
        }
    })

    // swiper
    var swiper = new Swiper(
        ".swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        speed: 2000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
        }
    );
})

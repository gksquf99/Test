$(function(){
    //브라우저 스크롤
    $(window).scroll(function(){
        let scroll = $(this).scrollTop();
        //console.log(scroll);
        $("section").css("left",-scroll);//스크롤 내리면 왼쪽으로 이동
    });
    //포폴 추가시 스크롤 거리와 section의 넓이 변경 코드
    let numAc = $("article").length;//articl개수 저장
    let widSec = 200*numAc;//artcle 넓이에 개수를 곱한 값 저장
    let widTotal = widSec+600;//widSec에 600을 더한 값을 저장(패널이 하나 열렸을 떄 총넓이)

    $("section").width(widTotal);
    $("body").height(widSec);

    $("html.body").animate({"scrollTop":widSec},2000);
    //문서의 스크롤 거리를 변수 widSec으로 animate함수를 이용하여 애니메이션 효과 적용

    //각 article의 h2 클릭 시
    $("article h2").click(function(e){
        e.preventDefault();
        let index = $(this).parent().index();
        let src = $(this).find("a").attr("href");
        let posAc = 200*index;

        $("article").removeClass("on");
        $(this).parent().addClass("on");

        $(this).siblings("p").find("img").attr("src",src);
        $("html","body").animate({"scrollTop":posAc},700);
    });

    //닫기버튼 클릭 시
    $("span").click(function(){
        $("article").removeClass("on");//모든articl요소에 on클래스 제거
    });
    //navi li 클릭 시
    $("#navi > li").click(function(){
        let i = $(this).index();//클릭한 li의 순서값 저장
        let posNavi = 1000*i//1000곱하기 li의 순서값 저장
        $("#navi>li,article").removeClass("on");
        $(this).addClass("on");//클릭 요소에 on클래스 추가
        $("html,body").stop().animate({"scrollTop":posNavi},500);
        //문서의 스크롤 이동값을 변수 posNavi로 0.5초간 적용
    });
})
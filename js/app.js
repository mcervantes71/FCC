$(function(){
    $(".list-group > a").click(function(){
        $(".active").next().slideToggle("slow");
        $(".active").removeClass("active");

        $(this).addClass("active");
        $(this).next().slideToggle("slow");
    });
});

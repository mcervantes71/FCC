$(function(){
    $("#basic").click(function(){
        $(".active").next().slideToggle("slow");
        $("#basic_list").slideToggle("slow");
    });

    $("#inter").click(function(){
        $(".active").next().slideToggle("slow");
        $("#inter_list").slideToggle("slow");
    });

    $("#advanced").click(function(){
        $(".active").next().slideToggle("slow");
        $("#advanced_list").slideToggle("slow");
    });

    $("#inter_p").click(function(){
        $(".active").next().slideToggle("slow");
        $("#inter_projects").slideToggle("slow");
    });

    $("#advanced_p").click(function(){
        $(".active").next().slideToggle("slow");
        $("#advanced_projects").slideToggle("slow");
    });

    $('.list-group .list-group-item-info').click(function(e) {
        e.preventDefault()

        $that = $(this);
       
        $that.parent().find('a').removeClass('active');
        $that.addClass('active');
    });
});

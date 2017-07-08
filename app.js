$(function(){
    $("#basic").click(function(){
        $("#basic_list").slideToggle("slow");
    });

    $("#inter").click(function(){
        $("#inter_list").slideToggle("slow");
    });

    $("#advanced").click(function(){
        $("#advanced_list").slideToggle("slow");
    });

    $("#inter_p").click(function(){
        $("#inter_projects").slideToggle("slow");
    });

    $("#advanced_p").click(function(){
        $("#advanced_projects").slideToggle("slow");
    });

    $('.list-group .list-group-item-info').click(function(e) {
        e.preventDefault()

        $that = $(this);
       
        $that.parent().find('a').removeClass('active');
        $that.addClass('active');
    });
});

$("#add").on("click", function() {
    $("ul").append("<li> <span class='item'>X </span>" + $("input").val() + "</li>")
})
$("input").on("keypress", function(e) {
    if (e.which === 13) {
        $("ul").append("<li> <span class='item'><i class='fa fa-trash'></i></span>" + $("input").val() + "</li>");
        $("input").val("");
    }
})




$("ul").on("click", "span", function() {
    $(this).parent().remove()
})

$("ul").on("click", "li", function() {
    if ($(this).css("color") == "rgb(128, 128, 128)") {
        $(this).css({
            textDecoration: "",
            color: "black"
        })
    } else {
        $(this).css({
            textDecoration: "line-through",
            color: "gray"
        })
    }

})

$(".fa-plus").on("click", function() {
    $("input").fadeToggle();
})
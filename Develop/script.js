$(window).on('load', function() {
    var now = moment();
    var today = moment(now).format("dddd, MMMM Do");
    $("#currentDay").text(today)
})

$(".description").on("click", function() {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});
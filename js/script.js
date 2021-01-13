$(window).on('load', function() {
    var now = moment();
    var today = moment(now).format("dddd, MMMM Do");
    $("#currentDay").text(today)

    var hour = moment(now).format("HH");

    $(".description").each(function() {
        var hourColor = this.id;
            if (hourColor < hour) {
                $(this).addClass("past");
            } else if (hourColor > hour) {
                $(this).addClass("future");
            } else {
                $(this).addClass("present");
            }
    })
    
loadDesc();

});

function loadDesc() {
    var desc09 = localStorage.getItem("description-09");
    var desc10 = localStorage.getItem("description-10");
    var desc11 = localStorage.getItem("description-11");
    var desc12 = localStorage.getItem("description-12");
    var desc13 = localStorage.getItem("description-13");
    var desc14 = localStorage.getItem("description-14");
    var desc15 = localStorage.getItem("description-15");
    var desc16 = localStorage.getItem("description-16");
    var desc17 = localStorage.getItem("description-17");

    document.getElementById("09").value = desc09
    document.getElementById("10").value = desc10
    document.getElementById("11").value = desc11
    document.getElementById("12").value = desc12
    document.getElementById("13").value = desc13
    document.getElementById("14").value = desc14
    document.getElementById("15").value = desc15
    document.getElementById("16").value = desc16
    document.getElementById("17").value = desc17
};

// Save task description on save button click
$("#saveBtn09").on("click", function() {
    var descText = $("#09").val();
    localStorage.setItem("description-09", descText);
});

$("#saveBtn10").on("click", function() {
    var descText = $("#10").val();
    localStorage.setItem("description-10", descText);
});

$("#saveBtn11").on("click", function() {
    var descText = $("#11").val();
    localStorage.setItem("description-11", descText);
});

$("#saveBtn12").on("click", function() {
    var descText = $("#12").val();
    localStorage.setItem("description-12", descText);
});

$("#saveBtn13").on("click", function() {
    var descText = $("#13").val();
    localStorage.setItem("description-13", descText);
});

$("#saveBtn14").on("click", function() {
    var descText = $("#14").val();
    localStorage.setItem("description-14", descText);
});

$("#saveBtn15").on("click", function() {
    var descText = $("#15").val();
    localStorage.setItem("description-15", descText);
});

$("#saveBtn16").on("click", function() {
    var descText = $("#16").val();
    localStorage.setItem("description-16", descText);
});

$("#saveBtn17").on("click", function() {
    var descText = $("#17").val();
    localStorage.setItem("description-17", descText);
});
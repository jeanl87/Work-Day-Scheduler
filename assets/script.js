$(document).ready(function(){
let currentDate = moment().format("MMMM Do YYYY");
let displayDate = document.getElementById("currentDay");


let taskInput =(".row textarea[type=text]");

$(".time-div"). each(function () {
    var timeDiv = $(this).attr("id")
    if(currentHour > timeDiv){
        $(this).removeClass("future");
        $(this).addClass("past");
    }
    else if(currentHour == timeDiv){
        $(this).addClass("present");
    }
    else if(currentHour < timeDiv){
        $(this).addRemove("present");
        $(this).addClass("future"); 
    }
}
);

    $(".saveBtn").on("click", function(){
        var time = $(this).parent().attr('id')
        var value = $(this).siblings(".time-block").val()
        localStorage.setItem(time,value);
    });
$("#9").val(localStorage.getItem("9")); 


















})

$(document).ready(function(){
let currentDate = moment().format("dddd, MMMM DD, YYYY");
let displayDate = document.getElementById("currentDay");
displayDate.textContent = currentDate


//let taskInput =(".row textarea[type=text]");

$(".time-div"). each(function () {
    var timeDiv = $(this).attr("id");
    var currentHour = moment().format("HH:00");

    if(currentHour == timeDiv){
        $(this).addClass("present");
    }
    else if(currentHour < timeDiv){
        $(this).addRemove("present");
        $(this).addClass("future");
    }
    else if(currentHour > timeDiv){
        $(this).addRemove("future");
        $(this).addClass("past"); 
    }
}
);

   $(".saveBtn").click(function(){
        var time = $(this).parent().attr('id').split("-")[1]
        var value = $(this).siblings(".description").val()
        localStorage.setItem(time,value);
    });
$("#descripton").val(localStorage.getItem("9")); 
$("#descripton").val(localStorage.getItem("10"));
$("#descripton").val(localStorage.getItem("11"));
$("#descripton").val(localStorage.getItem("12"));
$("#descripton").val(localStorage.getItem("13"));
$("#descripton").val(localStorage.getItem("14"));
$("#descripton").val(localStorage.getItem("15"));
$("#descripton").val(localStorage.getItem("16"));
$("#descripton").val(localStorage.getItem("17"));


















})

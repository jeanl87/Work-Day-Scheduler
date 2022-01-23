$(document).ready(function(){
let currentDate = moment().format("MMMM DD YYYY");
let displayDate = document.getElementById("currentDay");
displayDate.textContent = currentDate


let taskInput =(".row textarea[type=text]");

$(".time-div"). each(function () {
    let timeDiv = currentHour;
    var timeDiv = $(this).attr("id");

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

   $(".saveBtn").on("click", function(){
        var time = $(this).parent().attr('id').split("-")[1]
        var value = $(this).siblings(".description").val()
        localStorage.setItem(time,value);
    });
$("#.descripton").val(localStorage.getItem("9")); 


















})

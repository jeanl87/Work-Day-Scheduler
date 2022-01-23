let taskInput =(".row textarea[type=text]");

$(".time-div"). each(function () {
    var timeDiv = $(this).attr("id")
    if(taskInput < currentHour){
        $(this).addClass("past")
    }
    else if(taskInput == currentHour){
        $(this).addClass("present")
    }
    else if(taskInput > currentHour){
        $(this).addClass("future") 
    }
}
);


$(document).ready(function(){

    $(".saveBtn").on("click", function(){
        var time = $(this).parent().attr('id')
        var value = $(this).siblings(".time-block").val()
        localStorage.setItem(time,value);
    });
$("#9").val(localStorage.getItem("9")); 


















})

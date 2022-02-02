$(document).ready(function () {
  let currentDate = moment().format("dddd, MMMM DD, YYYY");
  let displayDate = document.getElementById("currentDay");
  displayDate.textContent = currentDate;

  //let taskInput =(".row textarea[type=text]");

  $(".time-div").each(function () {
    var timeDiv = $(this).attr("id");
    var currentHour = moment().format("HH:00");

    if (currentHour == timeDiv) {
      $(this).addClass("present");
    } else if (currentHour < timeDiv) {
      $(this).addRemove("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).addRemove("future");
      $(this).addClass("past");
    }
  });

  $(".saveBtn").click(function () {
    var time = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    localStorage.setItem(time, value);
  });
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
});

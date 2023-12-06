// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//Added function to run when buttons are clicked
//Note that event listener is in the html
// function saveClick(){
//   console.log("you've pressed save");

//   var workEvent = document.querySelectorAll('textarea'); //workEvent is an array now
//   console.log(workEvent.length)
//   var tempArray = []
//   for(let i = 0; i < workEvent.length; i++){
//     tempArray.push(workEvent[i].value)
//   }
//   console.log(tempArray);
//   localStorage.setItem("workEvent", JSON.stringify(tempArray)); //store to local storage
// }

// $(function () {
// Code to display the current date in the header of the page.
const now = dayjs();
var currentTime = dayjs().format("h:mm:ss a");
var currentHour = dayjs().hour();
var saveButtonEl = $(".saveBtn");
var textDescription = $(".description");

$("#currentDay").text(now.format("MMM D, YYYY"));
$("#currentTime").text("The current time is " + currentTime);

//work on colorcoding depending on time of day

console.log(dayjs().hour()); //check whether this matches the id number for the divs

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

function checkColor() {
  var textboxArray = $(".description"); //this returns an array with each textbox in it
  
  console.log(textboxArray);
  //TO DO: loop through each textbox and add the class of 'past' 'present' or 'future' to each textarea
  $.each(textboxArray, function () {
    var textboxHour = $(this).parent().attr("id");
    if (currentHour > textboxHour){
      $(this).addClass("past");
    } else if (currentHour == textboxHour) {
      $(this).addClass("present");
    } else if (currentHour < textboxHour) {
      $(this).addClass("future");
  }
});
}

//TO DO: save to do items to local storage 
function saveProjectsToStorage() {
      var text = $(this).siblings(".description").val();
      console.log(text);
      localStorage.setItem($(this).parent().attr("id"), text);
    }

function getValuesFromStorage() {
  var textboxes = $(".description");
  $.each(textboxes, function(){
    var id =  $(this).parent().attr("id");
    $(this).val(localStorage.getItem(id));
  } );
}

  

checkColor();

getValuesFromStorage();

setInterval(checkColor(), 60000); //testing setInterval (every second)
saveButtonEl.on("click", saveProjectsToStorage);

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//

//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// });

//ACCEPTANCE CRITERIA
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours of 9am to 5pm
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

//TO DO: Display 8 time blocks, with each representing 9AM until 5PM
//TO DO: add event listeners on all save buttons

//TO DO: Color-code each time block to represent the past, pesent and future
//TO DO: set up a conditional
//TO DO: if the 'hour' parameter in day.js matches the id, then the class is present
//TO DO: if the 'hour' parameter in day.js is less than the id, then the class is past
//TO DO: if the 'hour' parameter in jay.js is more than the id, then the class is future

//TO DO: Save event to local storage
//TO DO:

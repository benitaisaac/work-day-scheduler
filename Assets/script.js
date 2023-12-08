const now = dayjs();
var currentTime = dayjs().format("h:mm:ss a");
var currentHour = dayjs().hour();
var saveButtonEl = $(".saveBtn");
var textDescription = $(".description");

//Display the current day and time at the top of the application 
$("#currentDay").text(now.format("MMM D, YYYY"));
$("#currentTime").text("The current time is " + currentTime);

function checkColor() {
  var textboxArray = $(".description"); //this returns an array with each textbox in it

  //Loop through each textbox and add the class of 'past' 'present' or 'future' to each textarea
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

//Save items to the local storage
function saveProjectsToStorage() {
      var text = $(this).siblings(".description").val();
      console.log(text);
      localStorage.setItem($(this).parent().attr("id"), text);
    }

//Display values in local storage
function getValuesFromStorage() {
  var textboxes = $(".description");
  $.each(textboxes, function(){
    var id =  $(this).parent().attr("id");
    $(this).val(localStorage.getItem(id));
  } );
}

  

checkColor();
getValuesFromStorage();
//Get the application to check the time every hour and update timeblocks with the appropriate color
setInterval(checkColor(), 60000);

//Add a listener for click events on the save button.
saveButtonEl.on("click", saveProjectsToStorage);
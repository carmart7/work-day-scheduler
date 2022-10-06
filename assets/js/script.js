// load content for text area on pageload
$("textarea[type='text']").each(loadContent);
// assign current day to jumbotron
$('#currentDay').text(moment().format('dddd, MMMM Do'));

// for every save button, save the corresponding text area
$("form").submit(function(event) {
    event.preventDefault();
    saveContent(event);
});

function saveContent(event) {
    var element = $(event.target).children().first();
    var elementTime = element.data("time");
    var content = element.val();
    localStorage.setItem(elementTime, content);
}


function loadContent(i, element) {
    element = $(this)
    elementTime =  element.data("time");
    var content = localStorage.getItem(elementTime);
    if(content){
        element.val(content);
    }
    if(moment().format('H') > elementTime) {
        console.log("PASTTHISTIME");
        element.addClass("past");
    } else if (moment().format('H') < elementTime) {
        element.addClass("future");
    } else {
        element.addClass("present")
    }
}

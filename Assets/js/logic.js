

// gets current date
var currentDate = moment().format('dddd') + ", " + moment().format("MMMM Do YYYY")

// gets the current hour
var hour = moment().hour();



// IDs of each time block
var nine = $("#9");
var ten = $("#10");
var eleven = $("#11");
var twelve = $("#12");
var one = $("#13");
var two = $("#14");
var three = $("#15");
var four = $("#16");
var five = $("#17");


// gets the Interval for the date at top
var date = setInterval(function(){
    $('#currentDay').text(currentDate)
})


// changes the color for time block based time
function colorStyle(){
    $("textarea").each(function (){
        var time = parseInt($(this).attr('id'))
        hour = parseInt(hour)
        if (hour > time){
            $(this).addClass("past")
        } 
        else if (hour === time) {
            $(this).addClass("present")

        }
        else{
            $(this).addClass("future")
        }
        
    })
    
}


// storage 
function store(){
    var nineAm = JSON.parse(localStorage.getItem("9AM"))
    var tenAm = JSON.parse(localStorage.getItem("10AM"))
    var elevenAm = JSON.parse(localStorage.getItem("11AM"))
    var twelvePm = JSON.parse(localStorage.getItem("12PM"))
    var onePm = JSON.parse(localStorage.getItem("1PM"))
    var twoPm = JSON.parse(localStorage.getItem("2PM"))
    var threePm = JSON.parse(localStorage.getItem("3PM"))
    var fourPm = JSON.parse(localStorage.getItem("4PM"))
    var fivePm = JSON.parse(localStorage.getItem("5PM"))

    nine.val(nineAm)
    ten.val(tenAm)
    eleven.val(elevenAm)
    twelve.val(twelvePm)
    one.val(onePm)
    two.val(twoPm)
    three.val(threePm)
    four.val(fourPm)
    five.val(fivePm)
}



// JS basics and saves
$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        textInput = $(this).siblings("textarea").val().trim()
        hours = $(this).siblings(".input-group-prepend").text().trim()
        localStorage.setItem(hours, JSON.stringify(textInput));
    })

store();
colorStyle();
})
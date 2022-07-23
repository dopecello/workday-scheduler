
//Setting Time Display
const timeSelector = document.getElementById("currentDay")
let rightNow = moment().format('MMMM Do YYYY, h:mm:ss A');
function timeDisplay() {
    timeSelector.innerHTML = rightNow
}
timeDisplay()
//End Time Display

function convertTimes() {
    let currentHour = moment().hour();
    $(".time-block").each(function () {
        const timeBlock = parseInt($(this).attr("id"))
        if (currentHour > timeBlock) {
            $(this).addClass("past")
            $(this).removeClass("present")
            $(this).removeClass("future")
        }
        else if (currentHour === timeBlock) {
            $(this).removeClass("past")
            $(this).addClass("present")
            $(this).removeClass("future")
        }
        else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })
}
convertTimes()


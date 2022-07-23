//Setting Time Display
const timeSelector = document.getElementById("currentDay")
let rightNow = moment().format('MMMM Do YYYY, h:mm:ss A');
function timeDisplay () {
timeSelector.innerHTML = rightNow
}
timeDisplay()
//End Time Display


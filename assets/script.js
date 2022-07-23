
function timeDisplay() {
    const timeSelector = document.getElementById("currentDay")
    let rightNow = moment().format('MMMM Do YYYY, h:mm:ss A');
    timeSelector.innerHTML = rightNow

};


function auditTimes() {
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
};


function saveSchedule() {
  $(".saveBtn").on("click", function() {
    time = $(this).parent($(".row time-block")).attr("id")
    text = $(this).siblings(".description").val()
    localStorage.setItem(time, text)
  })
};


function loadSchedule() {
$("#9text").val(localStorage.getItem("9"))
$("#10text").val(localStorage.getItem("10"))
$("#11text").val(localStorage.getItem("11"))
$("#12text").val(localStorage.getItem("12"))
$("#13text").val(localStorage.getItem("13"))
$("#14text").val(localStorage.getItem("14"))
$("#15text").val(localStorage.getItem("15"))
$("#16text").val(localStorage.getItem("16"))
$("#17text").val(localStorage.getItem("17"))
};

timeDisplay()
auditTimes()
saveSchedule();
loadSchedule();

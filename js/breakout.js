function agendaDay2(id) {
  if (id === "day-a-2") {
    var day1 = document.getElementById("day-a-1");
    var day2 = document.getElementById("day-a-2");
    var dayArea1 = document.getElementById("day-area-a-1");
    var dayArea2 = document.getElementById("day-area-a-2");

    day1.classList.remove("active");
    day2.classList.add("active");

    dayArea1.classList.remove("active");
    dayArea2.classList.add("active");
  } else if (id === "day-b-2") {
    var day1 = document.getElementById("day-b-1");
    var day2 = document.getElementById("day-b-2");
    var dayArea1 = document.getElementById("day-area-b-1");
    var dayArea2 = document.getElementById("day-area-b-2");

    day1.classList.remove("active");
    day2.classList.add("active");

    dayArea1.classList.remove("active");
    dayArea2.classList.add("active");
  } else if (id === "day-c-2") {
    var day1 = document.getElementById("day-c-1");
    var day2 = document.getElementById("day-c-2");
    var dayArea1 = document.getElementById("day-area-c-1");
    var dayArea2 = document.getElementById("day-area-c-2");

    day1.classList.remove("active");
    day2.classList.add("active");

    dayArea1.classList.remove("active");
    dayArea2.classList.add("active");
  } else if (id === "day-d-2") {
    var day1 = document.getElementById("day-d-1");
    var day2 = document.getElementById("day-d-2");
    var dayArea1 = document.getElementById("day-area-d-1");
    var dayArea2 = document.getElementById("day-area-d-2");

    day1.classList.remove("active");
    day2.classList.add("active");

    dayArea1.classList.remove("active");
    dayArea2.classList.add("active");
  }
}

function agendaDay1(id) {
  if (id === "day-a-1") {
    var day1 = document.getElementById("day-a-1");
    var day2 = document.getElementById("day-a-2");
    var dayArea1 = document.getElementById("day-area-a-1");
    var dayArea2 = document.getElementById("day-area-a-2");

    day2.classList.remove("active");
    day1.classList.add("active");

    dayArea2.classList.remove("active");
    dayArea1.classList.add("active");
  } else if (id === "day-b-1") {
    var day1 = document.getElementById("day-b-1");
    var day2 = document.getElementById("day-b-2");
    var dayArea1 = document.getElementById("day-area-b-1");
    var dayArea2 = document.getElementById("day-area-b-2");

    day2.classList.remove("active");
    day1.classList.add("active");

    dayArea2.classList.remove("active");
    dayArea1.classList.add("active");
  } else if (id === "day-c-1") {
    var day1 = document.getElementById("day-c-1");
    var day2 = document.getElementById("day-c-2");
    var dayArea1 = document.getElementById("day-area-c-1");
    var dayArea2 = document.getElementById("day-area-c-2");

    day2.classList.remove("active");
    day1.classList.add("active");

    dayArea2.classList.remove("active");
    dayArea1.classList.add("active");
  } else if (id === "day-d-1") {
    var day1 = document.getElementById("day-d-1");
    var day2 = document.getElementById("day-d-2");
    var dayArea1 = document.getElementById("day-area-d-1");
    var dayArea2 = document.getElementById("day-area-d-2");

    day2.classList.remove("active");
    day1.classList.add("active");

    dayArea2.classList.remove("active");
    dayArea1.classList.add("active");
  }
}

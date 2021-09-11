function play_video_day(id) {
  let video1 = document.getElementById("video-1");
  let video2 = document.getElementById("video-2");
  if (id === "watch-1") {
    video2.classList.remove("active");
    video1.classList.add("active");
  } else if (id === "watch-2") {
    video1.classList.remove("active");
    video2.classList.add("active");
  }
}

function changeBioDay(id) {
  let chooseDay1 = document.getElementById("choose_day_1");
  let chooseDay2 = document.getElementById("choose_day_2");

  let bioDay1 = document.getElementById("bio_day_1");
  let bioDay2 = document.getElementById("bio_day_2");

  if (id === "choose_day_1") {
    chooseDay2.classList.remove("active");
    chooseDay1.classList.add("active");

    bioDay2.classList.remove("active");
    bioDay1.classList.add("active");
  } else if (id === "choose_day_2") {
    chooseDay1.classList.remove("active");
    chooseDay2.classList.add("active");

    bioDay1.classList.remove("active");
    bioDay2.classList.add("active");
  }
}

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

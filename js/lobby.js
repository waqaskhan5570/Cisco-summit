function changeDay2() {
  var day1 = document.getElementById("day-1");
  var day2 = document.getElementById("day-2");
  var dayArea1 = document.getElementById("day-area-1");
  var dayArea2 = document.getElementById("day-area-2");

  day1.classList.remove("active");
  day2.classList.add("active");

  dayArea1.classList.remove("active");
  dayArea2.classList.add("active");
}

function changeDay1() {
  var day1 = document.getElementById("day-1");
  var day2 = document.getElementById("day-2");
  var dayArea1 = document.getElementById("day-area-1");
  var dayArea2 = document.getElementById("day-area-2");

  day2.classList.remove("active");
  day1.classList.add("active");

  dayArea2.classList.remove("active");
  dayArea1.classList.add("active");
}

// changing day tab ends

// for day 1
function changeSecurityTab() {
  var security = document.getElementById("security-btn");
  var cloud = document.getElementById("cloud-btn");
  var collaboration = document.getElementById("collaboration-btn");
  var partnerProgram = document.getElementById("partnerProgram-btn");

  var securityTab = document.getElementById("security");
  var cloudTab = document.getElementById("cloud_dc");
  var collaborationTab = document.getElementById("collaboration");
  var partnerProgramTab = document.getElementById("partner-program");

  cloudTab.classList.remove("active");
  collaborationTab.classList.remove("active");
  partnerProgramTab.classList.remove("active");
  securityTab.classList.add("active");

  security.classList.add("security-bg");
  cloud.classList.remove("cloud-bg");
  collaboration.classList.remove("collaboration-bg");
  partnerProgram.classList.remove("partnerProgram-bg");
}

function changeCloudTab() {
  var security = document.getElementById("security-btn");
  var cloud = document.getElementById("cloud-btn");
  var collaboration = document.getElementById("collaboration-btn");
  var partnerProgram = document.getElementById("partnerProgram-btn");

  var securityTab = document.getElementById("security");
  var cloudTab = document.getElementById("cloud_dc");
  var collaborationTab = document.getElementById("collaboration");
  var partnerProgramTab = document.getElementById("partner-program");

  securityTab.classList.remove("active");
  collaborationTab.classList.remove("active");
  partnerProgramTab.classList.remove("active");
  cloudTab.classList.add("active");

  security.classList.remove("security-bg");
  cloud.classList.add("cloud-bg");
  collaboration.classList.remove("collaboration-bg");
  partnerProgram.classList.remove("partnerProgram-bg");
}

function changeCollaborationTab() {
  var security = document.getElementById("security-btn");
  var cloud = document.getElementById("cloud-btn");
  var collaboration = document.getElementById("collaboration-btn");
  var partnerProgram = document.getElementById("partnerProgram-btn");

  var securityTab = document.getElementById("security");
  var cloudTab = document.getElementById("cloud_dc");
  var collaborationTab = document.getElementById("collaboration");
  var partnerProgramTab = document.getElementById("partner-program");

  securityTab.classList.remove("active");
  collaborationTab.classList.add("active");
  partnerProgramTab.classList.remove("active");
  cloudTab.classList.remove("active");

  security.classList.remove("security-bg");
  cloud.classList.remove("cloud-bg");
  collaboration.classList.add("collaboration-bg");
  partnerProgram.classList.remove("partnerProgram-bg");
}

function changePartnerProgramTab() {
  var security = document.getElementById("security-btn");
  var cloud = document.getElementById("cloud-btn");
  var collaboration = document.getElementById("collaboration-btn");
  var partnerProgram = document.getElementById("partnerProgram-btn");

  var securityTab = document.getElementById("security");
  var cloudTab = document.getElementById("cloud_dc");
  var collaborationTab = document.getElementById("collaboration");
  var partnerProgramTab = document.getElementById("partner-program");

  securityTab.classList.remove("active");
  collaborationTab.classList.remove("active");
  partnerProgramTab.classList.add("active");
  cloudTab.classList.remove("active");

  security.classList.remove("security-bg");
  cloud.classList.remove("cloud-bg");
  collaboration.classList.remove("collaboration-bg");
  partnerProgram.classList.add("partnerProgram-bg");
}

// for day 2
function changeSecurityTab1() {
  var security = document.getElementById("security-btn1");
  var cloud = document.getElementById("cloud-btn1");
  var collaboration = document.getElementById("collaboration-btn1");
  var partnerProgram = document.getElementById("partnerProgram-btn1");

  var securityTab = document.getElementById("security1");
  var cloudTab = document.getElementById("cloud_dc1");
  var collaborationTab = document.getElementById("collaboration1");
  var partnerProgramTab = document.getElementById("partner-program1");

  cloudTab.classList.remove("active");
  collaborationTab.classList.remove("active");
  partnerProgramTab.classList.remove("active");
  securityTab.classList.add("active");

  security.classList.add("security-bg");
  cloud.classList.remove("cloud-bg");
  collaboration.classList.remove("collaboration-bg");
  partnerProgram.classList.remove("partnerProgram-bg");
}

function changeCloudTab1() {
  var security = document.getElementById("security-btn1");
  var cloud = document.getElementById("cloud-btn1");
  var collaboration = document.getElementById("collaboration-btn1");
  var partnerProgram = document.getElementById("partnerProgram-btn1");

  var securityTab = document.getElementById("security1");
  var cloudTab = document.getElementById("cloud_dc1");
  var collaborationTab = document.getElementById("collaboration1");
  var partnerProgramTab = document.getElementById("partner-program1");

  securityTab.classList.remove("active");
  collaborationTab.classList.remove("active");
  partnerProgramTab.classList.remove("active");
  cloudTab.classList.add("active");

  security.classList.remove("security-bg");
  cloud.classList.add("cloud-bg");
  collaboration.classList.remove("collaboration-bg");
  partnerProgram.classList.remove("partnerProgram-bg");
}

function changeCollaborationTab1() {
  var security = document.getElementById("security-btn1");
  var cloud = document.getElementById("cloud-btn1");
  var collaboration = document.getElementById("collaboration-btn1");
  var partnerProgram = document.getElementById("partnerProgram-btn1");

  var securityTab = document.getElementById("security1");
  var cloudTab = document.getElementById("cloud_dc1");
  var collaborationTab = document.getElementById("collaboration1");
  var partnerProgramTab = document.getElementById("partner-program1");

  securityTab.classList.remove("active");
  collaborationTab.classList.add("active");
  partnerProgramTab.classList.remove("active");
  cloudTab.classList.remove("active");

  security.classList.remove("security-bg");
  cloud.classList.remove("cloud-bg");
  collaboration.classList.add("collaboration-bg");
  partnerProgram.classList.remove("partnerProgram-bg");
}

function changePartnerProgramTab1() {
  var security = document.getElementById("security-btn1");
  var cloud = document.getElementById("cloud-btn1");
  var collaboration = document.getElementById("collaboration-btn1");
  var partnerProgram = document.getElementById("partnerProgram-btn1");

  var securityTab = document.getElementById("security1");
  var cloudTab = document.getElementById("cloud_dc1");
  var collaborationTab = document.getElementById("collaboration1");
  var partnerProgramTab = document.getElementById("partner-program1");

  securityTab.classList.remove("active");
  collaborationTab.classList.remove("active");
  partnerProgramTab.classList.add("active");
  cloudTab.classList.remove("active");

  security.classList.remove("security-bg");
  cloud.classList.remove("cloud-bg");
  collaboration.classList.remove("collaboration-bg");
  partnerProgram.classList.add("partnerProgram-bg");
}

function goToAudi() {
  document.getElementById("background-video").src =
    "../videos/audi-transition.mp4";

  document.getElementById("lobby-content").classList.add("display-none");

  setTimeout(function () {
    location.href = "auditorium.html";
  }, 4000);
}

function goToBr() {
  document.getElementById("background-video").src =
    "../videos/br-transition.mp4";

  document.getElementById("lobby-content").classList.add("display-none");

  setTimeout(function () {
    location.href = "breakout-session.html";
  }, 5000);
}

function mute() {
  let iframe = document.getElementById("video_player_area_lobby");
  let btn = document.getElementById("muteunmute");

  if (btn.textContent === "mute") {
    iframe.contentWindow.postMessage('{"method":"setVolume", "value":0}', "*");
    btn.innerHTML = "unmute";
  } else if (btn.textContent === "unmute") {
    iframe.contentWindow.postMessage('{"method":"setVolume", "value":1}', "*");
    btn.innerHTML = "mute";
  }
}

function readMore(id) {
  let more = document.getElementById("moreText");
  let btnText = document.getElementById("readmore-1");

  let more2 = document.getElementById("moreText2");
  let btnText2 = document.getElementById("readmore-2");

  if (id === "readmore-1") {
    if (more.style.display === "none") {
      more.style.display = "inline";
      btnText.innerHTML = "Read Less..";
    } else {
      btnText.innerHTML = "Read More..";
      more.style.display = "none";
    }
  } else {
    if (more2.style.display === "none") {
      more2.style.display = "inline";
      btnText2.innerHTML = "Read Less..";
    } else {
      btnText2.innerHTML = "Read More..";
      more2.style.display = "none";
    }
  }
}
function nextPrev(id) {
  let nextbtn = document.getElementById("nextBtn");
  let prevbtn = document.getElementById("prevBtn");
  let firstDiv = document.getElementById("first_div");
  let lastDiv = document.getElementById("last_div");
  let fb1 = document.querySelector(".fb-1");
  let fb2 = document.querySelector(".fb-2");
  let fb3 = document.querySelector(".fb-3");
  let fb4 = document.querySelector(".fb-4");
  let fb5 = document.querySelector(".fb-5");
  let fb6 = document.querySelector(".fb-6");
  let fb7 = document.querySelector(".fb-7");
  let fb8 = document.querySelector(".fb-8");
  let fb9 = document.querySelector(".fb-9");
  let fb10 = document.querySelector(".fb-10");

  if (id === "nextBtn") {
    if (id === "nextBtn" && prevbtn.style.display === "none") {
      prevbtn.style.display = "block";
      fb1.style.display = "none";
      fb2.style.display = "block";
    } else if (fb2.style.display === "block") {
      fb2.style.display = "none";
      fb3.style.display = "block";
    } else if (fb3.style.display === "block") {
      fb3.style.display = "none";
      fb4.style.display = "block";
    } else if (fb4.style.display === "block") {
      fb4.style.display = "none";
      fb5.style.display = "block";
    } else if (fb5.style.display === "block") {
      fb5.style.display = "none";
      fb6.style.display = "block";
    } else if (fb6.style.display === "block") {
      fb6.style.display = "none";
      fb7.style.display = "block";
    } else if (fb7.style.display === "block") {
      fb7.style.display = "none";
      fb8.style.display = "block";
    } else if (fb8.style.display === "block") {
      fb8.style.display = "none";
      fb9.style.display = "block";
    } else if (fb9.style.display === "block") {
      fb9.style.display = "none";
      fb10.style.display = "block";
    } else if (fb10.style.display === "block") {
      fb10.style.display = "none";
      document.getElementById("feedback-out").style.display = "block";
      nextbtn.style.display = "none";
      prevbtn.style.display = "none";
    }
  } else if (id === "prevBtn") {
    if (fb2.style.display === "block") {
      prevbtn.style.display = "none";
      fb2.style.display = "none";
      fb1.style.display = "block";
    } else if (fb3.style.display === "block") {
      fb3.style.display = "none";
      fb2.style.display = "block";
    } else if (fb4.style.display === "block") {
      fb4.style.display = "none";
      fb3.style.display = "block";
    } else if (fb5.style.display === "block") {
      fb5.style.display = "none";
      fb4.style.display = "block";
    } else if (fb6.style.display === "block") {
      fb6.style.display = "none";
      fb5.style.display = "block";
    } else if (fb7.style.display === "block") {
      fb7.style.display = "none";
      fb6.style.display = "block";
    } else if (fb8.style.display === "block") {
      fb8.style.display = "none";
      fb7.style.display = "block";
    } else if (fb9.style.display === "block") {
      fb9.style.display = "none";
      fb8.style.display = "block";
    } else if (fb10.style.display === "block") {
      fb10.style.display = "none";
      fb9.style.display = "block";
    }
  }
}

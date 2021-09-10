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

function changeBioTab(id) {
  let bioAuditorium = document.getElementById("bio_auditorium");
  let bioSecurity = document.getElementById("bio_security");
  let bioCloud = document.getElementById("bio_cloud");
  let bioCollaboration = document.getElementById("bio_collaboration");
  let bioPartner = document.getElementById("bio_partner");

  let auditoriumTab = document.getElementsByClassName("bio_auditorium");
  let securityTab = document.getElementsByClassName("bio_security");
  let cloudTab = document.getElementsByClassName("bio_cloud");
  let collaborationTab = document.getElementsByClassName("bio_collaboration");
  let partnerTab = document.getElementsByClassName("bio_partner");

  if (id === "bio_auditorium") {
    bioAuditorium.classList.add("active");
    bioSecurity.classList.remove("active");
    bioCloud.classList.remove("active");
    bioCollaboration.classList.remove("active");
    bioPartner.classList.remove("active");
    // Tabs

    auditoriumTab[0].classList.add("active");
    auditoriumTab[1].classList.add("active");

    securityTab[0].classList.remove("active");
    securityTab[1].classList.remove("active");

    cloudTab[0].classList.remove("active");
    cloudTab[1].classList.remove("active");

    collaborationTab[0].classList.remove("active");
    collaborationTab[1].classList.remove("active");

    partnerTab[0].classList.remove("active");
    partnerTab[1].classList.remove("active");
  } else if (id === "bio_security") {
    bioAuditorium.classList.remove("active");
    bioSecurity.classList.add("active");
    bioCloud.classList.remove("active");
    bioCollaboration.classList.remove("active");
    bioPartner.classList.remove("active");

    // Tabs

    auditoriumTab[0].classList.remove("active");
    auditoriumTab[1].classList.remove("active");

    securityTab[0].classList.add("active");
    securityTab[1].classList.add("active");

    cloudTab[0].classList.remove("active");
    cloudTab[1].classList.remove("active");

    collaborationTab[0].classList.remove("active");
    collaborationTab[1].classList.remove("active");

    partnerTab[0].classList.remove("active");
    partnerTab[1].classList.remove("active");
  } else if (id === "bio_cloud") {
    bioAuditorium.classList.remove("active");
    bioSecurity.classList.remove("active");
    bioCloud.classList.add("active");
    bioCollaboration.classList.remove("active");
    bioPartner.classList.remove("active");

    // Tabs

    auditoriumTab[0].classList.remove("active");
    auditoriumTab[1].classList.remove("active");

    securityTab[0].classList.remove("active");
    securityTab[1].classList.remove("active");

    cloudTab[0].classList.add("active");
    cloudTab[1].classList.add("active");

    collaborationTab[0].classList.remove("active");
    collaborationTab[1].classList.remove("active");

    partnerTab[0].classList.remove("active");
    partnerTab[1].classList.remove("active");
  } else if (id === "bio_collaboration") {
    bioAuditorium.classList.remove("active");
    bioSecurity.classList.remove("active");
    bioCloud.classList.remove("active");
    bioCollaboration.classList.add("active");
    bioPartner.classList.remove("active");
    // Tabs

    auditoriumTab[0].classList.remove("active");
    auditoriumTab[1].classList.remove("active");

    securityTab[0].classList.remove("active");
    securityTab[1].classList.remove("active");

    cloudTab[0].classList.remove("active");
    cloudTab[1].classList.remove("active");

    collaborationTab[0].classList.add("active");
    collaborationTab[1].classList.add("active");

    partnerTab[0].classList.remove("active");
    partnerTab[1].classList.remove("active");
  } else if (id === "bio_partner") {
    bioAuditorium.classList.remove("active");
    bioSecurity.classList.remove("active");
    bioCloud.classList.remove("active");
    bioCollaboration.classList.remove("active");
    bioPartner.classList.add("active");
    // Tabs

    auditoriumTab[0].classList.remove("active");
    auditoriumTab[1].classList.remove("active");

    securityTab[0].classList.remove("active");
    securityTab[1].classList.remove("active");

    cloudTab[0].classList.remove("active");
    cloudTab[1].classList.remove("active");

    collaborationTab[0].classList.remove("active");
    collaborationTab[1].classList.remove("active");

    partnerTab[0].classList.add("active");
    partnerTab[1].classList.add("active");
  }
}

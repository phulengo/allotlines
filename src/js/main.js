import * as bootstrap from "bootstrap";
import "../scss/styles.scss";
import "../js/components/header.js";
import "../js/components/footer.js";

/** Countdown */
const destinationDate = new Date("Sep 30, 2022 15:37:25").getTime();

let countDown = setInterval(() => {
  let now = new Date().getTime();

  let distance = destinationDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  //   document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(countDown);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("mins").innerHTML = "0";
    // document.getElementById("seconds").innerHTML = "0";
  }
}, 1000);

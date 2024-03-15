const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function timer() {
  const date = new Date();
  const time = date.toLocaleTimeString();

  console.log(time);
  const timeHr = time.slice(0, 1);

  console.log("timeHr", timeHr);
  const timeMin = time.slice(2, 4);
  console.log("timeMin", timeMin);
  const timeSec = time.slice(5, 8);
  console.log("timeSec", timeSec);

  hr.innerText = Number(timeHr) < 10 ? `0${timeHr}` : timeHr;
  min.innerText = timeMin;
  sec.innerText = timeSec;
}

setInterval(timer, 1000); 

const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  // getHours()는 숫자형이라 padStart를 붙일 수 없다.
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

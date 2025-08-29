
let heartCount = 0;   
let coinCount = 100;  
let copyCount = 0;    

function updateNavbar() {
  document.getElementById("heartCount").textContent = heartCount;
  document.getElementById("coinCount").textContent = coinCount;
  document.getElementById("copyCount").textContent = copyCount + " Copy";
}

function toggleHeart(card) {
  heartCount++;
  updateNavbar();
}

function copyNumber(serviceName, serviceNumber) {
  navigator.clipboard.writeText(serviceNumber).then(() => {
    copyCount++;
    updateNavbar();
    alert(`✅ ${serviceName} hotline ${serviceNumber} copied to clipboard!`);
  });
}

function makeCall(serviceName, serviceNumber) {
  if (coinCount < 20) {
    alert("❌ Not enough coins to call! 20 coins needed to make a call!");
    return;
  }
  alert(`📞 Calling ${serviceName} at ${serviceNumber}`);
  coinCount -= 20;
  updateNavbar();
  addToHistory(serviceName, serviceNumber);
}

function addToHistory(serviceName, serviceNumber) {
  const historyList = document.getElementById("historyList");
  const now = new Date();
  const timeString = now.toLocaleTimeString();

  const li = document.createElement("li");
  li.textContent = `${serviceName} - ${serviceNumber} (at ${timeString})`;
  historyList.appendChild(li);
}

function clearHistory() {
  document.getElementById("historyList").innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
  updateNavbar();
});

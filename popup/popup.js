const button = document.getElementById("solve-btn");
button.addEventListener("click", () => {
  button.textContent = "Solving...";
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "startWordle" });
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "wordleSolved") {
    button.textContent = "Wordle Solved!";
  }
});

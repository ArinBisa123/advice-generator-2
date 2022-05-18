const quoteText = document.querySelector(".quote"),
  quoteBtn = document.querySelector(".btn.tiga"),
  copyBtn = document.querySelector(".btn.dua"),
  twitterBtn = document.querySelector(".btn.satu");
quoteBtn.addEventListener("click", function () {
  randomQuote();
});
// random quote function
function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";

  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      quoteText.innerText = result.content;
      quoteBtn.classList.remove("loading");
      quoteBtn.innerText = "New Quote";
    });
}
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.innerText);
});
twitterBtn.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
  window.open(tweetUrl, "_blank");
});

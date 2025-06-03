const tweetBox = document.querySelector(".tweet-box");
const textarea = tweetBox.querySelector("textarea");
const postButton = tweetBox.querySelector("button");
const tweetsContainer = document.querySelector(".main-content");
const user = {
  name: "DevPosting",
  username: "@devPostingADM",
  avatar: "https://i.pravatar.cc/40",
};

let feed = [];

async function getCatImage() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await res.json();
  return data[0]?.url || "";
}

function createTweetElement(tweet) {
  const tweetDiv = document.createElement("div");
  tweetDiv.className = "tweet";

  tweetDiv.innerHTML = `
    <div class="tweet-header">
      <img src="${tweet.avatar}" alt="Profile Picture" />
      <h3>
        <span class="bold">${tweet.name}</span>
        <span class="text-muted">${tweet.username}</span>
      </h3>
    </div>
    <div class="tweet-content">
      <p>${tweet.text}</p>
      ${
        tweet.image
          ? `<img src="${tweet.image}" alt="Gato fofo" style="width: 100%; margin-top: 10px; border-radius: 10px;" />`
          : ""
      }
    </div>
    <div class="tweet-actions">
      <button data-index="${feed.indexOf(tweet)}">❤️ Curtir (<span>${
    tweet.likes
  }</span>)</button>
    </div>
  `;

  // Inserir acima do primeiro tweet, mantendo o exemplo
  const firstUserTweet = document.querySelectorAll(".tweet")[1];
  tweetsContainer.insertBefore(tweetDiv, firstUserTweet || null);
}

postButton.addEventListener("click", async () => {
  const text = textarea.value.trim();
  if (!text) return;

  const image = await getCatImage();

  const newTweet = {
    date: new Date().toISOString(),
    name: user.name,
    username: user.username,
    avatar: user.avatar,
    text,
    image,
    likes: 0,
  };

  feed.unshift(newTweet);
  createTweetElement(newTweet);
  textarea.value = "";
});

tweetsContainer.addEventListener("click", (e) => {
  if (
    e.target.tagName === "BUTTON" &&
    e.target.textContent.includes("Curtir")
  ) {
    const index = e.target.getAttribute("data-index");
    if (index !== null && feed[index]) {
      feed[index].likes += 1;
      const span = e.target.querySelector("span");
      span.textContent = feed[index].likes;
    }
  }
});

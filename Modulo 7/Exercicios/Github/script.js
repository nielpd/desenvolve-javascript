(() => {
  const searchBtn = document.getElementById("searchBtn");
  const usernameInput = document.getElementById("usernameInput");

  const profileDisplay = document.getElementById("profileDisplay");
  const avatar = document.getElementById("avatar");
  const nameEl = document.getElementById("name");
  const bioEl = document.getElementById("bio");
  const usernameEl = document.getElementById("username");
  const reposEl = document.getElementById("repos");
  const followersEl = document.getElementById("followers");

  const historyContainer = document.getElementById("historyContainer");
  const historyList = document.getElementById("historyList");

  function saveToHistory(username) {
    let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    if (!history.includes(username)) {
      history.unshift(username);
      if (history.length > 10) history.pop();
      localStorage.setItem("searchHistory", JSON.stringify(history));
    }
  }

  function loadHistory() {
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    historyList.innerHTML = "";

    history.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user;
      li.addEventListener("click", () => {
        usernameInput.value = user;
        searchUser(user);
      });
      historyList.appendChild(li);
    });

    historyContainer.style.display = history.length ? "block" : "none";
  }

  async function fetchGitHubUser(username) {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) {
      throw new Error("Usuário não encontrado");
    }
    return await res.json();
  }

  function searchUser(username) {
    if (!username) return;

    fetchGitHubUser(username)
      .then((user) => {
        avatar.src = user.avatar_url;
        avatar.alt = `${user.name || user.login} Avatar`;
        nameEl.textContent = user.name || "Nome não disponível";
        bioEl.textContent = user.bio || "Sem biografia.";
        usernameEl.textContent = user.login;
        reposEl.textContent = user.public_repos;
        followersEl.textContent = user.followers;

        profileDisplay.classList.remove("hidden");

        saveToHistory(user.login);
        loadHistory();
      })
      .catch((err) => {
        alert("Usuário não encontrado.");
        profileDisplay.classList.add("hidden");
        console.error(err);
      });
  }

  searchBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    searchUser(username);
  });

  loadHistory();
})();

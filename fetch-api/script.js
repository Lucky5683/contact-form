function getJoke() {
  fetch("https://official-joke-api.appspot.com/jokes/random")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke").innerHTML = `${data.setup} - ${data.punchline}`;
    })
    .catch(error => {
      document.getElementById("joke").innerHTML = "Error fetching joke!";
      console.error(error);
    });
}

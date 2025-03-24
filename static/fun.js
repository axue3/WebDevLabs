function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        const advice = data.slip.advice;
        let adviceTextEl = document.getElementById("adviceText");
        if (adviceTextEl) {
          adviceTextEl.innerText = advice;
        }
      })
      .catch(function(error) {
        console.error("Error fetching advice:", error);
        let adviceTextEl = document.getElementById("adviceText");
        if (adviceTextEl) {
          adviceTextEl.innerText =
            "Sorry, something went wrong. Please try again later.";
        }
      });
  }
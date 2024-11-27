document.addEventListener("DOMContentLoaded", () => {
    const consentButton = document.getElementById("consent-button");
    const introVideo = document.getElementById("intro-video");
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const commentsContainer = document.getElementById("comments");
    const surveyForm = document.getElementById("survey-form");
    const emojiReactions = document.getElementById("emoji-reactions");
  
    let trackingData = {
      mouseMoves: [],
      clicks: [],
      timeOnPage: 0,
      comments: [],
      surveyResponses: {},
      reactions: [],
    };
  
    // Track mouse movements
    document.addEventListener("mousemove", (e) => {
      trackingData.mouseMoves.push({ x: e.clientX, y: e.clientY });
    });
  
    // Track clicks
    document.addEventListener("click", (e) => {
      trackingData.clicks.push({ x: e.clientX, y: e.clientY });
    });
  
    // Track time on page
    setInterval(() => {
      trackingData.timeOnPage++;
    }, 1000);
  
    // Show consent button when video ends
    introVideo.addEventListener("ended", () => {
      consentButton.style.display = "block";
    });
  
    // Handle consent button click
    consentButton.addEventListener("click", () => {
      localStorage.setItem("trackingData", JSON.stringify(trackingData));
      window.location.href = "tracking.html";
    });
  
    // Handle comment submission
    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const comment = commentInput.value.trim();
      if (comment) {
        trackingData.comments.push(comment);
        const commentElement = document.createElement("p");
        commentElement.textContent = comment;
        commentsContainer.appendChild(commentElement);
        commentInput.value = "";
      }
    });
  
    // Handle survey submission
    surveyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const q1 = document.getElementById("q1").value.trim();
      const q2 = document.getElementById("q2").value;
      trackingData.surveyResponses = { q1, q2 };
      alert("Survey submitted!");
    });
  
    // Handle emoji reactions
    emojiReactions.addEventListener("click", (e) => {
      if (e.target.dataset.reaction) {
        trackingData.reactions.push(e.target.dataset.reaction);
        alert(`Reaction ${e.target.dataset.reaction} recorded!`);
      }
    });
  });
  
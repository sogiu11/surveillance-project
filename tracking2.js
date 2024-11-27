document.addEventListener("DOMContentLoaded", () => {
    const trackingData = JSON.parse(localStorage.getItem("trackingData"));
    const trackingDiv = document.getElementById("tracking-data");
  
    if (trackingData) {
      trackingDiv.innerHTML = `
        <h2>Tracking Summary</h2>
        <p><strong>Time on Page:</strong> ${trackingData.timeOnPage} seconds</p>
        <p><strong>Mouse Movements:</strong> ${trackingData.mouseMoves.length} movements</p>
        <p><strong>Clicks:</strong> ${trackingData.clicks.length} clicks</p>
        <h3>Comments</h3>
        <ul>
          ${trackingData.comments.length > 0 
            ? trackingData.comments.map((comment) => `<li>${comment}</li>`).join("") 
            : "<li>No comments were added.</li>"}
        </ul>
        <h3>Survey Responses</h3>
        <p><strong>Q1:</strong> ${trackingData.surveyResponses.q1 || "Not answered"}</p>
        <p><strong>Q2:</strong> ${trackingData.surveyResponses.q2 || "Not answered"}</p>
        <h3>Emoji Reactions</h3>
        <p>${trackingData.reactions.length > 0 
            ? trackingData.reactions.join(", ") 
            : "No reactions recorded."}</p>
      `;
    } else {
      trackingDiv.innerHTML = "<p>No tracking data found. Please visit the main page first.</p>";
    }
  });
  
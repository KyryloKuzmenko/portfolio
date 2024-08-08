async function loadHTML(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    const text = await response.text();
    document.getElementById(elementId).innerHTML = text;
  } catch (error) {
    console.error("Error loading HTML:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header", "./src/partials/header.html");
  loadHTML("hero", "./src/partials/hero.html");
  loadHTML("about_me", "./src/partials/about_me.html");
  loadHTML("benefits", "./src/partials/benefits.html");
  loadHTML("projects", "./src/partials/projects.html");
  loadHTML("faq", "./src/partials/faq.html");
  loadHTML("reviews", "./src/partials/reviews.html");
  loadHTML("work_together", "./src/partials/work_together.html");
});

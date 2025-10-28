// SEARCH FUNCTIONALITY
document.getElementById("searchBtn").addEventListener("click", function(){
  const query = document.getElementById("searchInput").value.toLowerCase();
  const sections = document.querySelectorAll("section");
  let found = false;
  sections.forEach(sec => {
    if (sec.textContent.toLowerCase().includes(query) && query.trim() !== "") {
      sec.scrollIntoView({ behavior: "smooth" });
      found = true;
    }
  });
  if (!found) {
    alert("No matching content found. Try another term.");
  }
});

// SCROLL TO TOP BUTTON
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  if (document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// CONTACT FORM SUBMIT (placeholder)
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent. We will be in touch.");
  // Later: replace this with actual email submission code/API
});

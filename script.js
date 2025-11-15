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

  function sendEmail(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const mailtoLink = `mailto:levaanpillay6@gmail.com?subject=New Query from ${encodeURIComponent(name)}&body=From: ${encodeURIComponent(email)}%0A%0A${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
  alert("Thank you! Your message has been sent. We will be in touch.");
  // Later: replace this with actual email submission code/API
});


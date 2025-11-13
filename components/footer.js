document.addEventListener("DOMContentLoaded", function() {
  fetch("/components/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
      if (window.feather) feather.replace(); // ensures icons render correctly
    })
    .catch(error => console.error("Error loading footer:", error));
});

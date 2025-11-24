document.addEventListener("DOMContentLoaded", function() {
  fetch("/components/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
      if (window.feather) feather.replace(); // ensures icons render correctly
    })
    .catch(error => console.error("Error loading navbar:", error));
});

function showPopupForm() {
    const popupForm = document.getElementById("popupForm");
    popupForm.style.display = "flex";
  }
  
  setTimeout(showPopupForm, 5000);  // 5000 milliseconds = 5 seconds
  
  const closeFormBtn = document.getElementById("closeFormBtn");
  closeFormBtn.addEventListener("click", function() {
    const popupForm = document.getElementById("popupForm");
    popupForm.style.display = "none";
  });
  
  // Close the form if the user clicks outside of it
  window.addEventListener("click", function(event) {
    const popupForm = document.getElementById("popupForm");
    if (event.target === popupForm) {
      popupForm.style.display = "none";
    }
  });
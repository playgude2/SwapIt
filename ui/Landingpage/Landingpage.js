const showPopupButton1 = document.getElementById("showPopup1");
      const closePopupButton1 = document.getElementById("closePopup1");
      const overlay1 = document.getElementById("popup1");
 
      const showPopupButton2 = document.getElementById("showPopup2");
      const closePopupButton2 = document.getElementById("closePopup2");
      const overlay2 = document.getElementById("popup2");
 
      const showPopupButton3 = document.getElementById("showPopup3");
      const closePopupButton3 = document.getElementById("closePopup3");
      const overlay3 = document.getElementById("popup3");
 
      showPopupButton1.addEventListener("click", function() {
          overlay1.style.display = "flex";
      });
      closePopupButton1.addEventListener("click", function() {
          overlay1.style.display = "none";
      });
      overlay1.addEventListener("click", function(event) {
          if (event.target === overlay1) {
              overlay1.style.display = "none";
          }
      });
 
      showPopupButton2.addEventListener("click", function() {
          overlay2.style.display = "flex";
      });
      closePopupButton2.addEventListener("click", function() {
          overlay2.style.display = "none";
      });
      overlay2.addEventListener("click", function(event) {
          if (event.target === overlay2) {
              overlay2.style.display = "none";
          }
      });
 
      showPopupButton3.addEventListener("click", function() {
          overlay3.style.display = "flex";
      });
      closePopupButton3.addEventListener("click", function() {
          overlay3.style.display = "none";
      });
      overlay3.addEventListener("click", function(event) {
          if (event.target === overlay3) {
              overlay3.style.display = "none";
          }
      });
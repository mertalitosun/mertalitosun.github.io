const input = document.querySelectorAll("input");

input.forEach(function(inputParam) {
  inputParam.addEventListener("click", function() {
    // Tüm inputlardaki borderları kaldır
    input.forEach(function(inputParam) {
      inputParam.style.borderBottom = "none";
    });
    
    // Sadece tıklanan inputun altında border oluştur
    this.style.borderBottom = "1px solid #399cf9";
  });
});
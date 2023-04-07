const hesapla = document.querySelector(".hesapla");
const ucret = document.getElementById("ucret");
const yuzde = document.getElementById("yuzde");
const div = document.querySelector(".modal-body");
hesapla.addEventListener("click", () => {
  x = ucret.value * 100;
  y = 100 - yuzde.value;
  sonuc = x / y;

  const yazdir = `
    <div class="container sonuc text-center">
          <span>${sonuc}</span>
    </div>

  `;
  div.innerHTML = yazdir;
});

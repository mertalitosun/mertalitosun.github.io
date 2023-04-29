// body
const body = document.querySelector(".body");

// karanlık mod buton
const moon = document.querySelector(".moon");

// aydınlık mod buton
const sun = document.querySelector(".sun");

// header-navbar
const header = document.querySelector(".navbar");

// hakkımda
const about = document.querySelector(".about-me");

// beceri
const hakkimda = document.getElementById("beceri");

// hesap makinesi card
const calculator = document.getElementById("calculator");

// timer card
const timer = document.getElementById("timer");

// todo list card
const todo = document.getElementById("todo");

// not hesaplama card
const not = document.getElementById("not");

// offcanvas
const offcanvas = document.querySelector(".offcanvas");

// mod değiştirme div
const button = document.querySelector(".switch-button");

// offcanvas close buton
const buttonclose = document.querySelector(".btn-close");


const card = document.querySelectorAll(".card");

const projeEKle = document.querySelector(".carousel-inner");


const mod = () =>{
    // mod değiştirme div
    button.classList.toggle("switch-button-dark");

    // body
    body.classList.toggle("body-mod");

    // header-navbar mod değişim
    header.classList.toggle("body-mod");
    header.classList.toggle("navbar-dark");
    header.classList.toggle("bg-light");

    // hakkımda mod değişim
    about.classList.toggle("bg-light");
    about.classList.toggle("about-me-mod");

    // beceri mod değişim
    hakkimda.classList.toggle("about-me-mod");
    hakkimda.classList.toggle("bg-light");

    // calculator.classList.toggle("bg-body");
    // calculator.classList.toggle("about-me-mod");

    // timer.classList.toggle("bg-body");
    // timer.classList.toggle("about-me-mod");
    
    // todo.classList.toggle("bg-body");
    // todo.classList.toggle("about-me-mod");

    for(var i = 0; i < card.length; i++){
        card[i].classList.toggle("bg-body");
        card[i].classList.toggle("about-me-mod");
    }

}
moon.addEventListener("click",()=>{
    sun.style.display="block";
    moon.style.display="none";
    buttonclose.classList.add("btn-close-white");
    offcanvas.classList.add("body-mod");
    mod();
})

sun.addEventListener("click",()=>{
    sun.style.display="none";
    moon.style.display="block";
    buttonclose.classList.remove("btn-close-white");
    offcanvas.classList.remove("body-mod");
    mod();
})



function Projects(projeName,projeImg,projeTitle,projeText,projeDesc){
    this.projeName = projeName;
    this.projeImg = projeImg;
    this.projeTitle = projeTitle;
    this.projeText = projeText;
    this.projeDesc = projeDesc;
}

let hesapMakinesi = new Projects("hesapMakinesi","./hesapMakinesi/img/calculator.png","HESAP MAKİNESİ","Html, Css, JavaScript","Javascript öğrenme sürecinde yaptığım proje");

let timer_ = new Projects("timer_","./timer_/img/timer.png","KRONOMETRE","Html, Css, JavaScript","Javascript öğrenme sürecinde yaptığım proje");

let mertaliTodo = new Projects("mertaliTodo","./mertaliTodo/todo.png","TO DO LİST","Html, Css, JavaScript","Web tarayıcınızda localhost kullanarak çalışan todo list projesi");

let notHesapla = new Projects("notHesapla","./notHesapla/img/nothesapla.png","NOT HESAPLA","Html, Css, JavaScript","Dersin not ortalamasını ve dersi geçebilmek için final notunuzun kaç olması gerektiğini hesaplar.");

let havaDurumu = new Projects("havaDurumu","./havaDurumu/havaDurumu.png", "ANLIK HAVA DURUMU", "Html, Css, JavaScript", "Api öğrenme sürecimdeki Fetch Api ile ilk projem.");

let klimaBtu = new Projects("klimaBtu","./klimaBtu/klimabtu.png","KLİMA BTU HESAPLAMA ARACI","Html, Css, JavaScript","Tasarımına özen gösterilmeden sadece hesaplamanın doğru olmasına dikkat edilerek kodlanmış projedir. İhtiyacımız olan klima BTU hesabını yapar.");

let bionlukHesaplama = new Projects("bionlukHesaplama","./bionlukHesaplama/bionlukHesaplama.png","BİONLUK TAHSİL EDİLEN NET ÜCRET HESAPLAMA ARACI","Html, Css, JavaScript","Bionluk üzerinden teklif verirken bionluk komisyon oranı kesilmiş ücreti hesaplama işlemini gerçekleştirir.");

let bionlukStory = new Projects("bionlukStory","./bionlukStory/bionlukStory.jpeg","İnstagram Story benzeri özellik","Html, Css, JavaScript","bionluk üzerinden yapılan proje")

function projeOlustur(projeAdi){
    let div = `
    <div class="carousel-item">
    <div class="card shadow-lg p-3 mb-5 bg-body rounded container" style="width: 24rem;">
        <img src="${projeAdi.projeImg}" class="card-img-top img-fluit" alt="...">
        <div class="card-body">
          <h5 class="card-title text-center">${projeAdi.projeTitle}</h5>
          <p class="card-text">${projeAdi.projeText}</p>
          <p class="card-text">${projeAdi.projeDesc}</p>
          <a href="./${projeAdi.projeName}/${projeAdi.projeName}.html" class="btn btn-warning d-flex justify-content-center" target="_blank">GÖRÜNTÜLE</a>
        </div>
    </div>
  </div>
    `;

    projeEKle.insertAdjacentHTML("beforeend",div);

}

projeOlustur(hesapMakinesi);
projeOlustur(timer_);
projeOlustur(mertaliTodo);
projeOlustur(notHesapla);
projeOlustur(havaDurumu);
projeOlustur(klimaBtu);
projeOlustur(bionlukHesaplama);
projeOlustur(bionlukStory);






               
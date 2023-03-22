const m2 = document.querySelector("#m2");
const kisiSayisi = document.querySelector("#kisiSayisi");
const bolge = document.querySelector("#bolge");
const hesapla = document.querySelector("#hesapla");
const btuDeger = document.querySelector(".btuDeger");

const btuHesapla = () =>{
    let bolgeM2 = m2.value * bolge.value;
    let kisili = 600 * kisiSayisi.value;
    let btu = bolgeM2 + kisili;
    
    console.log(btu)

    if(btu <= 9000){
        btu = 9000
    }
    else if((btu >= 9000) && (btu <= 12000) ){
        btu = 12000
    }
    else if((btu >= 12001) && (btu <= 18100) ){
        btu = 18000
    }
    else if((btu >= 18101) && (btu <= 24000)){
        btu = 24000
    }
    else{
        btuDeger.innerHTML = "btu değeriniz 24000 üstüdür"
    }

    btuDeger.innerHTML = btu;

}

hesapla.addEventListener("click", btuHesapla)



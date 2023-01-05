// vize not
const vize = document.getElementById("vize");
// final not
const final = document.getElementById("final");
// vize yüzde
const vyuzde = document.getElementById("vyuzde");
// final yüzde
const fyuzde = document.getElementById("fyuzde");
// vize katkı
const vkatki = document.getElementById("vkatki");
// final katkı
const fkatki = document.getElementById("fkatki");
// hesapla butonu
const hesapla = document.getElementById("hesapla");
// sonuc
const sonuc = document.getElementById("sonuc");
// nihai sonuc
const nsonuc = document.getElementById("nsonuc");
const refresh = document.querySelector(".refresh");

hesapla.addEventListener("click" ,()=>{
    // vize not değer
    const vn=vize.value;
    // vize yüzde değer
    const vy=vyuzde.value;

    // final not değer
    const fn=final.value;
    // final yüzde değer
    const fy=fyuzde.value;

    // vize katkı sonuc
    const vks=(vn*vy)/100;
    // final katkı sonuc
    const fks=(fn*fy)/100;

    // ortalama not
    const ns=vks+fks;

    // vize katkı yazdır
    vkatki.innerHTML=vks;
    // final katkı yazdır
    fkatki.innerHTML=fks;

    // sonuc yazdır
    sonuc.innerHTML = "Sonuc: " + ns;
    nsonuc.innerHTML = "Nihai Sonuc: " + Math.round(ns);
})

refresh.addEventListener("click", ()=>{
    window.location.reload(false);
})

// vize not
const vize = document.getElementById("vize");

// final not
const final = document.getElementById("final");

// final not label
const fL = document.getElementById("fL");

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

// sayfayı yenile buton
const refresh = document.querySelector(".refresh");

// final notu bul buton
const fnBul = document.getElementById("finalNot");

// final notu bulan hesapla buton
const fnBulHesapla = document.getElementById("fnBulHesapla");

// min ortalama
const minOrt = document.getElementById("mo");

// min ortalama label
const minOrtL = document.getElementById("moL");


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

    // sonucu ve nihai sonucu yazdır
    sonuc.innerHTML = "Sonuc: " + ns;
    nsonuc.innerHTML = "Nihai Sonuc: " + Math.round(ns);
})

// sayfayı yenile
refresh.addEventListener("click", ()=>{
    window.location.reload(false);
})

// dersten geçmek için gereken final notu hesapalama ekranı
fnBul.addEventListener("click", ()=>{
    // final label
    fL.style.display = "none";

    // min ort label
    minOrtL.style.display ="";

    // final input
    final.style.display = "none";

    // min ort input
    mo.style.display = "";

    hesapla.style.display="none";
    fnBulHesapla.style.display="";
})

// dersten geçmek için gereken final notu hesapalama
fnBulHesapla.addEventListener("click", ()=>{
    // vize not değer
    const vn=vize.value;

    // vize yüzde değer
    const vy=vyuzde.value;

    // vize katkı sonuc
    const vks=(vn*vy)/100;
    
    
    // final yüzde değer
    const fy=fyuzde.value;

    // min ortalama kaç olması lazım ? 
    const mo = minOrt.value;

    // finalden alman gereken notun katkısı
    const fg = mo-vks;

    // finalden alman gereken not
    const fgy = (fg*100)/fy;

    // vize katkı yazdır
    vkatki.innerHTML=vks;

    // final katkı sonuc
    const fks = (fgy*fy/100);

    // final katkı yazdır
    fkatki.innerHTML=fks;


    // sonucu ve nihai sonucu yazdir
    sonuc.innerHTML = "Sonuc: " + fgy;
    nsonuc.innerHTML = "Nihai Sonuc: " + Math.round(fgy);
})
 
// const isim = prompt("Adınız Nedir?");
// const age = prompt("Yaşınız Kaç?");
// const cinsiyet = prompt("Cinsiyetiniz Nedir?")

// if (age >= 20 && cinsiyet === "erkek") {
//     alert("Merhaba, " + isim + "Askere gitmeniz gerekiyor.");
// } else {
//     alert("Merhaba, " + isim + " Askere gitmeniz gerekmiyor.");
// }



// let dizi = [1 , 2 , 4 , 6 , 8 , 15 , 16 , 18 , 20 , 24 , 26 , 30 , 35 , 36 , 40 , 42 , 44 , 46 , 50 , 52 , 54 , 55];
// for (let i = 0; i < 30; i++)

// for (let i = 0; i < dizi.length; i++) {
//     if (dizi[i] % 2 === 0) {
//         console.log(dizi[i] + " 2'ye tam bölünür.");
//     }
// }

// const kutucuk = document.querySelector(".kutucuk");
// const toplamTutarSpan = document.querySelector("#toplamTutar")
// const sepet = []
// const meyveler = [
//           {
//                     id: 1,
//                     adi: "Muz",
//                     fiyati: 100
//           },
//           {
//                     id: 2,
//                     adi: "Kivi",
//                     fiyati: 200
//           },
//           {
//                     id: 3, 
//                     adi: "Çilek",
//                     fiyati: 300
//           }
// ]

// let toplamTutar = 0


// for (const meyve of meyveler) {
//           kutucuk.innerHTML += `
//                <li id="${meyve.id}">${meyve.adi} - ${meyve.fiyati}$ 
//                <button class="buyBtn">Satın Al</button></li>
//           `
// }

// for (const btn of document.querySelectorAll(".buyBtn")) {
//      btn.addEventListener("click", function(){
//           const tiklananMeyve = meyveler.find(meyve => meyve.id == this.parentElement.id);
//           const eklenecekOlanMeyve = tiklananMeyve
//           eklenecekOlanMeyve.adet = 1
//           sepet.push(eklenecekOlanMeyve)
//           // console.log(sepet);
//           toplamTutar += tiklananMeyve.fiyati;
//           // console.log(topamTutar);
//           toplamTutarSpan.textContent = toplamTutar
//           // toplamTutar += "Bulunan meyvenin fiyati"
//      })
// }

const kutucuk = document.querySelector("#kutucuk");
const toplamTutarSpan = document.querySelector("#toplamTutar");
const sepetDiv = document.querySelector("#sepet");
const meyveler = [
    {
        id: 1,
        adi: "Elma",
        fiyati: 500,
    },
    {
        id: 2,
        adi: "Armut",
        fiyati: 300
    },
    {
        id: 3,
        adi: "Muz",
        fiyati: 200
    }
]

let toplamTutar = 0;
toplamTutarSpan.textContent = toplamTutar

const sepet = []



for (const meyve of meyveler) {
    kutucuk.innerHTML += `
        <li id="${meyve.id}">${meyve.adi} - ${meyve.fiyati}$ 
        <button class="buy-btn">Sepete Ekle</button></li>
    `
}

for (const btn of document.querySelectorAll(".buy-btn")) {
    btn.addEventListener("click", function(){
        const tiklananMeyve = meyveler.find(meyve => meyve.id == this.parentElement.id);
        const eklenecekOlanMeyve = tiklananMeyve
        const sepetteVarMi = sepet.find(urun => urun.id == eklenecekOlanMeyve.id)
        if(sepetteVarMi){
            sepetteVarMi.adet += 1
        }else{
            eklenecekOlanMeyve.adet = 1
            sepet.push(eklenecekOlanMeyve)
        }

        console.log(sepet);
        sepetDiv.innerHTML = ""
        toplamTutar = 0;
        for (const urun of sepet) {
            sepetDiv.innerHTML += `<li>${urun.adi} - x${urun.adet} - ${urun.fiyati * urun.adet}</li>`
            toplamTutar += (urun.fiyati * urun.adet)
            console.log(toplamTutar);
            toplamTutarSpan.textContent = toplamTutar

        }
    })
}

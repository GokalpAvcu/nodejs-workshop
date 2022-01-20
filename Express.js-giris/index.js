const express = require('express'); // express modülümüzü import ettik
const data = require('./data.js') //data.js dosyasını import ettik bana icindeki verileri vermesi icin

const server = express(); //fonksiyonu cagirip server'ı olusturduk

server.get('/', (req,res) =>{  //ana adrese gelen istekleri dinlemek icin. (req = kullanıcıdan gelen istek, res = bizim gönderecegimiz cevap)
    res.send("Express'ten merhaba")  // fonksiyonumuz icinde (res = gonderecegimiz cevapta) send metodunu cagiriyoruz, kullanıcıya belirleyecegimiz adrese gidildiğinde gönderilecek cevabı yazıypruz
   
});   

server.get("/aktorler", (req,res) => { // yeni bir endpoint ekliyoruz (kullanicilarin ziyaret edebilecegi)
    res.status(200).json(data); //yapılan istek basarili ve cevap olarak da json verisi olarak data gonderilecek data = data.js'den aldigimiz veri
    //res.send("Aktorler listesi");
});

server.get("/aktorler/:id", (req,res) => {
    const { id } = req.params; // req.params'dan gelen degerler string gelicek cünkü data.js'de biz id'leri int olarak belirttik o yüzden asagida parseInt(id) yaptik
    const aktor = data.find(aktor => aktor.id === parseInt(id)); // data dizisi icerisinden bu id ile eslesen bir aktor var mi onu buluyoruz burda.
    if(aktor){ // eger aktor degeri varsa res.status(200) basarili oldugunu soyle yani aktor var arkasından da json olarak aktor'un obje degerini gonderelim
        res.status(200).json(aktor);
    } else { // eger aktor degeri yoksa false ise asagidaki hata mesajını gönderelim
        res.status(404).send('Aradiginiz aktor bulunamadi')
    }
    //
});

server.listen(5000, () => {
    console.log('http://localhost:5000 adresine gelen istekler dinleniyor...') //olusturdugumuz server'imiz bize bu adresten cevap verdi ve yukarıdaki yazıyı bize gönderdi.
});


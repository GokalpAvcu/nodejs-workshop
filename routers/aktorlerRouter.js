const router = require('express').Router();
let data = require('../data.js'); //data.js dosyasını import ettik bana icindeki verileri vermesi icin



router.get("/aktorler", (req,res) => { // yeni bir endpoint ekliyoruz (kullanicilarin ziyaret edebilecegi)
    res.status(200).json(data); //yapılan istek basarili ve cevap olarak da json verisi olarak data gonderilecek data = data.js'den aldigimiz veri
    //res.send("Aktorler listesi");
});

let next_id = 4;

router.post("/",(req,res)=>{
    let yeni_aktor = req.body;

    if(!yeni_aktor.isim) {
        next ({
            statusCode: 400,
            errorMessage:  "Aktor eklemek icin isim girmelisiniz.",
            });
    } else if (yeni_aktor.isim && !yeni_aktor.filmleri) {
        next ({
            statusCode: 400,
            errorMessage:  "Aktor eklemek icin isim girmelisiniz.",
            });
    } else {
        yeni_aktor.id = next_id;
        next_id++; // bir sonraki gelecek aktor icin bir arttirdik
        data.push(yeni_aktor);
        res.status(201).json(yeni_aktor);   
    }   
});

router.delete("/:id",(req,res)=>{
    const silinecek_aktor_id = req.params.id;
    const silinecek_aktor = data.find(aktor => aktor.id === Number(silinecek_aktor_id))

    if(silinecek_aktor){
        data = data.filter(aktor => aktor.id === Number(silinecek_aktor_id));
        res.status(204).end
    }else{
        res
        .status(404)
        .json ({ errorMessage: "Silmeye calistiginiz aktor sistemde yok."});
    }
}) 

router.get("/:id", (req,res) => {
    console.log("req.params", req.params);
    const { id } = req.params; // req.params'dan gelen degerler string gelicek cünkü data.js'de biz id'leri int olarak belirttik o yüzden asagida parseInt(id) yaptik
    const aktor = data.find(aktor => aktor.id === parseInt(id)); // data dizisi icerisinden bu id ile eslesen bir aktor var mi onu buluyoruz burda.
    if(aktor){ // eger aktor degeri varsa res.status(200) basarili oldugunu soyle yani aktor var arkasından da json olarak aktor'un obje degerini gonderelim
        res.status(200).json(aktor);
    } else { // eger aktor degeri yoksa false ise asagidaki hata mesajını gönderelim
        res.status(404).send('Aradiginiz aktor bulunamadi')
    }
    //
});







module.exports = router;
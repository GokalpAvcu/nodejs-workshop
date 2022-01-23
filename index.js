const express = require('express'); // express modülümüzü import ettik
const aktorlerRouter = require("./routers/aktorlerRouter");
const logger = require("./middlewares/logger"); // logger fonksiyonunu import ettik
const errorHandling = require("./middlewares/errorHandling");


const server = express(); //fonksiyonu cagirip server'ı olusturduk
server.use(express.json()); // kullanicidan gelen verileri json'a cevirmek icin middleware kullanmis olduk
server.use(logger); // burasi cok onemli cünkü uygulama genelinde aktif hale getiriyoruz bu satırla, dolayısıyla asagidaki router'dan once gelmeli ki router'a gelen isteklere de uygulansın logger fonksiyonumuz.

server.use("/aktorler", aktorlerRouter); // Router'ları birer middleware olarak ekledik

server.get("/", (req, res) =>{  // ana adrese gelen istekleri dinlemek icin. (req = kullanıcıdan gelen istek, res = bizim gönderecegimiz cevap)
    res.send("Express'ten merhaba")  // fonksiyonumuz icinde (res = gonderecegimiz cevapta) send metodunu cagiriyoruz, kullanıcıya belirleyecegimiz adrese gidildiğinde gönderilecek cevabı yazıyoruz.
});   

server.use(errorHandling);

server.listen(5000, () => {
    console.log('http://localhost:5000 adresine gelen istekler dinleniyor...') //olusturdugumuz server'imiz bize bu adresten cevap verdi ve yukarıdaki yazıyı bize gönderdi.
});

// Middleware = ara katman yazılımı. express uygulamasında art arda gelen sırasıyla belirtilen işlemleri yerine getiren mekanizmadir.





// ODEV 
// PUT
// id req.params'dan alacak
// düzenlenen aktor degerini req.body al
// dizi icinde id ile aktor var mi?
// aktor sistemde varsa, bilgileri degistir, 200 koduyla yeni aktor bilgilerini gonder
// 404 koduyla hata gonder






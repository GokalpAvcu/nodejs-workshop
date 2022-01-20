const http = require('http'); // node.js icerisinde bi http paketimiz var ve o http paketini import ettik require kullanarak

const host = '127.0.0.1'; // daha sonra host'umuzun calisacagi adresi belirliyoruz
const port = 3000; // bilgisayarımıza hangi port'tan baglanilacagini belirttik

const server = http.createServer((req, res) => { // request(kullanıcının yaptığı istek, yani ordan gelen bilgiler) ve response(bizim kullanıcıya göndereceğimiz cevaplar)
      res.statusCode = 200; //200 ile başlayan kodlar başarılı yani yapılan istek başarılı cevap verildi anlamına gelir
      res.setHeader('Content-Type', 'text/plain'); // Gönderdiğimiz cevabın başlığını belirtiyoruz
      res.end('Gokalp Avcu Kanalina Hosgeldiniz');  // server'ı olusturmak icin http metodundan createServer isimli  bir fonksiyonu alıyoruz. // bu createServer fonksiyonu 1 adet callback fonksiyon alır ve bu aldigi callback fonksiyonun 2 adet parametresi vardır bunlar request(kullanıcının yaptığı istek, yani ordan gelen bilgiler) ve response(bizim kullanıcıya göndereceğimiz cevaplar)

});

// burda ise olusturdugumuz server'in o gelen isteklere cevap vermesi icin listen metodunu kullanıyoruz

server.listen(port, host, () => {
   console.log(`http://${host}:${port} adresinden gelen istekler dinleniyor...`)
});

                                
// 3. parametre daha eklememiz gerekiyor genelde next ismi verilir cünkü fonk. amacı burdaki islemi yaptiktan sonra bizi siradaki middleware'e gondermek
module.exports =(req, res, next) => {
   console.log(`${new Date().toUTCString()} - ${req.method} - ${req.hostname}`);
    next();
};
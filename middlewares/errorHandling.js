module.exports = (err,req,res, next) => { //4. parametre ilk olan parametre olması gerekiyor yani error parametresi.
  res.status(err.statusCode). json(err);
}; 
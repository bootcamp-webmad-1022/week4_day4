const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index")
})


// Route params
router.get('/vuelos/:origin/:destination/:departure_date', (req, res) => {

  const { origin, destination, departure_date } = req.params

  console.log('---------')
  console.log('Este es el objeto req.params:', req.params)
  console.log('Debes enviar a la BBDD como origen', origin)
  console.log('Debes enviar a la BBDD como destino', destination)
  console.log('Debes enviar a la BBDD como fecha ida', departure_date)
  console.log('---------')

  res.send('<h1>¡Mira la terminal!</h1>')
})


// Query strings
router.get('/tienda', (req, res) => {

  console.log('---------')
  console.log('Este es el objeto de Query Strings:', req.query)
  console.log('---------')

  res.send('<h1>¡Mira la terminal!</h1>')
})



// Search form (render)
router.get('/buscar', (req, res) => {
  res.render('search-form')
})


// Search form (handling)
router.get('/resultados', (req, res) => {

  const { clothe, color, season } = req.query

  console.log('Hemos buscado', clothe, color, season)

  res.render('search-results', req.query)
})





// Signup form (render)
router.get('/registro', (req, res) => {
  res.render('signup-form')
})

// Signup form (handling)
router.post('/registro', (req, res) => {

  const { username, pwd } = req.body

  console.log('---------')
  console.log('Este es el objeto req.body:', req.body)
  console.log('Debes enviar a la BBDD como nombre de usuario', username)
  console.log('Debes enviar a la BBDD como nombre de password', pwd)
  console.log('---------')

  res.send('<h1>Mira la terminal</h1>')

})





module.exports = router
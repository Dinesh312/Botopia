const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true , dock: true })
 
nightmare
  .goto('https://datadome.co')
  .wait(8000)
  .end()
  .then(console.log())
  .catch(error => {
    console.error('Search failed:', error)
  })
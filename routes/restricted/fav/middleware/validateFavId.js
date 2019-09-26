const Fav = require('../favModel')

module.exports = (req, res, next) => {
  const { id } = req.params

  Fav.findById(id)
    .then(fav => {
      if (fav) {
        next()
      } else {
        res.status(400).json({ message: 'fav id does not exist' })
      }
    })
    .catch(err => res.status(400).json({ err: err.message }))
}
const Fav = require('./favModel')

module.exports = {
  validateFavId,
  validateFavObj,
}

function validateFavId(req, res, next) {
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

function validateFavObj(req, res, next) {
  const fav = req.body

  if (!fav) res.status(404).json({ message: 'missing fav data' })
  else if (!fav.userID) res.status(404).json({ message: 'missing userID field' })
  else if (!fav.houseID) res.status(404).json({ message: 'missing houseID field' })
  else if (!fav.name) res.status(404).json({ message: 'missing name field' })
  else next()
}
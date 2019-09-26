module.exports = (req, res, next) => {
  const fav = req.body

  if (!fav) res.status(404).json({ message: 'missing fav data' })
  else if (!fav.userID) res.status(404).json({ message: 'missing userID field' })
  else if (!fav.houseID) res.status(404).json({ message: 'missing houseID field' })
  else if (!fav.name) res.status(404).json({ message: 'missing name field' })
  else next()
}
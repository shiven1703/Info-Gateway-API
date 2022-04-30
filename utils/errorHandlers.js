const unknownPathHandler = (req, res) => {
  res.status(200).send('<h1>Unknown path</h1>')
}

module.exports = {
  unknownPathHandler,
}

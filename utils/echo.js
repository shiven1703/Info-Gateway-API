const echo = (req, res) => {
  res.status(200).json({
    hit: 'success',
    param: req.params.echoParam,
  })
}

module.exports = {
  echo,
}

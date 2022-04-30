const home = (req, res) => {
  res.status(200).send('<h2>Home of instagram gateway.</h2>')
}

const getUsers = (req, res) => {
  const dummyUserList = [
    {
      username: 'shivam11',
      platform: 'instagram',
      age: '15',
      followers: 500,
      follows: 300,
      isAdult: false,
      date: new Date().toLocaleString('en-US'),
    },
    {
      username: 'ram444',
      platform: 'instagram',
      age: '22',
      followers: 280,
      follows: 312,
      isAdult: true,
      date: new Date().toLocaleString('en-US'),
    },
  ]
  res.status(200).json(dummyUserList)
}

module.exports = {
  home,
  getUsers,
}

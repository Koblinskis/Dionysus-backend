const UData = require('../model/UData')

exports.uData_list_post = async function(req, res) {
  const uData = new UData({
    ...req.body,
    owner: req.user._id
  })

  try {
    await uData.save()
    res.status(201).send(uData)
  } catch (e) {
    res.status(400).send(e)
  }
}
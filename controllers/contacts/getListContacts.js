const { Contact } = require("../../db/models/contactModel");
async function getListContacts(req, res, next) {
  const contacts = await Contact.find({ owner: req.user._id });
  res.json({ data: contacts });
}
module.exports = { getListContacts };

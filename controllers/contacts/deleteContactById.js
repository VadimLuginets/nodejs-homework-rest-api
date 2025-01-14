const { Contact } = require("../../db/models/contactModel");
async function deleteContactById(req, res, next) {
  try {
    const { contactId } = req.params;
    const contact = await Contact.remove({ _id: contactId });
    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
}
module.exports = { deleteContactById };

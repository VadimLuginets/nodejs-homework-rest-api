const { patch } = require("../../schemas/contacts/index");
const { Contact } = require("../../db/models/contactModel");
async function updateStatusContact(req, res, next) {
  try {
    const isValidData = patch.validate(req.body);
    if (isValidData.error) {
      return res.status(400).json({ message: "missing field favorite" });
    }
    const { contactId } = req.params;
    await Contact.updateOne({ _id: contactId }, req.body);
    const contact = await Contact.find({ _id: contactId });
    res.status(200).json({ contact });
  } catch (error) {
    return res.status(400).json({ status: "error" });
  }
}
module.exports = { updateStatusContact };

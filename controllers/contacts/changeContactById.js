const { put } = require("../../schemas/contacts/index");
const { Contact } = require("../../db/models/contactModel");

async function changeContactById(req, res, next) {
  try {
    const isValidData = put.validate(req.body);
    if (isValidData.error) {
      return res.status(400).json({ msg: "Validation error" });
    }

    const { contactId } = req.params;
    console.log(contactId);
    await Contact.updateOne({ _id: contactId }, req.body);
    res.json(req.body);
  } catch (error) {
    return res.status(400).json({ status: "error" });
  }
}

module.exports = { changeContactById };

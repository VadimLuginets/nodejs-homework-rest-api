const { post } = require("../../schemas/contacts/index");
const { Contact } = require("../../db/models/contactModel");

async function addNewContact(req, res, next) {
  try {
    const isValidData = post.validate(req.body);
    if (isValidData.error) {
      return res.status(400).json({ msg: "Validation error" });
    }
    const owner = req.user._id;
    const newContact = req.body;
    const { name, email, phone } = newContact;
    const contact = new Contact({ name, email, phone, owner });
    await contact.save();
    res.status(201).json(newContact);
  } catch (error) {
    return res.status(400).json({ status: "error" });
  }
}
module.exports = { addNewContact };

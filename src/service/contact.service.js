const Contact = require("../model/contact.model")

exports.createContact = async (data) => {
    try {
        const result = await Contact.create(data)
        return result
    } catch (error) {
        console.log('error:', error)
    }
}
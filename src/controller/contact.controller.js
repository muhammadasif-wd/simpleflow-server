const contactService = require("../service/contact.service");
exports.createContact = async (req, res) => {
    try {
        const reqData = await contactService.createContact(req.body);
        if (!reqData) {
            return res.status(401).json({
                status: false,
                message: "Sorry your data not store! 😞",
            });
        }
        res.status(200).json({
            status: true,
            message: "Successfully🎉 your data store! 😀",
            data: reqData,
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                status: false,
                message: validationErrors
            });
        }
        res.status(500).json({
            status: false,
            message: "An error occurred while store data",
            error: error.message,
        });
    }
};
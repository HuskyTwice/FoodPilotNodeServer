import * as dao from "./contact/dao.js"

function ContactRoutes(app) {
    const createContact = async (req, res) => {
        const contact = await dao.createContact(req.body);
        res.json(contact);
    };

    app.post("/api/contact", createContact);
}

export default ContactRoutes;
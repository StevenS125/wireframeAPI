import {
    addNewContact,
    getContacts,
    getContactWithId,
    updateContact,
    deleteContact
} from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {

            //middleware
            console.log(`request from ${req.originalUrl}`)
            console.log(`request from ${req.method}`)
            next();
        }, getContacts)
        // Post endPoint
        .post(addNewContact);


    app.route('/contact/:contactId')
        // get specific contact
        .get(getContactWithId)

    // this is a put request
    .put(updateContact)

    // this is a delete request
    .delete(deleteContact)
}

export default routes;
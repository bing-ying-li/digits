import { Meteor } from 'meteor/meteor';
// eslint-disable-next-line no-unused-vars
import contact from '../../ui/components/Contact';
import { Contacts } from '../../api/contact/Contacts';

/* eslint-disable no-console */

// Initialize the database with a default data document.
// eslint-disable-next-line no-shadow
const addContact = (contact) => {
  console.log(` Adding: ${contact.lastName} (${contact.owner})`);
  Contacts.collection.insert(contact);
};

if (Contacts.collection.find().count() === 0) {
  if (Meteor.settings.defaultContacts) {
    console.log('Creating default contacts');
    // eslint-disable-next-line no-shadow
    Meteor.settings.defaultContacts.forEach(contact => addContact(contact));
  }
}

class Contacts {
  constructor() {
    this.contacts = [];
  }
  getAllContacts() {
    return this.contacts;
  }
  getContactsById(id) {
    return this.contacts.find((contact) => contact.id === id);
  }
  createContact(contact) {
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact);
    return contact;
  }
  updateContactById(id, updatedcontact) {
    let index = this.contacts.findIndex((contact) => contact.id === id);
    console.log(index);
    this.contacts[index].name =
      updatedcontact.name || this.contacts[index].name;
    this.contacts[index].phone =
      updatedcontact.phone || this.contacts[index].phone;
    this.contacts[index].email =
      updatedcontact.email || this.contacts[index].email;
    return this.contact[index];
  }
  deleteContactById(id) {
    let index = this.contacts.find((contact) => contact.id === id);
    let deletedObj = this.contacts[index];
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
    return deletedObj;
  }
}
module.exports = new Contacts();

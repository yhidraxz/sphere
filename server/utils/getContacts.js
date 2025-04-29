export function getContacts(buzList) {
  let contacts = [];
  for (business of buzList) {
    for (contact of business) {
      contacts.push(contact.numero);
    }
  }
  return contacts;
}

const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const getContacts = (state) => state.contacts.items;

const getForm = (state) => state.contacts.items;

const getContactList = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state).toLowerCase();

  return contacts.filter((item) =>
    item.items.name.toLowerCase().includes(filter)
  );
};

export default {
  getLoading,
  getFilter,
  getContactList,
  getForm,
};

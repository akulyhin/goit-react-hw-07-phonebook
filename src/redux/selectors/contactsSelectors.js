import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const getContacts = (state) => state.contacts.items;

const getForm = (state) => state.contacts.items;

const getContactList = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.items.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default {
  getLoading,
  getFilter,
  getContactList,
  getForm,
};

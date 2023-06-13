import { Report } from 'notiflix/build/notiflix-report-aio';
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
// import initialContacts from '../contacts.json';

const initialContacts = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: initialContacts,
  // initialState:
  //   JSON.parse(localStorage.getItem('contacts')) || initialContacts || [],

  reducers: {
    addContact: {
      reducer(state, action) {
        if (
          state.contacts.some(
            contact =>
              contact.name.toLowerCase() === action.payload.name.toLowerCase()
          )
        ) {
          return Report.warning(
            'Warning!',
            `${action.payload.name} is already in contacts.`,
            'Okay'
          );
        }

        if (
          state.contacts.some(
            contact => contact.number === action.payload.number
          )
        ) {
          return Report.warning(
            'Warning!',
            `${action.payload.number} is already in contacts.`,
            'Okay'
          );
        }
        state.contacts.push(action.payload);
        Report.success('Success', 'New contact has been added!', 'Okay');
      },

      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      Report.success('Success', `Contact was deleted!`, 'Okay');
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

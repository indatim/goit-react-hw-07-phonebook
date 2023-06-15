
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';

import { handlePending, handleFulfieldAddContact, handleFulfieldDeleteContact, handleFulfieldFetchContacts, handleRejected } from './handlers';
import { fetchContacts, addContact, deleteContact } from './operations';

const arrOfThunks = [fetchContacts, addContact, deleteContact, ];
const func = type => arrOfThunks.map(el => el[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfieldFetchContacts)
      .addCase(addContact.fulfilled, handleFulfieldAddContact)
      .addCase(deleteContact.fulfilled, handleFulfieldDeleteContact)
      .addMatcher(isAnyOf(...func('pending')), handlePending)
      .addMatcher(isAnyOf(...func('rejected')), handleRejected)
  },
})

export const contactsReducer = contactsSlice.reducer;
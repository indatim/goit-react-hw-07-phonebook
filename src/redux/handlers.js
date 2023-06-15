import { Report } from 'notiflix/build/notiflix-report-aio';

export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfieldFetchContacts = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

export const handleFulfieldAddContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
  Report.success('Success', 'New contact has been added!', 'Okay');
};

export const handleFulfieldDeleteContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
  Report.success('Success', `Contact was deleted!`, 'Okay');
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

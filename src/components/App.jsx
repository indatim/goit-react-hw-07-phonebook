import { Container, PhonebookHeader, ContactsHeader } from './App.styled';

import { FaPhoneSquareAlt, FaUser } from "react-icons/fa";
import { Loader } from './Loader/Loader';

import { selectError, selectIsLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './ContactFilter/ContactFilter';


export function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <PhonebookHeader>
        <FaPhoneSquareAlt style={{ marginRight: '5' }} /> Phonebook
      </PhonebookHeader>
      <ContactForm />
      <ContactsHeader>
        <FaUser style={{ marginRight: '5' }} /> Contacts
      </ContactsHeader>
      <Filter />
      {isLoading && !error && <Loader/>}
      <ContactList />
    </Container>
  );
}
import { Container, PhonebookHeader, ContactsHeader } from './App.styled';

import { FaPhoneSquareAlt , FaUser } from "react-icons/fa";

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './ContactFilter/ContactFilter';

export function App() {

return (
      <Container>
        <PhonebookHeader><FaPhoneSquareAlt style={{marginRight: '5'}}/> Phonebook</PhonebookHeader>
        <ContactForm/>
        <ContactsHeader><FaUser style={{marginRight: '5'}}/> Contacts</ContactsHeader>
        <Filter/>
        <ContactList/>
      </Container>
    );
  }
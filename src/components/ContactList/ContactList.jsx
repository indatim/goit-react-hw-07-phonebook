import { FaTimesCircle } from 'react-icons/fa';

import {
  ContactListContainer,
  ContactListItem,
  ContactListText,
  ContactListButton,
} from './ContactList.styled';

import { deleteContact } from '../../redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';

export const ContactList = () => {

  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  
  return (
    <ContactListContainer>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <ContactListText>{name}:</ContactListText>
          <ContactListText>{number}</ContactListText>
          <ContactListButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            <FaTimesCircle style={{ color: 'red', marginRight: '5' }} /> Delete
          </ContactListButton>
        </ContactListItem>
      ))}
    </ContactListContainer>
  );
};
import {
  ContactsForm,
  ContactFormLabel,
  ContactFormInput,
  ContactFormButton,
} from './ContactForm.styled';
import { addContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactForm = () => {

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const [name, number] = form.elements;
    dispatch(addContact(name.value, number.value))
    form.reset();
  };

  return (

    <ContactsForm onSubmit={handleSubmit}>
      <ContactFormLabel>
        Name
        <ContactFormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </ContactFormLabel>
      <ContactFormLabel>
        Number
        <ContactFormInput
          type="text"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </ContactFormLabel>

      <ContactFormButton type="submit">Add contact</ContactFormButton>
    </ContactsForm>
  );
}
import {
  ContactsForm,
  ContactFormLabel,
  ContactFormInput,
  ContactFormButton,
} from './ContactForm.styled';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { addContact } from '../../redux/operations';
import { selectContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const ContactForm = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const newContact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };

    for (const item of contacts) {
      if (item.name === newContact['name']) {
        Report.warning(
          'Warning!',
          `${newContact.name} is already in contacts.`,
          'Okay'
        );
        form.reset();
        return
      } 
    }

    dispatch(addContact(newContact));
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
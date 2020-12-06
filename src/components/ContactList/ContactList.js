import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactItem from './ContactItem';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.contacts}>
      {contacts.map(({ name = 'anonymous', number = 'unknown', id }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          id={id}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

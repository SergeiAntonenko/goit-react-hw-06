import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selector.js";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const searchValue = useSelector(selectNameFilter);

  const filteredContacts = contacts.items.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchValue.name.toLowerCase()) ||
      contact.number.toString().includes(searchValue.name.toString())
  );

  return (
    <ul className={css["contacts-list"]}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

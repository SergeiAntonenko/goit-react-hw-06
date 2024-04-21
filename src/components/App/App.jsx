import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import initialContacts from "../../contacts.json";
import css from "./App.module.css";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const localStorageData = window.localStorage.getItem("contacts");
    return localStorageData ? JSON.parse(localStorageData) : initialContacts;
  });
  const [searchValue, setSearchValue] = useState("");
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      contact.number.toString().includes(searchValue)
  );

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleDeleteContact = (id) => {
    const nextContacts = [...contacts];
    const index = nextContacts.findIndex((contact) => contact.id === id);
    nextContacts.splice(index, 1);
    setContacts(nextContacts);
  };

  const handleAddTour = (contactItem) => {
    setContacts((prevState) => {
      return [...prevState, contactItem];
    });
  };

  return (
    <div className={css["container"]}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddTour} />
      <SearchBox
        searchValue={searchValue}
        handleChangeSearch={handleChangeSearch}
      />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
};

export default App;

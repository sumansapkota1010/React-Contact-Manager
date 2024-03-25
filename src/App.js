import React, { useState } from "react";
import Contact from "./components/Contact";
import "./styles/app.css";
import ContactAddder from "./components/ContactAdder";
import NavBar from "./components/NavBar";

const App = () => {
  const getContact = JSON.parse(localStorage.getItem("contacts"));
  const [contacts, setContacts] = useState(getContact ? getContact : []);
  const addContactData = (contactData) => {
    const allContacts = [contactData, ...contacts];
    setContacts(allContacts);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };
  const clearContact = () => {
    localStorage.clear();
    setContacts([]);
  };
  return (
    <>
      <NavBar></NavBar>
      <div className="contact_adder">
        <ContactAddder onContactAdded={addContactData} />
      </div>
      <div className="contact_list">
        <h3> Contact List</h3>

        {contacts.map((data) => (
          <Contact data={data}></Contact>
        ))}
        <button onClick={clearContact} style={{ background: "#FF7F7F" }}>
          Clear All Contacts
        </button>
      </div>
    </>
  );
};

export default App;

import { useState } from "react";

const ContactAddder = (props) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");

  const onsubmitHandler = (e) => {
    e.preventDefault();
    const contactData = { name, number: mobile, location };

    if (name.length < 1 || mobile.length < 1 || location.length < 1) {
      alert("Please fill up the field");
    } else {
      props.onContactAdded(contactData);
    }
  };

  return (
    <>
      <form onSubmit={onsubmitHandler}>
        <div className="contact_addder">
          <h3>Contact adder:</h3>
          <input
            type="text"
            value={name}
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={mobile}
            placeholder="Your Number"
            onChange={(e) => setMobile(e.target.value)}
          />
          <input
            type="location"
            value={location}
            placeholder="Your location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <br /> <br />
          <button onClick={onsubmitHandler}>Add Contact</button>
        </div>
      </form>
    </>
  );
};
export default ContactAddder;

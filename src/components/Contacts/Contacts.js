import React, { useState } from "react";
import data from "../../data";
import Contact from "../Contact/Contact";

function Contacts() {
  const [ch, setCh] = useState(data.length);
  const [contacts, setContacts] = useState(data);

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  return (
    <div className="container">
      {contacts.map((c) => (
        <Contact key={c.id} c={c} setC={setContacts} contacts={contacts} />
      ))}
      <div className="card">
        <div>
          Имя:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          Tel:{" "}
          <input
            type="text"
            value={tel}
            onChange={(e) => {
              setTel(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            if (name && tel) {
              setContacts([...contacts, { id: ch, name, tel }]);
              setCh((c) => c + 1);
            }
          }}
        >
          Добавить
        </button>
      </div>
    </div>
  );
}

export default Contacts;

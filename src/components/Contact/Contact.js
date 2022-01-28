import React, { useState } from "react";

function Contact({ c, setC, contacts }) {
  const [edit, setEdit] = useState(false);
  const [contact, setContact] = useState(c);
  return (
    <div className="card">
      {edit ? (
        <>
          <div>
            Имя:{" "}
            <input
              type="text"
              value={contact.name}
              onChange={(e) => {
                setContact({ ...contact, name: e.target.value });
              }}
            />
          </div>
          <div>
            тел.:{" "}
            <input
              type="text"
              value={contact.tel}
              onChange={(e) => {
                setContact({ ...contact, tel: e.target.value });
              }}
            />
          </div>
          <button
            onClick={() => {
              let arr = [...contacts];
              arr.forEach((el, i) => {
                if (el.id === contact.id) {
                  arr[i] = contact;
                }
              });
              setC(arr);
              setEdit(false);
            }}
          >
            Сохранить
          </button>
          <button
            onClick={() => {
              setC([...contacts].filter((el) => el.id !== contact.id));
              setEdit(false);
            }}
          >
            Удалить
          </button>
        </>
      ) : (
        <>
          <div>Имя: {contact.name}</div>
          <div>тел.: {contact.tel}</div>{" "}
          <button
            onClick={() => {
              setEdit(true);
            }}
          >
            Изменить
          </button>
        </>
      )}
    </div>
  );
}

export default Contact;

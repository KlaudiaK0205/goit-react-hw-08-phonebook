// import { nanoid } from 'nanoid';
// import React from 'react';
// import { useContactsQuery, useAddContactMutation } from 'redux/contacts';
// import style from './PhonebookForm.module.css';

// const PhonebookForm = () => {
//   const id = nanoid();

//   const { data } = useContactsQuery();
//   const [addContact] = useAddContactMutation();

//   const addNewContact = e => {
//     e.preventDefault();

//     const form = e.currentTarget;
//     const name = form.name.value;
//     const phone = form.phone.value;
//     const normalizedName = name.toLowerCase();
//     let nameOntheList = false;

//     const newContact = {
//       id: nanoid(),
//       name: name,
//       phone: phone,
//     };

//     data.forEach(contact => {
//       if (contact.name.toLowerCase() === normalizedName) {
//         alert(`${contact.name} is already in contacts`);
//         nameOntheList = true;
//       }
//     });

//     if (nameOntheList) return;

//     addContact(newContact);
//     form.reset();
//   };

//   return (
//     <form className={style.form} onSubmit={addNewContact}>
//       <label htmlFor={id} className={style.formText}>Name</label>
      
//       <input
//         className={style.formInput}
//         id={id}
//         type="text"
//         name="name"
//         placeholder ='Name'
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />
//       <label htmlFor={id} className={style.formText}>Phone</label>
//       <input
//         className={style.formInput}
//         id={id}
//         type="tel"
//         name="phone"
//         placeholder='Phone Number'
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//       />
//       <button className={style.formBtn} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// };

// export default PhonebookForm;

import { nanoid } from 'nanoid';
import TextField from '@mui/material/TextField';

import React from 'react';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contacts';
import { toast } from 'react-toastify';
import style from './PhonebookForm.module.css';

const PhonebookForm = () => {
  const id = nanoid();

  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const addNewContact = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name.value;
    const number = form.number.value;
    const normalizedName = name.toLowerCase();
    let nameOntheList = false;

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    data.forEach(contact => {
      if (contact.name.toLowerCase() === normalizedName) {
        toast.info(`${contact.name} is already in contacts`, {
  icon: "🦄",  theme: "dark"
});
        nameOntheList = true;
        
      }
    });

    if (nameOntheList) return;

    addContact(newContact);
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={addNewContact}>
      <label htmlFor={id} className={style.formText}></label>
      
      <TextField
        className={style.formInput}
        label="Name"
        id={id}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        color="secondary" 
      />
      <label htmlFor={id} className={style.formText}></label>
      <TextField
        className={style.formInput}
        label="Phone Number"
        id={id}
        required
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
       color="secondary" 
      />
      <button className={style.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default PhonebookForm;
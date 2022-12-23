import React from 'react';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import { Filter } from './Filter/Filter';
import { PhonebookList } from './PhonebookList/PhonebookList';
import style from './App.module.css';

export const App = () => {

  return (
    <div className={style.container}>
      <h1>Phonebook</h1>
      <div className={style.wrapper}>
      <PhonebookForm />
      <Filter />
      </div>
      <PhonebookList/>
    </div>
  );
};
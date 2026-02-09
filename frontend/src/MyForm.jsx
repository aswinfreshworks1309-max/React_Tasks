import React from 'react'
import {Formik,ErrorMessage,Field} from 'formik';
import * as yup from 'yup';

const MyForm = () => {

    <Formik/>
  return (
    <div>
      <form action="" type = 'submit'>
        <label htmlFor="name">name</label><br />
        <input type="text" placeholder='name' /><br /><br />
        <label htmlFor="password">password</label><br />
        <input type="text"  placeholder='password'/><br /><br />
        <label htmlFor="email">email</label><br />
        <input type="text"placeholder='email' /><br /><br />
        <button>click to submit</button>
      </form>
    </div>
  )
}

export default MyForm

import React from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ errors, touched, values, status }) => {

    return (
      <div className="form-container">
        <h1>Form</h1>
        <Form className="userform">

          <Field type="text" name="name" placeholder="Name" />
            {touched.name && errors.name && (
              <p className="error">{errors.name}</p>
            )}

          <Field type="text" name="password" placeholder="Password" />
            {touched.password && errors.password && (
              <p className="error">{errors.password}</p>
            )}

        </Form>
      </div>
    )
  }

  const FormikUserForm = withFormik({
    mapPropsToValues({ name, password }) {
      return {
        name: name || '',
        password: password || ''
      }
    },

    validationSchema: Yup.object().shape({
      name: Yup.string().required('Please enter your name here'),
      password: Yup.string(6).required('Password here, NOW!')
    })
  })(UserForm) //end UserForm

export default FormikUserForm;



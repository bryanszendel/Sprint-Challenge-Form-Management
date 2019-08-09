import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ errors, touched, values, status }) => {

  const [user, setUser] = useState([])
  useEffect(() => {
    if (status) {
      setUser(user => status)
    }
  }, [status])

    return (
      <div className="form-container">
        <h1>Form</h1>
        <Form className="userform">

          <Field type="text" name="username" placeholder="Username" />
            {touched.username && errors.username && (
              <p className="error">{errors.username}</p>
            )}

          <Field type="text" name="password" placeholder="Password" />
            {touched.password && errors.password && (
              <p className="error">{errors.password}</p>
            )}

          <button type="submit">Submit</button>
        </Form>
        <div>
          {user.message}
        </div>
      </div>
    )
  }

  const FormikUserForm = withFormik({
    mapPropsToValues({ username, password }) {
      return {
        username: username || '',
        password: password || ''
      }
    },

    validationSchema: Yup.object().shape({
      username: Yup.string().required('Please enter your name here'),
      password: Yup.string(6).required('Password here, NOW!')
    }),

    handleSubmit(values, {setStatus}) {
      console.log('form submitted', values);
      axios
        .post('http://localhost:5000/api/register', values)
        .then(res => {
          setStatus(res.data)
        })
        .catch(err => console.log(err.response))
    }

  })(UserForm) //end UserForm

export default FormikUserForm;



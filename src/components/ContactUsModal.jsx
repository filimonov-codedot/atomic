import React, { useState } from 'react'
import { ModalWrapper } from './ModalWrapper'

const encode = (data) => Object.keys(data).
  map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).
  join('&')

export const ContactUsModal = ({ onClose }) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values })
    }).
      then(() => console.log('Success!')).
      catch((error) => console.log(error))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <ModalWrapper onClose={() => onClose(false)} modalType="form">
      <div className="modal-form-wrapper">
        <h2>Contact us</h2>
        <form data-netlify="true" onSubmit={handleSubmit}>
          <input
            value={values.name}
            onChange={handleChange}
            name='name'
            type="text"
            placeholder="Your name"
            required
          />
          <input
            value={values.email}
            onChange={handleChange}
            name='email'
            type="email"
            placeholder="Email address"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            value={values.message}
            onChange={handleChange}
            name='message'
            id="message"
            required
          />
          <button type="submit" className="btn btn-input">Send</button>
        </form>
      </div>
    </ModalWrapper>
  )
}

import React, { useState } from "react"
import NetlifyForm from "react-ssg-netlify-forms"

import { ModalWrapper } from "./ModalWrapper"

export const ContactUsModal = ({ isOpenContactModal, onClose }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [msg, setMsg] = useState(null)

  const handleChange = ({ target: { name, value } }) =>
    setValues({ ...values, [name]: value })

  const handleSuccess = () => {
    setValues({
      name: "",
      email: "",
      message: ""
    })
    setMsg("Thank you! Your form was submitted.")
    setTimeout(() => {
      setMsg(null)
    }, 5000)
  }

  const handleError = () => {
    setMsg("Error.")
    setTimeout(() => {
      setMsg(null)
    }, 5000)
  }

  return (
    <>
      <NetlifyForm
        formName="Contact us"
        formValues={values}
        postSubmit={handleSuccess}
      >
        <input type="text" name="name" value={values.name} hidden />
        <input type="email" name="email" value={values.email} hidden />
        <textarea name="message" value={values.message} hidden />
      </NetlifyForm>
      {isOpenContactModal && (
        <ModalWrapper
          onClose={() => onClose()}
          modalType="form"
        >
          <div className="modal-form-wrapper">
            <h2>Contact us</h2>
            <NetlifyForm formName="Contact us" formValues={values}>
              <div className="field-wrapper">
                <input
                  id='name'
                  type="text"
                  name='name'
                  value={values.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name">Your name</label>
              </div>
              <div className="field-wrapper">
                <input
                  id='email'
                  type="email"
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Email address</label>
              </div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name='message'
                value={values.message}
                onChange={handleChange}
                required
              />
              <div className='field-wrapper-bottom'>
                <button
                  type="submit"
                  className="btn btn-input"
                  disabled={values.name || values.email || values.message ? "" : "disabled"}
                >
                  Send
                </button>
                {msg ? <p>{msg}</p> : null}
              </div>
            </NetlifyForm>
          </div>
        </ModalWrapper>
      )}
    </>
  )
}

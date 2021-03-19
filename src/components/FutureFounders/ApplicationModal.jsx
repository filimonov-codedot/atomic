import * as React from "react"
import Select from "react-select"
import Recaptcha from "react-google-recaptcha"
import * as yup from "yup"
import { useFormik } from "formik"

import NetlifyForm from "../NetlifyForm"
import { ModalWrapper } from "../ModalWrapper"

const RECAPTCHA_KEY = "6Lcf4IQaAAAAAEvHy2QajeAmGNSWPBFaW0jXRGw5"

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string("Enter your phone number")
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
      "Enter a valid phone number"
    )
    .required("Phone number is required"),
  linkedinUrl: yup
    .string("Enter your Linkedin URL")
    .url("Enter a valid URL")
    .required("Linkedin URL is required"),
  twitterUrl: yup.string("Enter your twitter URL").url("Enter a valid URL"),
  githubUrl: yup.string("Enter your github URL").url("Enter a valid URL"),
  portfolioUrl: yup
    .string("Enter your portfolio4 URL")
    .url("Enter a valid URL"),
  otherLink: yup.string("Enter a valid URL").url(),
  USEmploymentAuthorization: yup
    .string("Enter your US Employment Authorization")
    .required("US Employment Authorization is required"),
})

export default function ApplicationModal({ isOpen, onClose }) {
  const [isSent, setIsSent] = React.useState(false)
  const [recaptchaState, setRecaptchaState] = React.useState(false)
  const formik = useFormik({
    initialValues: {
      name: "Vlad",
      email: "vlad@gmail.com",
      phone: "+375291234567",
      linkedinUrl: "http://atomic.vc/",
      twitterUrl: "",
      githubUrl: "",
      portfolioUrl: "",
      otherLink: "",
      file: "",
      referrals: "",
      anythingElse: "",
      USEmploymentAuthorization: "Yes",
      gender: "",
      race: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => true,
  })

  const postSubmit = () => setIsSent(true)

  const themeSelect = theme => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary: "#F2571F",
      primary75: "rgb(242, 87, 31, .75)",
      primary50: "rgb(242, 87, 31, .5)",
      primary25: "rgb(242, 87, 31, .25)",
    },
  })

  const isValid = !!formik.values.name && !formik.errors.name && formik.isValid
  return (
    <>
      <NetlifyForm
        formName="Future Founder"
        formValues={formik.values}
        postSubmit={postSubmit}
        isValid={isValid}
      >
        <input
          type="text"
          name="name"
          defaultValue={formik.values.name}
          hidden
        />
        <input
          type="text"
          name="email"
          defaultValue={formik.values.email}
          hidden
        />
        <input
          type="text"
          name="phone"
          defaultValue={formik.values.phone}
          hidden
        />
        <input
          type="text"
          name="linkedinUrl"
          defaultValue={formik.values.linkedinUrl}
          hidden
        />
        <input
          type="text"
          name="twitterUrl"
          defaultValue={formik.values.twitterUrl}
          hidden
        />
        <input
          type="text"
          name="githubUrl"
          defaultValue={formik.values.githubUrl}
          hidden
        />
        <input
          type="text"
          name="portfolioUrl"
          defaultValue={formik.values.portfolioUrl}
          hidden
        />
        <input
          type="text"
          name="otherLink"
          defaultValue={formik.values.otherLink}
          hidden
        />
        <input
          type="text"
          name="file"
          defaultValue={formik.values.file}
          hidden
        />
        <textarea
          name="areasOfInterest"
          defaultValue={formik.values.areasOfInterest}
          hidden
        />
        <input
          type="text"
          name="referrals"
          defaultValue={formik.values.referrals}
          hidden
        />
        <input
          type="text"
          name="USEmploymentAuthorization"
          defaultValue={formik.values.USEmploymentAuthorization}
          hidden
        />
        <textarea
          name="anythingElse"
          defaultValue={formik.values.anythingElse}
          hidden
        />
        <input
          type="text"
          name="gender"
          defaultValue={formik.values.gender}
          hidden
        />
        <input
          type="text"
          name="race"
          defaultValue={formik.values.race}
          hidden
        />
        <input
          type="text"
          name="veteranStatus"
          defaultValue={formik.values.veteranStatus}
          hidden
        />
      </NetlifyForm>
      {isOpen && (
        <ModalWrapper onClose={onClose} modalType="custom-form">
          <div className="modal-form-wrapper">
            <h2>Apply as a Future Founder</h2>
            {!isSent ? (
              <>
                <NetlifyForm
                  formName="Future Founder"
                  formValues={formik.values}
                  postSubmit={postSubmit}
                  isValid={isValid}
                >
                  <div
                    className={[
                      "field-wrapper",
                      formik.touched.name &&
                        Boolean(formik.errors.name) &&
                        "error",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <label htmlFor="name">Your name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.name && Boolean(formik.errors.name) && (
                      <span className="helper-text">{formik.errors.name}</span>
                    )}
                  </div>
                  <div
                    className={[
                      "field-wrapper",
                      formik.touched.email &&
                        Boolean(formik.errors.email) &&
                        "error",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <label htmlFor="email">Email address *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.email && Boolean(formik.errors.email) && (
                      <span className="helper-text">{formik.errors.email}</span>
                    )}
                  </div>
                  <div
                    className={[
                      "field-wrapper",
                      formik.touched.phone &&
                        Boolean(formik.errors.phone) &&
                        "error",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <label htmlFor="phone">Phone number *</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.phone && Boolean(formik.errors.phone) && (
                      <span className="helper-text">{formik.errors.phone}</span>
                    )}
                  </div>
                  <h3 className="gutter-bottom">Links</h3>
                  <div
                    className={[
                      "field-wrapper",
                      formik.touched.linkedinUrl &&
                        Boolean(formik.errors.linkedinUrl) &&
                        "error",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <label htmlFor="linkedinUrl">Linkedin URL *</label>
                    <input
                      id="linkedinUrl"
                      type="url"
                      name="linkedinUrl"
                      value={formik.values.linkedinUrl}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.linkedinUrl &&
                      Boolean(formik.errors.linkedinUrl) && (
                        <span className="helper-text">
                          {formik.errors.linkedinUrl}
                        </span>
                      )}
                  </div>
                  <div className="field-wrapper">
                    <label htmlFor="twitterUrl">Twitter URL</label>
                    <input
                      id="twitterUrl"
                      type="url"
                      name="twitterUrl"
                      value={formik.values.twitterUrl}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="field-wrapper">
                    <label htmlFor="githubUrl">Github URL</label>
                    <input
                      id="githubUrl"
                      type="url"
                      name="githubUrl"
                      value={formik.values.githubUrl}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="field-wrapper">
                    <label htmlFor="portfolioUrl">Portfolio URL</label>
                    <input
                      id="portfolioUrl"
                      type="url"
                      name="portfolioUrl"
                      value={formik.values.portfolioUrl}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="field-wrapper">
                    <label htmlFor="otherLink">Other link</label>
                    <input
                      id="otherLink"
                      type="url"
                      name="otherLink"
                      value={formik.values.otherLink}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <h3>Additional Options</h3>
                  <div className="comment">
                    Feel free to submit anything else you feel would be helpful
                    or would like us to consider – code, website, slide deck,
                    video, etc.
                  </div>
                  <h3>Referrals</h3>
                  <div className="comment">
                    Know someone who would be a good fit for the Future Founders
                    program? Please provide their LinkedIn or email.
                  </div>
                  <div className="field-wrapper">
                    <label htmlFor="referrals">Linkedin or email</label>
                    <input
                      id="referrals"
                      type="url"
                      name="referrals"
                      value={formik.values.referrals}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <h3>Anything else?</h3>
                  <div className="comment">
                    You can add a note, cover letter, areas of interest, unique
                    background in a specific vertical, or anything else you
                    might want to share.
                  </div>
                  <textarea
                    id="anythingElse"
                    name="anythingElse"
                    value={formik.values.anythingElse}
                    onChange={formik.handleChange}
                  />
                  <h3>US Employment Authorization</h3>
                  <div className="comment">
                    Do you now, or will you in the future, require sponsorship
                    for employment visa status to work legally for our Company
                    in the US? *
                  </div>
                  <div
                    className={[
                      "field-wrapper",
                      "field-radio-wrapper",
                      formik.touched.USEmploymentAuthorization &&
                        Boolean(formik.errors.USEmploymentAuthorization) &&
                        "error",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <label className="label-container">
                      <input
                        type="radio"
                        name="USEmploymentAuthorization"
                        value="Yes"
                        onChange={formik.handleChange}
                        checked={
                          formik.values.USEmploymentAuthorization === "Yes"
                        }
                      />
                      Yes
                    </label>
                    <label className="label-container">
                      <input
                        type="radio"
                        name="USEmploymentAuthorization"
                        value="No"
                        onChange={formik.handleChange}
                        checked={
                          formik.values.USEmploymentAuthorization === "No"
                        }
                      />
                      No
                    </label>
                    {formik.touched.USEmploymentAuthorization &&
                      Boolean(formik.errors.USEmploymentAuthorization) && (
                        <span className="helper-text">
                          {formik.errors.USEmploymentAuthorization}
                        </span>
                      )}
                  </div>
                  <h3>Equal Employment Opportunity Information</h3>
                  <div className="comment">
                    Completion is voluntary and will not subject you to adverse
                    treatment.
                    <br />
                    <br />
                    Our company values diversity. To ensure that we comply with
                    reporting requirements and to learn more about how we can
                    increase diversity in our candidate pool, we invite you to
                    voluntarily provide demographic information in a
                    confidential survey at the end of this application.
                    Providing this information is optional. It will not be
                    accessible or used in the hiring process, and has no effect
                    on your opportunity for employment.
                  </div>
                  <div className="field-wrapper">
                    <label htmlFor="referrals">Gender</label>
                    <Select
                      className="custom-select"
                      classNamePrefix="custom-select"
                      isSearchable={false}
                      options={[
                        { value: "Male", label: "Male" },
                        { value: "Female", label: "Female" },
                        {
                          value: "Decline to self-identify",
                          label: "Decline to self-identify",
                        },
                      ]}
                      theme={themeSelect}
                      onChange={option =>
                        formik.setFieldValue("gender", option.value)
                      }
                    />
                  </div>
                  <div className="field-wrapper">
                    <label htmlFor="referrals">Race</label>
                    <Select
                      className="custom-select"
                      classNamePrefix="custom-select"
                      isSearchable={false}
                      options={[
                        {
                          value: "Hispanic or Latino",
                          label: "Hispanic or Latino",
                        },
                        {
                          value: "White (Not Hispanic or Latino)",
                          label: "White (Not Hispanic or Latino)",
                        },
                        {
                          value:
                            "Black or African American (Not Hispanic or Latino)",
                          label:
                            "Black or African American (Not Hispanic or Latino)",
                        },
                        {
                          value:
                            "Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)",
                          label:
                            "Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)",
                        },
                        {
                          value: "Asian (Not Hispanic or Latino)",
                          label: "Asian (Not Hispanic or Latino)",
                        },
                        {
                          value:
                            "American Indian or Alaska Native (Not Hispanic or Latino)",
                          label:
                            "American Indian or Alaska Native (Not Hispanic or Latino)",
                        },
                        {
                          value: "Two or More Races (Not Hispanic or Latino)",
                          label: "Two or More Races (Not Hispanic or Latino)",
                        },
                        {
                          value: "Decline to self-identify",
                          label: "Decline to self-identify",
                        },
                      ]}
                      theme={themeSelect}
                      onChange={option =>
                        formik.setFieldValue("race", option.value)
                      }
                    />
                  </div>
                  <div className="field-wrapper">
                    <label htmlFor="referrals">Veteran Status</label>
                    <Select
                      className="custom-select"
                      classNamePrefix="custom-select"
                      isSearchable={false}
                      options={[
                        { value: "I am a veteran", label: "I am a veteran" },
                        {
                          value: "I am not a veteran",
                          label: "I am not a veteran",
                        },
                        {
                          value: "Decline to self-identify",
                          label: "Decline to self-identify",
                        },
                      ]}
                      theme={themeSelect}
                      onChange={option =>
                        formik.setFieldValue("veteranStatus", option.value)
                      }
                    />
                  </div>
                  <Recaptcha
                    style={{ marginTop: "32px" }}
                    sitekey={RECAPTCHA_KEY}
                    onChange={value => setRecaptchaState(!!value)}
                  />
                  <button
                    type="submit"
                    className="btn btn-black btn-block"
                    disabled={!recaptchaState}
                  >
                    Submit Application
                  </button>
                </NetlifyForm>
              </>
            ) : (
              <>
                <h3 className="gutter-top">Success!</h3>
                <span className="success-comment">
                  Thank you for your application.
                </span>
              </>
            )}
          </div>
        </ModalWrapper>
      )}
    </>
  )
}

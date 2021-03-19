import React, { useState, useEffect } from "react"

export default function NetlifyForm({
  formName,
  preSubmit,
  postSubmit,
  formValues,
  children,
  isValid = null,
}) {
  // Build determination
  const [inNetlifyBuild, setInNetlifyBuild] = useState(true)
  useEffect(() => {
    setInNetlifyBuild(false)
  }, [])

  // Transform object to proper form data
  const encode = data => {
    const formData = new FormData()

    for (const key of Object.keys(data)) formData.append(key, data[key])

    return formData
  }

  // Submit via POST then pass back true
  const handleSubmit = async () => {
    return await fetch("/", {
      method: "POST",
      body: encode({
        ...formValues,
        "form-name": formName,
        infoo: honey,
      }),
    })
  }

  // Wrapper for pre, submit, post
  const onSubmit = async e => {
    e.preventDefault()

    if (preSubmit) await preSubmit()

    if (typeof isValid === null || (typeof isValid !== null && isValid)) {
      if (await handleSubmit()) {
        postSubmit && postSubmit()
      } else {
        // Figure out how to handle this better
        // It shouldn't happen, but you never know
        throw new Error("Error submitting to Netlify")
      }
    } else {
      console.log("preSubmit false")
    }
  }

  // Honeypot Input state
  const [honey, setHoney] = useState("")

  return inNetlifyBuild ? (
    <form
      name={formName}
      onSubmit={onSubmit}
      data-netlify="true"
      netlify-honeypot="infoo"
    >
      {children}
    </form>
  ) : (
    <form onSubmit={onSubmit}>
      {children}
      <p style={{ opacity: "0", position: "absolute", top: "0", left: "0" }}>
        <input
          style={{ width: "0", height: "0", zIndex: "-1" }}
          name="description"
          aria-label="description"
          value={honey}
          onChange={e => setHoney(e.target.value)}
        />
      </p>
    </form>
  )
}

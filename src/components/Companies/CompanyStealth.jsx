import React from 'react'

export const CompanyStealth = ({ stealthCompanies }) => {
  const companies = stealthCompanies.reduce((p, c) => {
    if (p[p.length - 1].length === 4) p.push([])
    p[p.length - 1].push(c)
    return p
  }, [[]])

  return (
    <div className="stealth-companies">
      <div className="container">
        <h2>Stealth Companies</h2>
        <div className="stealth-companies-wrapper">
          {companies.map((item, mainIndex) => (
            <ul key={mainIndex}>
              {item.map(({ name }, index) => (
                <li key={index}>{name}</li>
              ))}
              {mainIndex === companies.length - 1 && (
                <li><i>and dozens more</i></li>
              )}
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}

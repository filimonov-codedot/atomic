import React, { useEffect, useState } from "react"

import { CompanyItemLink } from "./CompanyItemLink"
import { CompanyItemList } from "./CompanyItemList"
import { Dropdown } from "../../Dropdown"

export const TeamCompanies = ({ contentfulCompanies }) => {
  const [data, setData] = useState([])
  const [selectedCompany, setSelectedCompany] = useState("")

  useEffect(() => {
    if (!data.length) {
      const fetchData = async () => {
        await fetch(
          `https://api.lever.co/v0/postings/atomic?group=team&mode=json`,
          { method: "GET" }
        )
          .then(response => {
            if (response.ok && response.status === 200) return response.json()
          })
          .then(result => {
            setData(result)
          })
          .catch(error => {
            if (process.env.NODE_ENV === "development") console.error(error)
          })
      }
      fetchData()
    }
  }, [data.length])

  const onChange = name => setSelectedCompany(name)

  if (data.length) {
    const companies = [...data, ...contentfulCompanies].sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    )
    return (
      <div className="select-company" id="select-company">
        <div className="container">
          <div className="select-company-header">
            <Dropdown
              data={companies}
              name="companies"
              defaultItem={{ title: "All companies" }}
              onChange={(name, value) => onChange(value)}
            />
          </div>
          <div className="select-company-content">
            {companies
              .filter(
                company =>
                  !(selectedCompany && selectedCompany !== company.title)
              )
              .map((company, index) => {
                if (company.hasOwnProperty("link")) {
                  return <CompanyItemLink {...company} key={index} />
                } else {
                  return <CompanyItemList {...company} key={index} />
                }
              })}
          </div>
        </div>
      </div>
    )
  }
  return null
}

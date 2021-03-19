import React, { useEffect } from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/Layout"

export default function CCPA({ data }) {
  const {
    site: {
      siteMetadata: { title },
    },
    globalMetaData,
    headerData,
    footerData,
    privacyPage: {
      metaData,
      text: { html },
      tickerDuration,
      tickerData,
    },
  } = data

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.scrollTop = 0
  }, [])

  return (
    <Layout
      globalMetaData={globalMetaData}
      metaData={metaData}
      pageTitle="CCPA"
      title={title}
      headerData={headerData}
      tickerDuration={tickerDuration}
      tickerData={tickerData}
      ctaDisplay={false}
      footerData={footerData}
    >
      <div className="ccpa page-content">
        {/*        {html && (
          <div
            className="container"
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        )} */}

        <div className="container">
          <div>
            PRIVACY NOTICE TO CALIFORNIA JOB APPLICANTS
            REGARDING THE COLLECTION OF PERSONAL INFORMATION
          </div>
          <div>Introduction</div>
          <div>
            Atomic Labs, LLC, and its operating groups, subsidiaries and
            affiliates, (the “<b>Company</b>,” “<b>us</b>” or “<b>we</b>”) are committed to
            protecting the privacy and security of the personal information you
            provide to us. Please read this Job Applicant Privacy Notice (the
            “Privacy Notice”) to learn how we collect and process your personal
            information when you apply for a job or other role with us. As a job
            applicant, you have the right to know and understand the categories
            of personal information we collect about you, and the purposes for
            which we use such personal information, pursuant to the California
            Consumer Privacy Act of 2018 (the “<b>CCPA</b>”). This Privacy Notice only
            applies to job applicants who are residents of the State of
            California. The Company does not sell or otherwise disclose this
            personal information for monetary or other consideration to any
            third parties.
          </div>
          <div>Categories of Personal Information Collected</div>
          <div>
            In each case as permitted by applicable law, we collect the
            following categories of personal information for the purposes
            described below:
          </div>
          <ul>
            <li>
              <b>Personal identifiers</b>, such as your name, preferred name, postal
              address, unique personal identifier, online identifier, Internet
              Protocol address, email address, account name, Social Security
              number, date of birth, and other similar identifiers.
            </li>
            <li>
              <b>Personal Records</b>, such as your signature, Social Security number,
              address, telephone number, education, employment or employment
              history.
            </li>
            <li>
              <b>Protected characteristics</b>, such as minority, veteran and disability
              status, through voluntary self-disclosure. Such information will
              only be collected as permitted by applicable law and will not be
              used to make hiring decisions.
            </li>
            <li>
              <b>Internet or other similar network activity information</b>, such as your
              IP address, log-in information or information regarding your
              interaction with a website, application or advertisement.
            </li>
            <li>
              <b>Geolocation Data</b>, such as IP addresses from which we can determine
              your general location.
            </li>
            <li>
              <b>Sensory data</b>, such as audio and visual information, for example if
              you use video interviewing as part of the application process. If
              you visit our facilities, your entry and exit may be monitored by
              CCTV.
            </li>
            <li>
              <b>Professional or employment-related information</b>, such as your work
              history, references, information about skills and abilities,
              accomplishments and awards, training and development information,
              performance evaluation information, and employment termination
              information.
            </li>
            <li>
              <b>Education information</b>, such as your education history, education
              records (such as grades, transcripts and class lists), and other
              information included in your resume or cover letter.
            </li>
            <li>
              <b>Inferences drawn from other personal information</b>, such as a profile
              reflecting your preferences, characteristics, psychological trends,
              predispositions, behavior, attitudes, intelligence, abilities and
              aptitudes.
            </li>
            <li>
              <b>Other</b>: Job interview notes, responses to screening questions,
              assessment results, and any other information you provide in
              connection with the recruitment process. We also collect legal and
              contractual information, such as information necessary to respond to
              law enforcement and governmental agency requests, comply with legal
              and contractual obligations, exercise legal and contractual rights,
              and initiate or respond to, or establish, exercise and defend, legal
              and contractual rights claims.
            </li>
          </ul>
          <div>Sources of Personal Information</div>
          <div>
            We collect personal information you voluntarily provide to us when
            you apply for a job or otherwise contact us in the recruitment
            context. If you are visiting our website or online job application,
            we may also automatically collect device information such as IP
            addresses and device identifiers.
          </div>
          <div>
            We may also combine personal information collected from other
            sources with the personal information that you provide to us. For
            example, we may collect information from:
          </div>
          <div>Recruiters</div>
          <div>Prior employers (e.g., for references)</div>
          <div>Professional references you provide to us</div>
          <div>Educational institutions</div>
          <div>Pre-employment screening services</div>
          <div>Credentialing and licensing organizations</div>
          <div>
            Publicly available sources such as your social media profile (e.g.,
            LinkedIn, Twitter and Facebook)
          </div>
          <div>Other sources as directed by you</div>
          <div>Use of Personal Information</div>
          <div>
            {" "}
            We use the categories of personal information listed above for the
            following purposes:
          </div>
          <div>
            Process and manage your application: We use your personal
            information to process your job application, establish a job
            applicant profile for the recruitment process, assess your
            qualifications for a specific role with us, schedule and conduct
            interviews, communicate with you, and carry out background and
            reference checks (see the following bullet point for additional
            information). We may collect audio and visual information of job
            applicants through photographs used for identification purposes.
            With your consent, we may record video of you in connection with the
            application process, for example through a third party screening
            service. Additionally, if you are offered a position with us, we may
            use your personal information in the employee on-boarding process.
          </div>
          <div>
            Conduct reference and background checks (as permitted by applicable
            law): We use personal information we collect to conduct reference
            checks and to evaluate your qualifications and experience. We may
            also conduct background checks (as authorized by you and permitted
            by applicable law).
          </div>
          <div>
            Provide immigration support: If applicable and as permitted by
            applicable law, we may collect your personal information to assist
            with immigration support, such as applying for visas or work
            permits.
          </div>
          <div>
            Analyze and improve our recruitment process and tools: For example,
            we analyze trends in our applicant pool, and use personal
            information to understand and improve our recruitment process and
            tools (including improving diversity and inclusion). If you use our
            online job application process, we collect personal information in
            this category, such as your interactions with our “Careers” page and
            our online application process.
          </div>
          <div>
            Record-keeping: We keep records of your personal information as
            required by law and in accordance with our record retention
            policies.
          </div>
          <div>
            Meeting legal requirements and enforcing legal terms: We collect and
            process your personal information for purposes of: fulfilling our
            legal obligations under applicable law, regulation, court order or
            other legal process, such as preventing, detecting and investigating
            security incidents and potentially illegal or prohibited activities;
            protecting the rights, property or safety of you, us or another
            party; enforcing any agreements with you; responding to claims; and
            resolving disputes. Additionally, we may use information about
            protected characteristics to analyze and monitor the diversity of
            our job applicants in accordance with applicable laws.
          </div>
          <div>Disclosure of Personal Information</div>
          <div>
            We may share your personal information as necessary for the purposes
            described in this Privacy Notice, including internally with our
            personnel involved in the hiring process. For example, we share your
            personal information with the following parties:
          </div>
          <div>
            Affiliates: We may share your personal information with our
            affiliates.
          </div>
          <div>
            Service Providers: We use service providers to operate, host and
            facilitate our hiring and recruitment process. These include
            hosting, technology and communication providers; security and fraud
            prevention consultants; analytics providers; background and
            reference check screening services; and hiring process management
            tools.
          </div>
          <div>
            Government authorities and law enforcement: In certain situations,
            we may be required to disclose Personal Data in response to lawful
            requests by public authorities, including to meet national security
            or law enforcement requirements.
          </div>
          <div>
            Business transfers: Your personal information may be transferred to
            a third party if we undergo a merger, acquisition, bankruptcy or
            other transaction in which that third party assumes control of our
            business (in whole or in part).
          </div>
          <div>
            Professional advisors: We may share your personal information with
            our professional advisors.
          </div>
          <div>
            Other: We may also share your personal information with third
            parties in conjunction with any of the activities set forth under
            “Meeting legal requirements and enforcing legal terms” in the “Use
            of Personal Information” section above.
          </div>
          <div>Contact for Questions</div>
          <div>
            If you have any questions or concerns regarding this Privacy Notice
            or the collection of your personal information, please contact:
            Human Resources at hr@atomic.vc. Job applicants with disabilities
            may access this notice in an alternative format by contacting
            hr@atomic.vc.
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query CCPAQuery {
    site {
      siteMetadata {
        title
      }
    }
    globalMetaData: contentfulGlobalMetaData {
      desc {
        desc
      }
      keywords {
        keywords
      }
      image {
        file {
          src: url
        }
      }
    }
    headerData: contentfulSectionHeader {
      logo {
        file {
          src: url
        }
        alt: title
      }
      logoMobile {
        file {
          src: url
        }
        alt: title
      }
    }
    footerData: contentfulSectionFooter {
      email
      secondEmail
      social {
        icon {
          file {
            src: url
          }
          alt: title
        }
        link
      }
      newsletterTitle
      logo {
        file {
          src: url
        }
        alt: title
      }
      copyright
    }
    privacyPage: contentfulPageCcpa {
      metaData {
        title
        desc {
          desc
        }
        keywords {
          keywords
        }
        image {
          file {
            src: url
          }
        }
      }
      text {
        html: text
      }
      tickerDuration {
        duration
      }
      tickerData: ticker {
        id
      }
    }
  }
`

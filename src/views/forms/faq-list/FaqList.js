import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FaqList = () => {
  const [faqData, setFaqData] = useState([])
  const [toggle, setToggle] = useState(null)

  useEffect(() => {
    const api = 'https://www.pravaayu.com/api/all-faqs'

    const fetchFaq = async () => {
      try {
        const response = await axios.get(api)
        setFaqData(response.data)
      } catch (error) {
        console.error('Error while fetching faq data', error)
      }
    }
    fetchFaq()
  }, [])

  const handleViewAll = async (issue) => {
    try {
      const response = await axios.get(`https://www.pravaayu.com/api/faqs/${issue}`)
      setFaqData(response.data)
      setToggle(issue)
    } catch (error) {
      console.error('Error while fetching data', error)
    }
  }

  const handleClose = () => {
    setToggle(null)
    window.location.reload()
  }

  return (
    <div className="container">
      <h2>Treatment List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Service Number</th>
            <th>Questions</th>
            <th>Answers</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {faqData.map((faq, index) => (
            <tr key={index}>
              <td>
                {faq.service_id} -{faq.issues}{' '}
              </td>
              <td>{faq.question}</td>
              <td>{faq.answers}</td>
              <td>
                {toggle === faq.service_id && index === 0 ? (
                  <button className="btn btn-primary" onClick={handleClose}>
                    Close
                  </button>
                ) : (
                  toggle !== faq.service_id && (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleViewAll(faq.service_id)}
                    >
                      View All
                    </button>
                  )
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FaqList

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TreatmentList = ({ services }) => {
  console.log(services)
  const [treatments, setTreatments] = useState([])
  const [expandedTreatmentId, setExpandedTreatmentId] = useState(null)

  useEffect(() => {
    const apiUrl = 'https://www.pravaayu.com/api/all-treatments'

    const fetchTreatments = async () => {
      try {
        const response = await axios.get(apiUrl)
        setTreatments(response.data)
      } catch (error) {
        console.error('Error while fetching data', error)
      }
    }

    fetchTreatments()
  }, [])

  const handleViewAll = async (issue) => {
    try {
      const response = await axios.get(`https://www.pravaayu.com/api/treatments/${issue}`)
      setTreatments(response.data)
      setExpandedTreatmentId(issue)
    } catch (error) {
      console.error('Error while fetching data', error)
    }
  }

  const handleClose = () => {
    setExpandedTreatmentId(null)
    window.location.reload()
  }

  return (
    <div className="container">
      <h2>Treatment List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Service Number</th>
            <th>Disease</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {treatments.map((treatment, index) => (
            <tr key={index}>
              <td>
                {treatment.service_id} -{treatment.issues}{' '}
              </td>
              <td>{treatment.disease_name}</td>
              <td>{treatment.description}</td>
              <td>
                {expandedTreatmentId === treatment.service_id && index === 0 ? (
                  <button className="btn btn-primary" onClick={handleClose}>
                    Close
                  </button>
                ) : (
                  expandedTreatmentId !== treatment.service_id && (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleViewAll(treatment.service_id)}
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

export default TreatmentList

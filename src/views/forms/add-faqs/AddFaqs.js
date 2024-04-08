import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '/src/scss/Button.css'

const AddFaqs = () => {
  const [services, setServices] = useState([])
  const [formData, setFormData] = useState({
    service_id: '',
    question: '',
    answers: '',
  })
  useEffect(() => {
    const api = 'https://www.pravaayu.com/api/all-services'

    const fetchData = async () => {
      try {
        const response = await axios.get(api)
        setServices(response.data)
      } catch (error) {
        console.error('Error fetching services', error)
      }
    }

    fetchData() // Invoke fetchData function here
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  // const newApi = ('http://localhost:5000/api/add-faq', formData)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const api = 'https://www.pravaayu.com/api/add-faq'

    try {
      const response = await axios.post(api, formData)
      // Handle response if needed
      console.log('FAQ added successfully:', response.data)
      // Clear form data after successful submission if needed
      setFormData({
        service_id: '',
        question: '',
        answers: '',
      })
    } catch (error) {
      console.error('Error adding FAQ:', error)
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h2 className="mb-0">Add Faqs</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="service_id">Select Service:</label>
                  <select
                    id="service_id"
                    name="service_id"
                    value={formData.service_id}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="">Select an Issue</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.id} - {service.issues}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="disease_name">Questions:</label>
                  <input
                    type="text"
                    id="question"
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Answers:</label>
                  <textarea
                    id="answers"
                    name="answers"
                    value={formData.answers}
                    onChange={handleChange}
                    className="form-control"
                  ></textarea>
                </div>
                <button id="new-button" type="submit" className="btn btn-primary">
                  Add faq
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddFaqs

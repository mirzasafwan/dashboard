import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '/src/scss/Button.css'


const Select = () => {
  const [services, setServices] = useState([])
  const [formData, setFormData] = useState({
    service_id: '', // This will store the selected service ID
    disease_name: '',
    description: '',
  })
 
  useEffect(() => {
    // Fetch services data when the component mounts
    axios
      .get('https://www.pravaayu.com/api/all-services')
      .then((response) => {
        setServices(response.data) // Assuming the API returns an array of services
      })
      .catch((error) => {
        console.error('Error fetching services:', error)
      })
  }, []) // Empty dependency array to ensure this effect runs only once

  console.log(services, 'from api')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Make a POST request to add treatment using formData
    axios
      .post('https://www.pravaayu.com/api/add-treatment', formData)
      .then((response) => {
        console.log('Treatment added successfully:', response.data)
        // Reset the form after successful submission
        setFormData({
          service_id: '',
          disease_name: '',
          description: '',
        })
      })
      .catch((error) => {
        console.error('Error adding treatment:', error)
      })
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h2 className="mb-0">Add Treatments</h2>
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
                  <label htmlFor="disease_name">Disease Name:</label>
                  <input
                    type="text"
                    id="disease_name"
                    name="disease_name"
                    value={formData.disease_name}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="form-control"
                  ></textarea>
                </div>
                <button id="new-button" type="submit" className="btn btn-primary">
                  Add Treatment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Select

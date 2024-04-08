import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import TreatmentList from '../treatment-list/TreatmentList'

const ServiceList = () => {
  const [services, setServices] = useState([])
  const navigate = useNavigate() // Initialize the navigate function

  useEffect(() => {
    // Fetch data from the API
    axios
      .get('https://www.pravaayu.com/api/all-services')
      .then((response) => {
        setServices(response.data)
      })
      .catch((error) => {
        console.error('Error fetching services:', error)
      })
  }, [])

  // Function to handle edit button click
  const handleEdit = (service) => {
    // Pass the selected service data as state to the FormControl component
    navigate(`/forms/form-control?serviceId=${service.id}`, { state: { service } })
  }
  console.log(services, 'from service list')
  return (
    <>
      <div className="container mt-5">
        <h2>Service List</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Issues</th>
              {/* <th>Title</th>
              <th>Heading</th>
              <th>Meta Description</th>
              <th>Url</th>
              <th>Images</th> */}
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.issues}</td>
                {/* <td>{service.title}</td>
                <td>{service.heading}</td>
                <td>{service.meta_description}</td>
                <td>{service.unique_url}</td>
                <td>{service.banner_images}</td> */}
                <td>
                  {/* Pass the service data to the handleEdit function */}
                  <button onClick={() => handleEdit(service)} className="btn btn-primary">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ServiceList

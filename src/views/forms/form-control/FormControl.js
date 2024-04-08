import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom' // Import useLocation
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '/src/scss/Button.css'
const FormControl = () => {
  const [formData, setFormData] = useState({
    issues: '',
    title: '',
    heading: '',
    meta_description: '',
    unique_url: '',
    banner_images: null,
  })
  const location = useLocation() // Initialize the location
  const navigate = useNavigate() // Initialize the navigate function

  useEffect(() => {
    if (location.state && location.state.service) {
      const { service } = location.state
      setFormData({
        issues: service.issues,
        title: service.title,
        heading: service.heading,
        meta_description: service.meta_description,
        unique_url: service.unique_url,
        banner_images: service.banner_images,
      })
    }
  }, [location.state])
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const formDataToSend = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value)
      })

      const response = await axios.post(
        'https://www.pravaayu.com/api/add-service',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      console.log(response.data)
      setFormData({
        issues: '',
        title: '',
        heading: '',
        meta_description: '',
        unique_url: '',
        banner_images: null,
      })
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    console.log('selected file: ', file)
    setFormData({
      ...formData,
      banner_images: file,
    })
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h2 className="mb-0">Services List</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
                <div>
                  <div className="c">
                    <label htmlFor="issues">Issues</label>
                    <input
                      type="text"
                      id="issues"
                      name="issues"
                      value={formData.issues}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="heading">Heading</label>
                    <input
                      type="text"
                      id="heading"
                      name="heading"
                      value={formData.heading}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="meta_description">Meta Description</label>
                    <input
                      type="text"
                      id="meta_description"
                      name="meta_description"
                      value={formData.meta_description}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="unique_url">Unique Url</label>
                    <input
                      type="text"
                      id="unique_url"
                      name="unique_url"
                      value={formData.unique_url}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="banner_images">Banner Images</label>
                    <input
                      type="file"
                      id="banner_images"
                      name="banner_images"
                      // value={formData.banner_images}
                      onChange={handleFileChange}
                      className="form-control"
                    />
                  </div>
                  {/* Repeat similar structure for other form fields */}
                  <button id="form-button" type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormControl

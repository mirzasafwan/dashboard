import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios from 'axios'
import Page404 from '../page404/Page404'

const Register = () => {
  // const [email, setEmail] = useState('')
  // const [name, setName] = useState('')
  // const [password, setPassword] = useState('')

  // const createUser = () => {
  //   axios
  //     .post('https://pravaayu.com/api/register', {
  //       UserName: name,
  //       Email: email,
  //       password: password,
  //     })
  //     .then(() => {
  //       console.log('user has been created')
  //     })
  // }

  return (
    // <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
    <>
      <Page404 />
    </>

    /* <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-body-secondary">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                    
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      // autoComplete="username"
                      onChange={(event) => {
                        setName(event.target.value)
                      }}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="Email"
                      autoComplete="email"
                      onChange={(event) => {
                        setEmail(event.target.value)
                      }}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      onChange={(event) => {
                        setPassword(event.target.value)
                      }}
                    />
                  </CInputGroup> */
    /* <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </CInputGroup> */
    /* <div className="d-grid">
                    <CButton onClick={createUser} color="success">
                      Create Account
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer> */
    // </div>
  )
}

export default Register

import React, { Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProtectedRoutes from './components/services/ProtectedRoutes'
import FormControl from './views/forms/form-control/FormControl'
import Select from './views/forms/select/Select'
import AddFaqs from './views/forms/add-faqs/AddFaqs'
import TreatmentList from './views/forms/treatment-list/TreatmentList'
import FaqList from './views/forms/faq-list/FaqList'
import ServiceList from './views/forms/services/ServiceList'

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    // localStorage.setItem("loggedin", 'no')
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/404" element={<Page404 />} />
          <Route exact path="/500" element={<Page500 />} />
          <Route path="/" element={<ProtectedRoutes />}>
            {/* Render the DefaultLayout component here */}
            <Route element={<DefaultLayout />}>
              {/* Add the route for FormControl page here */}
              <Route path="/forms/form-control" element={<FormControl />} />
              <Route path="/forms/select" element={<Select />} />
              <Route path="/forms/add-faqs" element={<AddFaqs />} />
              <Route path="/forms/treatment-list" element={<TreatmentList />} />
              <Route path="/forms/faq-list" element={<FaqList />} />
              <Route path="/forms/service-list" element={<ServiceList />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App

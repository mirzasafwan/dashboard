import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

// Protected route component
const ProtectedRoutes = () => {
  // Check if the user is logged in
  const isLoggedIn = localStorage.getItem('loggedin') === 'true'

  // If user is logged in, render the child components
  // Otherwise, redirect to the login page
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes

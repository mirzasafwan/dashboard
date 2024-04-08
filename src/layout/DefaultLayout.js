import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import Page404 from '../views/pages/page404/Page404'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        <AppFooter />
      </div>
      {/* <Page404 /> */}
    </div>
  )
}

export default DefaultLayout

import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import '/src/scss/Button.css'

import avatar8 from './../../assets/images/avatars/8.jpg'

const AppHeaderDropdown = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('loggedin')
    navigate('/login')
  }
  return (
    <CDropdown variant="nav-item">
      <CDropdownItem>
        <CIcon id="cursor" icon={cilLockLocked} className="me-2" onClick={handleLogout} />
        <span id="abcd" onClick={handleLogout}>
          Logout
        </span>
      </CDropdownItem>
      {/* </CDropdownMenu> */}
    </CDropdown>
  )
}

export default AppHeaderDropdown

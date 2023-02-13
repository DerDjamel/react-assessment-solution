import React from 'react'
import NavBar from 'components/NavBar'
import { AppLayoutProps } from './AppLayout.types'
import './AppLayout.styles.css'

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="rootAppWrapper">
      <div className="nav">
        <NavBar />
      </div>
      <div className="pageContainer">{children}</div>
    </div>
  )
}

export default AppLayout
